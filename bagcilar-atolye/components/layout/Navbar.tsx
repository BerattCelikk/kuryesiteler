"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { WorkshopStatusBadge } from "@/components/ui/WorkshopStatusBadge";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Nasıl Çalışır", href: "/nasil-calisir" },
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Atölye", href: "/#atolye" },
  { label: "SSS", href: "/#sss" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={32} />
            <div className="leading-none">
              <div className="text-[15px] font-black tracking-tight text-white">
                KURYE PROJE
              </div>
              <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
                {WORKSHOP.district}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-[13px] font-medium tracking-wide transition-colors",
                  isActive(link.href) ? "text-[#FF6B00]" : "text-white/85 hover:text-white",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1.5px] bg-[#FF6B00] transition-all duration-300",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <WorkshopStatusBadge size="sm" />
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlowButton href="/randevu" variant="primary" size="sm">
                Randevu Al
              </GlowButton>
            </motion.div>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            <AnimatePresence initial={false} mode="wait">
              {open ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0A0A0A]/98 pt-[60px] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-[#2A2A2A]"
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-5 text-2xl font-bold text-white"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#FF6B00]">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 px-6"
            >
              <GlowButton href="/randevu" variant="primary" size="lg" fullWidth>
                Randevu Al
              </GlowButton>
            </motion.div>

            <div className="mt-auto space-y-4 border-t border-[#2A2A2A] px-6 py-6">
              <WorkshopStatusBadge size="md" />
              <a
                href={`tel:${WORKSHOP.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-white"
              >
                <Phone size={16} className="text-[#FF6B00]" />
                {WORKSHOP.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
