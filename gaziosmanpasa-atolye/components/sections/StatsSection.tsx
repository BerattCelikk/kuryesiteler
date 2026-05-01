"use client";
import StatPanel from "@/components/ui/StatPanel";
import TiltCard from "@/components/ui/TiltCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { WORKSHOP } from "@/lib/constants";
import { useClientDate } from "@/hooks/useClientDate";

export default function StatsSection() {
  // Deferred to client to avoid SSR/CSR clock-skew mismatch in the marquee text.
  const updatedAt =
    useClientDate((now) => now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })) ?? "--:--";
  const tickerItems = [
    `SON GÜNCELLEME: ${updatedAt}`,
    "GOP",
    "AVRUPA YAKASI",
    "ROTA AKTİF",
    "SİSTEM NORMAL",
    "8.000+ KURYE",
    "FEVZİ ÇAKMAK CAD.",
  ];

  return (
    <section className="snap-section bg-void grid-bg flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-20">
          <FadeIn>
            <div className="font-mono text-mono-label text-coral-400 mb-3">// VERİLER</div>
            <h2 className="font-display font-bold text-section-xl text-text-bright mb-12 max-w-3xl">
              {WORKSHOP.copy.statsTitle}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {WORKSHOP.stats.map((stat, i) => (
              <FadeIn key={stat.id} delay={i * 0.08}>
                <TiltCard maxTilt={6}>
                  <StatPanel stat={stat} />
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 overflow-hidden bg-surface/40">
        <div className="ticker font-mono text-[12px] text-text-muted">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              {tickerItems.map((t, j) => (
                <span key={j} className="flex items-center gap-8 whitespace-nowrap">
                  {t}
                  <span className="w-1 h-1 rounded-full bg-coral-500" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
