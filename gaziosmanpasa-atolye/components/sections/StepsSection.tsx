"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import RouteLineSVG from "@/components/ui/RouteLineSVG";
import Button from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";

export default function StepsSection() {
  return (
    <section className="snap-section bg-surface flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(232,67,90,0.08) 0%, transparent 60%)" }} />

      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-mono-label text-coral-400 mb-3">// SÜREÇ</div>
          <h2 className="font-display font-bold text-section-xl text-text-bright mb-12 max-w-3xl">
            {WORKSHOP.copy.howitworksTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-2 relative">
          {WORKSHOP.steps.map((step, i) => {
            const Icon = ((Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[step.icon] ?? Icons.Circle) as React.ComponentType<{ className?: string; strokeWidth?: number }>;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="panel holo-card p-5 h-full flex flex-col items-start text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-coral-500/15 border border-coral-500/40 font-mono text-[11px] text-coral-300 font-bold">
                      {step.n}
                    </span>
                  </div>
                  <Icon className="w-5 h-5 text-coral-400 mb-3" strokeWidth={1.5} />
                  <h3 className="font-body font-semibold text-text-bright text-[15px] mb-1.5 leading-tight">{step.title}</h3>
                  <p className="font-body text-[13px] text-text-secondary leading-relaxed mb-3 flex-1">{step.desc}</p>
                  <span className="inline-block px-2 py-0.5 rounded-full font-mono text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/30 uppercase tracking-widest">
                    {step.tag}
                  </span>
                </div>
                {i < WORKSHOP.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 z-10">
                    <RouteLineSVG variant="horizontal" delay={i * 0.1 + 0.4} duration={0.8} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/nasil-calisir" variant="ghost">
            Detaylı Bilgi →
          </Button>
        </div>
      </div>
    </section>
  );
}
