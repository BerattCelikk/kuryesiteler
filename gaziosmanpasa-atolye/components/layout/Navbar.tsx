"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition, animated } from "@react-spring/web";
import { X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import StatusIndicator from "@/components/ui/StatusIndicator";
import Button from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Başlangıç" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/nasil-calisir", label: "Nasıl Çalışır" },
  { href: "/rotani-bul", label: "Rotanı Bul" },
  { href: "/filonu-yonet", label: "Ekiple Gel" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transitions = useTransition(open ? links : [], {
    keys: (l) => l.href,
    from: { opacity: 0, transform: "translateX(-30px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-30px)" },
    trail: 70,
    config: { tension: 280, friction: 22 },
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-16 md:h-16 backdrop-blur-md bg-void/85 border-b border-coral-500/15">
        <div className="h-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Ana sayfa">
            <Logo size={26} />
            <span className="font-body font-semibold text-[14px] text-text-bright tracking-tight">KURYE PROJE</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-coral-500" />
            <span className="hidden sm:inline-block font-mono text-[11px] text-coral-400 uppercase tracking-widest">GOP</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className="relative group font-body font-medium text-sm text-text-secondary hover:text-text-bright transition-colors">
                  <span className={cn(active && "text-text-bright")}>{l.label}</span>
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-px bg-coral-500 transition-transform origin-left duration-300",
                      "w-full",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:block">
              <StatusIndicator size="sm" />
            </div>
            <Button href={WORKSHOP.waLink} target="_blank" rel="noopener" variant="ghost" size="sm" className="hidden sm:inline-flex">
              Mesaj At
            </Button>
            <Button href="/randevu" variant="primary" size="sm">
              Randevu
            </Button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menü"
              className="lg:hidden relative w-10 h-10 rounded-full border border-coral-500/30 flex items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full" style={{ animation: "radarRing 2s ease-out infinite", border: "1px solid rgba(232,67,90,0.4)" }} />
              <span className="block w-4 h-px bg-coral-500" />
              <span className="block w-4 h-px bg-coral-500 absolute mt-2" />
              <span className="block w-4 h-px bg-coral-500 absolute -mt-2" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/97 backdrop-blur-xl flex flex-col"
          >
            <div className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-coral-500/15">
              <StatusIndicator size="sm" />
              <button onClick={() => setOpen(false)} aria-label="Kapat" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15">
                <X className="w-5 h-5 text-coral-300" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-2 px-8">
              {transitions((style, l) => (
                <animated.div style={style}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-body font-bold text-[28px] text-text-bright hover:text-coral-300 transition-colors py-2"
                  >
                    {l.label}
                  </Link>
                </animated.div>
              ))}
            </nav>
            <div className="px-8 py-8 border-t border-white/8 flex flex-col gap-3">
              <Button href={WORKSHOP.waLink} target="_blank" variant="secondary" size="md" fullWidth>
                Mesaj At
              </Button>
              <Button href="/randevu" variant="primary" size="md" fullWidth onClick={() => setOpen(false)}>
                Randevu Al
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
