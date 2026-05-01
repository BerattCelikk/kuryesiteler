"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronRight, Play, CheckCircle2, ChevronDown } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { FloatingCard } from "@/components/ui/FloatingCard";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section className="noise relative min-h-[100dvh] overflow-hidden bg-[#0A0A0A]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-52 -top-24 h-[120vh] w-[600px] -rotate-12"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,107,0,0.10), rgba(255,107,0,0.02))",
          zIndex: 2,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,107,0,0.08) 0%, transparent 70%)",
          zIndex: 3,
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1fr_420px] lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A0A0A0]"
              style={{ background: "rgba(255,107,0,0.08)" }}
            >
              <span>⚡</span>
              Aynı Gün İşlem
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-fluid-hero font-black tracking-tight"
          >
            <span className="block text-white">Kurye Çantanı</span>
            <span
              className="block text-[#FF6B00]"
              style={{ textShadow: "0 0 40px rgba(255,107,0,0.3)" }}
            >
              Yasallaştır,
            </span>
            <span className="block text-white">Cezasız Çalış.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[500px] text-[17px] leading-[1.7] text-[#A0A0A0]"
          >
            Motosiklet sepeti, topcase ve arka çanta projesi için Bağcılar&apos;ın en hızlı
            atölyesi. TSE onaylı mühendis imzalı proje — 15 dakikada hazır.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <GlowButton
              href="/randevu"
              variant="primary"
              size="lg"
              icon={ChevronRight}
              iconPosition="right"
            >
              Ücretsiz Ön Kontrol
            </GlowButton>
            <GlowButton
              href="/nasil-calisir"
              variant="secondary"
              size="lg"
              icon={Play}
              iconPosition="left"
            >
              Nasıl Çalışır?
            </GlowButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-6">
            {["TÜVTÜRK Onaylı", "TSE Mühendisi", "Bağcılar E-5"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[13px] text-[#A0A0A0]">
                <CheckCircle2 size={16} className="text-[#22C55E]" />
                {t}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="hidden lg:block">
          <FloatingCard />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.22em] text-[#555]">
          Aşağı kaydır
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-[#555]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
