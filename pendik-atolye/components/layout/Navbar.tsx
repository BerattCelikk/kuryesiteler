"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: WORKSHOP.nav.home },
  { href: "/hizmetler", label: WORKSHOP.nav.services },
  { href: "/surec", label: WORKSHOP.nav.process },
  { href: "/konum", label: WORKSHOP.nav.location },
  { href: "/filo-yonetimi", label: WORKSHOP.nav.fleet },
  { href: "/sss", label: WORKSHOP.nav.faq },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow",
        scrolled && "shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
      )}
    >
      <nav className="max-w-7xl mx-auto h-[60px] px-6 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Logo size={32} />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[15px] text-gray-900">Kurye Proje</span>
            <span className="w-px h-4 bg-gray-200" />
            <span className="font-display font-semibold text-[14px] text-lime-600 uppercase tracking-wide">
              Pendik
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1 ml-6">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "progress-bar-item px-3 py-2 text-[14px] font-semibold transition-colors",
                  active ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-3">
          <StatusBadge size="sm" />
          <Button variant="secondary" size="sm" href={WORKSHOP.waLink}>
            WhatsApp
          </Button>
          <Button variant="primary" size="sm" href="/randevu">
            Randevu
          </Button>
        </div>

        <button
          className="lg:hidden ml-auto text-gray-700 p-1.5 -mr-1.5"
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
          >
            <div className="px-6 py-4 flex flex-col">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    className={cn(
                      "block py-3 text-[16px] font-semibold border-b border-gray-100",
                      pathname === l.href ? "text-lime-600" : "text-gray-800"
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-2 mt-5">
                <Button variant="primary" size="md" href="/randevu" fullWidth>
                  Randevu Al
                </Button>
                <Button variant="secondary" size="md" href={WORKSHOP.waLink} fullWidth>
                  WhatsApp
                </Button>
                <div className="mt-3 flex justify-center">
                  <StatusBadge size="sm" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
