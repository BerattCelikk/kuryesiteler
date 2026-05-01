"use client";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import {
  CheckCircle2,
  X as XIcon,
  ArrowRight,
  Circle,
  Navigation,
  CreditCard,
  PackageCheck,
  Database,
  SlidersHorizontal,
  Rocket,
  type LucideIcon,
} from "lucide-react";

// Hand-built map keeps lucide-react tree-shakable; the prior `import * as Icons` pulled the entire icon set into the chunk.
const STEP_ICON_MAP: Record<string, LucideIcon> = {
  Navigation,
  CreditCard,
  PackageCheck,
  Database,
  SlidersHorizontal,
  Rocket,
};
import PageHero from "@/components/layout/PageHero";
import RouteLineSVG from "@/components/ui/RouteLineSVG";
import TiltCard from "@/components/ui/TiltCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "daily",
    label: "Günlük",
    badge: "Esnek",
    color: "coral" as const,
    features: ["Tek günlük kira", "Anında iptal", "Min. taahhüt yok", "Test sürüşü ideal"],
  },
  {
    id: "weekly",
    label: "Haftalık",
    badge: "Popüler",
    color: "cyan" as const,
    features: ["%15 indirim", "Hafta arası değişim", "Bakım dahil", "WhatsApp destek"],
  },
  {
    id: "monthly",
    label: "Aylık",
    badge: "En Avantajlı",
    color: "amber" as const,
    features: ["%30 indirim", "Sınırsız değişim", "Aylık bakım dahil", "Öncelikli servis"],
  },
];

const compareRows = [
  { label: "Bekleme süresi", projeli: "10 dakika", projesiz: "1-2 saat" },
  { label: "Plan esnekliği", projeli: "Günlük/Haftalık/Aylık", projesiz: "Sözleşme zorunlu" },
  { label: "Çanta değişimi", projeli: "Aktif planda dahil", projesiz: "Her seferinde ücret" },
  { label: "Bakım", projeli: "Periyodik dahil", projesiz: "Ek ücret" },
  { label: "Destek", projeli: "7/24 WhatsApp", projesiz: "Mesai saatleri" },
  { label: "Hasar koruması", projeli: "Var", projesiz: "Yok" },
];

export default function Page() {
  return (
    <>
      <PageHero
        breadcrumb="GOP → NASIL ÇALIŞIR"
        title="Rotayı Takip Et."
        subtitle="Süreç şeffaf. Adımları biliyorsun, ne zaman ne olacağını biliyorsun."
        className="overflow-hidden"
      />

      {/* Animated route line under hero */}
      <div className="relative h-12 overflow-hidden bg-void">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-full">
          <motion.path
            d="M0 20 Q 200 5, 400 25 T 800 18 T 1200 22"
            stroke="#E8435A"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* Steps - alternating full sections */}
      {WORKSHOP.steps.map((step, i) => {
        const Icon = STEP_ICON_MAP[step.icon] ?? Circle;
        const even = i % 2 === 0;
        return (
          <section
            key={step.n}
            className={cn("relative py-20 md:py-28", even ? "bg-surface" : "bg-void grid-bg")}
          >
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: even ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={cn(even ? "" : "lg:order-2")}
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coral-500/10 border border-coral-500/40 font-mono text-coral-300 font-bold">
                    {step.n}
                  </span>
                  <Badge color="amber">{step.tag}</Badge>
                </div>
                <h2 className="font-display font-bold text-section-xl text-text-bright mb-4">{step.title}</h2>
                <p className="font-body text-lg text-text-secondary mb-4 leading-relaxed">{step.desc}</p>
                <p className="font-body text-base text-text-muted leading-relaxed">{step.detail}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className={cn("flex items-center justify-center", even ? "" : "lg:order-1")}
              >
                <TiltCard maxTilt={8}>
                  <div className="panel holo-card w-full max-w-md aspect-square flex items-center justify-center">
                    <Icon className="w-32 h-32 text-coral-400" strokeWidth={0.8} />
                  </div>
                </TiltCard>
              </motion.div>
            </div>

            {i < WORKSHOP.steps.length - 1 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-12 translate-y-6 z-10">
                <RouteLineSVG className="rotate-90" variant="horizontal" />
              </div>
            )}
          </section>
        );
      })}

      {/* Plan comparison */}
      <section className="bg-surface py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="font-mono text-mono-label text-coral-400 mb-3">// PLAN SEÇENEKLERİ</div>
          <h2 className="font-display font-bold text-section-xl text-text-bright mb-10">Senin Tempon Hangisi?</h2>
          <Tabs.Root defaultValue="weekly">
            <Tabs.List className="grid grid-cols-3 gap-3 mb-8">
              {plans.map((p) => (
                <Tabs.Trigger key={p.id} value={p.id} className="panel p-4 text-left data-[state=active]:border-coral-500/60 data-[state=active]:bg-coral-500/5">
                  <div className="font-mono text-[11px] text-coral-300 uppercase tracking-widest mb-1">{p.badge}</div>
                  <div className="font-display font-bold text-text-bright text-lg">{p.label}</div>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {plans.map((p) => (
              <Tabs.Content key={p.id} value={p.id}>
                <TiltCard maxTilt={3}>
                  <div className="panel holo-card p-7 md:p-10">
                    <Badge color={p.color}>{p.badge}</Badge>
                    <h3 className="font-display font-bold text-section-lg text-text-bright mt-3 mb-5">{p.label} Plan</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 font-body text-text-bright">
                          <CheckCircle2 className="w-4 h-4 text-coral-400" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </section>

      {/* Projeli vs Projesiz */}
      <section className="bg-void grid-bg py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">
          <div className="font-mono text-mono-label text-coral-400 mb-3">// KARŞILAŞTIRMA</div>
          <h2 className="font-display font-bold text-section-xl text-text-bright mb-10">Projeli mi, Projesiz mi?</h2>
          <div className="panel overflow-hidden">
            <div className="grid grid-cols-3 bg-elevated/60 border-b border-white/8">
              <div className="p-4 font-mono text-mono-label text-text-muted">ÖZELLİK</div>
              <div className="p-4 font-mono text-mono-label text-coral-300 border-l border-white/8">PROJELİ (GOP)</div>
              <div className="p-4 font-mono text-mono-label text-text-muted border-l border-white/8">PROJESİZ</div>
            </div>
            {compareRows.map((row, i) => (
              <div key={row.label} className={cn("grid grid-cols-3 border-b border-white/5", i % 2 && "bg-white/[0.015]")}>
                <div className="p-4 font-body text-text-bright text-sm">{row.label}</div>
                <div className="p-4 font-body text-text-bright text-sm border-l border-white/8 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral-400 shrink-0" /> {row.projeli}
                </div>
                <div className="p-4 font-body text-text-secondary text-sm border-l border-white/8 flex items-center gap-2">
                  <XIcon className="w-4 h-4 text-amber-500 shrink-0" /> {row.projesiz}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-coral-gradient py-16">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-extrabold text-section-lg text-white">Süreç bu kadar.</h3>
            <p className="font-body text-white/85 mt-2">Geri kalanı atölyede konuşalım.</p>
          </div>
          <Button href="/randevu" variant="white" size="lg">
            Randevu Al <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
