"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Navigation } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import StatusIndicator from "@/components/ui/StatusIndicator";
import SplitFlapCounter from "@/components/ui/SplitFlapCounter";
import Button from "@/components/ui/Button";
import RadarPing from "@/components/ui/RadarPing";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours } from "@/lib/utils";

const NightSceneR3F = dynamic(() => import("@/components/three/NightSceneR3F"), { ssr: false });

export default function HeroSection() {
  const date = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();

  return (
    <section className="snap-section flex flex-col">
      <div className="absolute inset-0 z-0">
        <NightSceneR3F />
      </div>
      <div className="absolute inset-0 z-[1] grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 z-[2] hero-gradient pointer-events-none" />

      <div className="relative z-10 flex-1 flex items-center pt-20">
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-mono-label text-coral-400 mb-6"
            >
              {`// ${date} · GOP ATÖLYESİ · ROTA #4`}
            </motion.div>

            <h1 className="font-display font-extrabold text-hero-display leading-none tracking-tighter">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0 }}
                className="block text-text-bright"
              >
                {WORKSHOP.copy.heroLine1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="block text-coral-glow"
              >
                {WORKSHOP.copy.heroLine2}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="block text-text-bright"
              >
                {WORKSHOP.copy.heroLine3}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="font-body text-base md:text-lg text-text-secondary max-w-md mt-6 leading-relaxed"
            >
              {WORKSHOP.copy.heroSub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <Button href="/randevu" size="lg" variant="primary">
                Rotayı Başlat <Navigation className="w-4 h-4" />
              </Button>
              <Button href="/hizmetler" size="lg" variant="secondary">
                Daha Fazlası
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-text-muted mt-8 uppercase tracking-widest"
            >
              <span>✓ Ücretsiz Kayıt</span>
              <span>✓ 10 Dakika</span>
              <span>✓ Walk-In</span>
              <span>✓ Sabah 7:30</span>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
              style={{ animation: "floatY 5s ease-in-out infinite" }}
            >
              <TiltCard maxTilt={6} className="panel holo-card p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/8">
                  <span className="font-mono text-mono-label text-coral-300">GOP_ATÖLYE_STATUS.SYS</span>
                  <RadarPing size={20} className="text-coral-500">
                    <MapPin className="w-3 h-3 text-coral-500" />
                  </RadarPing>
                </div>
                <dl className="grid grid-cols-[max-content_1fr] gap-x-5 gap-y-3 font-mono text-[12px]">
                  <dt className="text-text-muted">DURUM:</dt>
                  <dd><StatusIndicator size="sm" /></dd>
                  <dt className="text-text-muted">ADRES:</dt>
                  <dd className="text-text-bright">Fevzi Çakmak Cad.</dd>
                  <dt className="text-text-muted">SAAT:</dt>
                  <dd className="text-text-bright">{getTodayHours()}</dd>
                </dl>
                <div className="my-4 border-t border-white/8" />
                <dl className="grid grid-cols-[max-content_1fr] gap-x-5 gap-y-3 font-mono text-[12px] items-center">
                  <dt className="text-text-muted">NÜFUS:</dt>
                  <dd><SplitFlapCounter value="500K+" color="coral" className="text-base" /></dd>
                  <dt className="text-text-muted">KURYE:</dt>
                  <dd><SplitFlapCounter value="8.000+" color="cyan" className="text-base" /></dd>
                </dl>
                <div className="my-4 border-t border-white/8" />
                <dl className="grid grid-cols-[max-content_1fr] gap-x-5 gap-y-3 font-mono text-[12px] mb-4">
                  <dt className="text-text-muted">ULAŞIM:</dt>
                  <dd className="text-text-bright">Şişli–GOP hattı</dd>
                </dl>
                <Button href="/randevu" variant="primary" size="md" fullWidth>
                  Randevu Al →
                </Button>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 pb-6 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Aşağı Kaydırın</span>
        <ChevronDown className="w-4 h-4 text-coral-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
