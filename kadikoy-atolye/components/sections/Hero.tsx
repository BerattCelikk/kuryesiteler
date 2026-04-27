"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours } from "@/lib/utils";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 600], [0, -180]);
  const subY = useTransform(scrollY, [0, 600], [0, -90]);

  return (
    <section ref={ref} className="relative min-h-[90dvh] overflow-hidden bg-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[90dvh]">
        {/* LEFT — ivory editorial */}
        <div className="relative px-6 sm:px-10 lg:pl-16 lg:pr-12 pt-20 pb-16 flex flex-col justify-center">
          <motion.div style={{ y: subY }}>
            <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-forest-500">
              Araç Projesi · Anadolu Yakası
            </div>
            <EditorialRule color="gold" width="32px" className="mt-3" />
          </motion.div>

          <motion.div style={{ y: headlineY }} className="mt-8">
            <InkReveal as="h1">
              <span className="block font-display font-light text-[clamp(4rem,10vw,10rem)] leading-[0.90] tracking-[0.02em] text-ink">
                {WORKSHOP.copy.heroLine1}
              </span>
            </InkReveal>
            <InkReveal delay={200} as="div" className="mt-2">
              <span className="block font-display italic font-light text-[clamp(4rem,10vw,10rem)] leading-[0.90] tracking-[0.02em] text-forest-500">
                {WORKSHOP.copy.heroLine2}
              </span>
            </InkReveal>
          </motion.div>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <StatusBadge showHours />
            <span className="font-mono text-[12px] text-text-muted">Bugün {getTodayHours()}</span>
          </div>

          <InkReveal delay={400} className="mt-6 max-w-md">
            <p className="font-display italic font-light text-forest-500 text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.5] whitespace-pre-line">
              {WORKSHOP.copy.heroSub}
            </p>
          </InkReveal>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/randevu" size="lg" variant="primary">Randevu Alın</Button>
            <Button href="/nasil-calisir" size="lg" variant="ghost">Nasıl Çalışır</Button>
          </div>
          <div className="mt-4 font-body text-[13px] text-text-muted">
            Ücretsiz · 10 dakika · Walk-in kabul
          </div>
        </div>

        {/* RIGHT — forest panel */}
        <div className="section-forest relative px-6 sm:px-10 lg:pr-16 lg:pl-12 pt-20 pb-16 flex flex-col justify-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ivory/60">
            Atölye Verileri
          </div>
          <EditorialRule color="ivory" width="32px" className="mt-3" />

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12">
            {WORKSHOP.stats.map((s) => (
              <div key={s.id} className="relative">
                <div className="font-display font-light text-[clamp(2.5rem,4vw,4rem)] leading-none text-ivory">
                  {s.display}
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ivory/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 h-px bg-ivory/10" />

          <div className="mt-8 font-mono text-[12px] text-ivory/70 leading-[1.7]">
            <div>{WORKSHOP.address}</div>
            <div className="mt-1">
              Hafta içi {WORKSHOP.hours.weekday.open}–{WORKSHOP.hours.weekday.close} ·
              Hafta sonu {WORKSHOP.hours.weekend.open}–{WORKSHOP.hours.weekend.close}
            </div>
          </div>

          <div className="mt-6">
            <Button href={WORKSHOP.googleMapsUrl} external size="sm" variant="dark">
              Yol Tarifi Alın
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-text-muted"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.12em]">Aşağı Kaydırın</span>
        <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
