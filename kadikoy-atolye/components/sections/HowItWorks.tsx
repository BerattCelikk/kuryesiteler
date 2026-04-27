"use client";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { WORKSHOP } from "@/lib/constants";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";

type IconName = keyof typeof Icons;

export default function HowItWorks() {
  return (
    <section className="bg-ivory-mid py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="editorial-label">Süreç</div>
        <EditorialRule color="gold" className="mt-3" />
        <InkReveal as="h2" className="mt-6">
          <span className="block font-display font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-ink">
            {WORKSHOP.copy.howitTitle}
          </span>
        </InkReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10">
          {WORKSHOP.steps.map((s, i) => {
            const Icon = (Icons[s.icon as IconName] ?? Icons.Sparkle) as React.ComponentType<{ className?: string; strokeWidth?: number }>;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="editorial-card relative px-7 py-8"
              >
                <span
                  aria-hidden
                  className="absolute -top-2 -right-2 font-display font-light text-[clamp(4rem,8vw,8rem)] leading-none text-forest-500/[0.07] select-none pointer-events-none"
                >
                  {s.n}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-md font-mono text-[12px] bg-forest-100 text-forest-500">
                    {s.n}
                  </span>
                  <Icon className="w-5 h-5 text-forest-400" strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 font-display italic font-medium text-[clamp(1.5rem,2.5vw,2.2rem)] leading-[1.1] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.75] text-text-secondary">
                  {s.desc}
                </p>
                <p className="mt-2 font-body text-[14px] leading-[1.7] text-text-muted">
                  {s.detail}
                </p>
                <div className="mt-5 font-mono italic text-[11px] tracking-[0.08em] text-gold-500">
                  {s.tag}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
