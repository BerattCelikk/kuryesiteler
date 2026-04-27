"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WORKSHOP } from "@/lib/constants";
import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: WORKSHOP.nav.home },
  { href: "/hizmetler/sisteme-dahil-olun", label: WORKSHOP.nav.services },
  { href: "/nasil-calisir", label: WORKSHOP.nav.howto },
  { href: "/atolye", label: WORKSHOP.nav.workshop },
  { href: "/merak-ettikleriniz", label: WORKSHOP.nav.faq },
  { href: "/iletisim", label: WORKSHOP.nav.contact },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85 border-b border-[var(--border-light)] transition-shadow duration-300",
          scrolled && "shadow-[var(--shadow-editorial)]"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[60px] md:h-[72px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group" data-cursor="hover">
            <Logo size={36} />
            <span className="font-display text-[18px] font-medium text-ink leading-none">Kurye Proje</span>
            <span className="hidden sm:block w-px h-5 bg-parchment" aria-hidden />
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.12em] text-forest-500">
              Kadıköy
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana navigasyon">
            {LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  data-cursor="hover"
                  className={cn(
                    "relative font-body text-[14px] font-medium transition-colors duration-200",
                    active ? "text-ink" : "text-text-muted hover:text-ink"
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <StatusBadge size="sm" />
            <Button href={WORKSHOP.waLink} external variant="ghost" size="sm">
              Mesaj Gönderin
            </Button>
            <Button href="/randevu" variant="primary" size="sm">
              Randevu Alın
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            data-cursor="hover"
          >
            <span className={cn("block w-5 h-px bg-ink transition-transform", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("block w-5 h-px bg-ink transition-opacity", open && "opacity-0")} />
            <span className={cn("block w-5 h-px bg-ink transition-transform", open && "-translate-y-[6px] -rotate-45")} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden fixed top-[60px] left-0 right-0 z-40 bg-ivory border-b-2 border-forest-500 shadow-[var(--shadow-editorial-lg)]"
          >
            <nav className="px-6 py-8 flex flex-col gap-4" aria-label="Mobil navigasyon">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={l.href}
                    className="font-display text-[24px] font-semibold text-ink hover:text-forest-500"
                    data-cursor="hover"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button href={WORKSHOP.waLink} external variant="ghost" size="md">
                  Mesaj Gönderin
                </Button>
                <Button href="/randevu" variant="primary" size="md">
                  Randevu Alın
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
