"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Icon } from "@/components/ui/Icon";

const NAV_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler", hasDropdown: true },
  { label: "Nasıl Çalışır", href: "/nasil-calisir" },
  { label: "Atölye", href: "/atolye" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-white border-b border-border-light transition-shadow",
          scrolled && "shadow-[0_1px_12px_rgba(15,23,42,.06)]"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Logo size={28} />
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-[15px] text-text-primary">
                Kurye Proje
              </span>
              <span className="text-text-subtle">·</span>
              <span className="font-mono font-bold text-[10px] text-blue-600 uppercase tracking-wider">
                {WORKSHOP.district}
              </span>
            </div>
          </Link>

          {/* Center desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 h-16 flex items-center gap-1 text-sm font-display font-medium transition-colors border-b-2",
                        active
                          ? "text-blue-600 border-blue-600"
                          : "text-text-secondary border-transparent hover:text-text-primary"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform",
                          dropdown && "rotate-180"
                        )}
                      />
                    </Link>
                    <AnimatePresence>
                      {dropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] bg-white border border-border-light shadow-card-lg rounded-[16px] overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {WORKSHOP.services.slice(0, 4).map((s) => (
                              <Link
                                key={s.id}
                                href={s.slug ? `/hizmetler/${s.slug}` : "/hizmetler"}
                                className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-blue-50 transition-colors"
                              >
                                <div className="w-9 h-9 rounded-[8px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                                  <Icon
                                    name={s.icon}
                                    className="w-4 h-4 text-blue-600"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-display font-semibold text-sm text-text-primary">
                                    {s.title}
                                  </div>
                                  <div className="text-xs text-text-muted leading-snug mt-0.5">
                                    {s.detail}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-border-light bg-bg-soft px-5 py-3 flex items-center justify-between">
                            <span className="text-xs text-text-muted">
                              Tüm hizmetlerimizi keşfedin
                            </span>
                            <Link
                              href="/hizmetler"
                              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                            >
                              Tüm Hizmetler →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 h-16 flex items-center text-sm font-display font-medium transition-colors border-b-2",
                    active
                      ? "text-blue-600 border-blue-600"
                      : "text-text-secondary border-transparent hover:text-text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right desktop */}
          <div className="hidden lg:flex items-center gap-2.5">
            <StatusBadge size="sm" />
            <Button
              variant="secondary"
              size="sm"
              href={WORKSHOP.waLink}
              icon={<MessageCircle className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              WhatsApp
            </Button>
            <Button variant="primary" size="sm" href="/randevu">
              Randevu Al
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menü"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-[10px] text-text-primary hover:bg-bg-soft"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-text-primary/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[320px] max-w-[85vw] z-50 bg-white border-l border-border-light shadow-card-lg lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between h-16 px-5 border-b border-border-light">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <Logo size={24} />
                  <span className="font-display font-bold text-sm">Kurye Proje</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Kapat"
                  className="w-9 h-9 flex items-center justify-center rounded-[10px] text-text-primary hover:bg-bg-soft"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                {NAV_ITEMS.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.href} className="mb-1">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between px-3 h-11 rounded-[10px] text-text-primary font-display font-medium hover:bg-bg-soft"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 py-1 flex flex-col gap-1">
                              <Link
                                href="/hizmetler"
                                className="px-3 h-9 flex items-center text-sm text-text-secondary hover:text-blue-600"
                              >
                                Tüm Hizmetler
                              </Link>
                              {WORKSHOP.services
                                .filter((s) => s.slug)
                                .map((s) => (
                                  <Link
                                    key={s.id}
                                    href={`/hizmetler/${s.slug}`}
                                    className="px-3 h-9 flex items-center gap-2 text-sm text-text-secondary hover:text-blue-600"
                                  >
                                    <Icon name={s.icon} className="w-4 h-4 text-text-muted" />
                                    {s.title}
                                  </Link>
                                ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-3 h-11 flex items-center rounded-[10px] font-display font-medium hover:bg-bg-soft",
                        isActive(item.href) ? "text-blue-600 bg-blue-50" : "text-text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="border-t border-border-light p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <StatusBadge size="sm" />
                  <span className="text-xs text-text-muted">Bugün 08:00 – 23:00</span>
                </div>
                <Button variant="secondary" size="md" fullWidth href={WORKSHOP.waLink}>
                  WhatsApp
                </Button>
                <Button variant="primary" size="md" fullWidth href="/randevu">
                  Randevu Al
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
