"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { HeroIllustration } from "@/components/ui/HeroIllustration";
import { DotGrid } from "@/components/ui/DotGrid";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours } from "@/lib/utils";
import { useTypewriter } from "@/hooks/useTypewriter";

const CYCLE = [
  "Kayıt 10 dakikada biter, aynı gün aktifsiniz.",
  "Ümraniye Metro'dan 5 dakika, TEM'den 5 dakika.",
  "Kargo, yemek, market: her kuryeye tek atölyede destek.",
  "Walk-in kabul. Randevusuz gelebilirsiniz.",
];

export function HomeHero() {
  const rotating = useTypewriter({ texts: CYCLE, speed: 45, deleteSpeed: 25, pause: 2200 });
  const [socialProof, setSocialProof] = useState<number>(340);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.total === "number") setSocialProof(d.total);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden hero-gradient-bg">
      <DotGrid />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-center min-h-[calc(100vh-64px)]">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-blue-500"
          >
            // {WORKSHOP.heroHeadline.eyebrow}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 inline-flex items-center gap-2 bg-white border border-border-light rounded-full pl-1 pr-4 py-1 shadow-card"
          >
            <StatusBadge size="sm" />
            <span className="text-xs text-text-muted">Bugün {getTodayHours()}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 fluid-hero text-text-primary"
          >
            {WORKSHOP.heroHeadline.line1}
            <br />
            <span className="text-blue-600 wavy-underline">
              {WORKSHOP.heroHeadline.line2}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-text-muted min-h-[60px] max-w-xl leading-relaxed"
          >
            <span>{rotating}</span>
            <span className="inline-block w-0.5 h-5 bg-blue-600 ml-0.5 align-middle animate-blink" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              variant="primary"
              size="lg"
              href="/randevu"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Randevu Al
            </Button>
            <Button variant="ghost" size="lg" href="/nasil-calisir">
              Nasıl Çalışır
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-5 flex items-center gap-5 text-xs font-mono text-text-muted"
          >
            <span>✓ Ücretsiz</span>
            <span>✓ 10 dakika</span>
            <span>✓ Walk-in</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse-soft" />
            <span className="text-sm text-blue-700">
              Bu ay <span className="font-mono font-bold">{socialProof}</span> kurye kayıt oldu
            </span>
          </motion.div>
        </div>

        <div>
          <HeroIllustration />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 card-base p-5"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="stat-label">ATÖLYE</span>
              <StatusBadge size="sm" />
            </div>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-text-secondary">{WORKSHOP.address}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-text-secondary">Bugün {getTodayHours()}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
