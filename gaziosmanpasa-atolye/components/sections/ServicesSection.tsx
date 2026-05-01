"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { CheckCircle2, ArrowUpRight, ScanLine, RefreshCcw, Wrench, Calculator, Network } from "lucide-react";
const Fingerprint = ScanLine;
import TiltCard from "@/components/ui/TiltCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Fingerprint,
  RefreshCcw,
  Wrench,
  Calculator,
  Network,
};

export default function ServicesSection() {
  const [active, setActive] = useState<string>(WORKSHOP.services[0].id);
  const current = WORKSHOP.services.find((s) => s.id === active)!;
  const Icon = iconMap[current.icon] || Fingerprint;

  return (
    <section className="snap-section bg-surface flex items-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-20">
        <FadeIn>
          <div className="font-mono text-mono-label text-coral-400 mb-3">// HİZMETLER</div>
          <h2 className="font-display font-bold text-section-xl text-text-bright mb-12 max-w-3xl">
            {WORKSHOP.copy.servicesTitle}
          </h2>
        </FadeIn>

        <Tabs.Root value={active} onValueChange={setActive} orientation="vertical">
          <TiltCard maxTilt={4}>
            <div className="panel holo-card overflow-hidden grid md:grid-cols-[260px_1fr]">
              <Tabs.List className="bg-elevated/50 border-r border-white/5 flex md:flex-col overflow-x-auto md:overflow-visible">
                {WORKSHOP.services.map((s) => {
                  const ItemIcon: React.ComponentType<{ className?: string }> = iconMap[s.icon] ?? Fingerprint;
                  const selected = s.id === active;
                  return (
                    <Tabs.Trigger
                      key={s.id}
                      value={s.id}
                      className={cn(
                        "group relative flex items-center gap-3 px-5 py-4 text-left transition-all min-w-[180px] md:min-w-0 md:w-full border-b md:border-b-0 md:border-l-2 border-transparent",
                        selected
                          ? "bg-coral-500/8 md:border-l-coral-500 text-text-bright"
                          : "hover:bg-raised/50 text-text-secondary"
                      )}
                    >
                      <ItemIcon className={cn("w-4 h-4 shrink-0", selected ? "text-coral-400" : "text-text-muted")} />
                      <span className="font-body font-semibold text-sm whitespace-nowrap">{s.navTitle}</span>
                    </Tabs.Trigger>
                  );
                })}
              </Tabs.List>

              <AnimatePresence mode="wait">
                <Tabs.Content key={current.id} value={current.id} forceMount={undefined} className="p-8 md:p-10 outline-none data-[state=inactive]:hidden">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                    className="grid md:grid-cols-[1fr_auto] gap-8 items-start"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge color={current.badgeColor as "coral" | "cyan" | "amber"}>{current.badge}</Badge>
                      </div>
                      <h3 className="font-display font-bold text-section-lg text-text-bright mb-4">{current.pageTitle}</h3>
                      <p className="font-body text-base text-text-secondary leading-relaxed mb-6 max-w-xl">{current.longDesc}</p>
                      <ul className="space-y-2 mb-6">
                        {current.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 font-body text-sm text-text-bright">
                            <CheckCircle2 className="w-4 h-4 text-coral-500 shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                      <Button href={`/hizmetler/${current.slug}`} variant="primary" size="md">
                        Detay <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-2xl bg-coral-500/10 border border-coral-500/30">
                      <Icon className="w-16 h-16 text-coral-400" strokeWidth={1.4} />
                    </div>
                  </motion.div>
                </Tabs.Content>
              </AnimatePresence>
            </div>
          </TiltCard>
        </Tabs.Root>

        <div className="mt-8 flex justify-center">
          <Button href="/hizmetler" variant="secondary">
            Tümünü Gör →
          </Button>
        </div>
      </div>
    </section>
  );
}
