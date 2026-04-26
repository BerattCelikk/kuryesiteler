"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV: { label: string; href: string }[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Nasıl Çalışır", href: "/nasil-calisir" },
  { label: "Atölye", href: "/atolye" },
  { label: "Sıkça Sorulanlar", href: "/sikca-sorulanlar" },
  { label: "İletişim", href: "/iletisim" },
];

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="16" fill="#FAE8DF" stroke="#C05C28" strokeWidth="1.5" />
      <path
        d="M12 14 H24 A1.5 1.5 0 0 1 25.5 15.5 V25 A1.5 1.5 0 0 1 24 26.5 H12 A1.5 1.5 0 0 1 10.5 25 V15.5 A1.5 1.5 0 0 1 12 14 Z"
        fill="#C05C28"
      />
      <path
        d="M14 14 V11.5 A4 4 0 0 1 18 7.5 A4 4 0 0 1 22 11.5 V14"
        stroke="#C05C28"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        "bg-cream/92 backdrop-blur-md backdrop-saturate-150",
        "border-b border-terra-200/40",
        scrolled && "shadow-[0_2px_12px_rgba(192,92,40,0.10)]",
      )}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo />
            <span className="hidden sm:flex items-center gap-2">
              <span className="font-body font-bold text-ink text-base">Kurye Proje</span>
              <span className="h-1 w-1 rounded-full bg-terra-200" />
              <span className="font-body font-semibold text-terra-500 text-[13px]">
                Sultanbeyli
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative font-body text-[15px] transition-colors",
                    active ? "text-terra-500 font-semibold" : "text-ink-mid hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terra-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <StatusBadge size="sm" />
            <Button variant="ghost" size="sm" href={WORKSHOP.waLink} external>
              WhatsApp
            </Button>
            <Button variant="primary" size="sm" href="/randevu">
              Randevu
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden font-body font-bold text-terra-600 bg-terra-100 border border-terra-200 rounded-full px-4 py-2 text-sm"
            aria-expanded={open}
            aria-label="Menüyü aç/kapat"
          >
            {open ? "Kapat" : "Menü"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden bg-cream border-b border-terra-200/40"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-3 font-body font-semibold text-lg",
                      pathname === item.href ? "text-terra-500" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <StatusBadge size="md" showHours />
                <Button variant="primary" size="md" href="/randevu" fullWidth>
                  Randevu Alın
                </Button>
                <Button variant="whatsapp" size="md" href={WORKSHOP.waLink} external fullWidth>
                  WhatsApp&apos;tan Yazın
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
