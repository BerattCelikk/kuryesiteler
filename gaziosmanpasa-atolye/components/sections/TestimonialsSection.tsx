"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import Badge from "@/components/ui/Badge";
import { WORKSHOP } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="snap-section bg-void grid-bg flex items-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-mono-label text-coral-400 mb-3">// REFERANSLAR</div>
          <h2 className="font-display font-bold text-section-xl text-text-bright mb-12 max-w-3xl">
            {WORKSHOP.copy.testimonialsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WORKSHOP.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 90 }}
            >
              <TiltCard maxTilt={5}>
                <div className="panel holo-card p-7 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <Badge color="coral">{t.platform}</Badge>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-coral-500 text-coral-500" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-coral-500/40 mb-3" />
                  <p className="font-body italic text-base text-text-secondary leading-relaxed flex-1">"{t.text}"</p>
                  <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-coral-500/15 border border-coral-500/40 flex items-center justify-center font-mono font-bold text-coral-300 text-[12px]">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-text-bright text-sm">{t.name}</div>
                      <div className="font-mono text-[11px] text-text-muted uppercase tracking-widest">{t.role} · {t.district}</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
