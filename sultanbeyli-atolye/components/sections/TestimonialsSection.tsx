"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WORKSHOP } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="bg-cream-mid py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Referanslar"
          title={WORKSHOP.copy.testiTitle}
          subtitle="Mahallenin sesi — kuryelerimizden bizzat."
          align="center"
        />

        <div className="columns-1 md:columns-2 gap-5 [column-fill:_balance]">
          {WORKSHOP.testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20, filter: "sepia(0.15)" }}
              whileInView={{ opacity: 1, y: 0, filter: "sepia(0)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="break-inside-avoid mb-5 bg-cream rounded-3xl border border-terra-200/40 border-t-4 border-t-terra-300 p-6 shadow-[0_2px_12px_rgba(192,92,40,0.08)]"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, k) => (
                  <Star key={k} size={14} className="text-terra-400 fill-terra-400" />
                ))}
              </div>
              <blockquote className="font-body italic text-ink text-[16px] leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="h-px bg-terra-200/40 my-5" />
              <figcaption className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-terra-100 border border-terra-200 flex items-center justify-center font-display text-terra-500">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-body font-bold text-ink text-[15px]">
                    {t.name}
                  </span>
                  <span className="block font-body text-xs text-ink-light">
                    {t.role} · {t.district}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
