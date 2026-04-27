"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";

export default function Testimonials() {
  return (
    <section className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="editorial-label">Görüşler</div>
        <EditorialRule color="gold" className="mt-3" />
        <InkReveal as="h2" className="mt-6">
          <span className="block font-display font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-ink">
            {WORKSHOP.copy.testiTitle}
          </span>
        </InkReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORKSHOP.testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="editorial-card px-8 py-10"
            >
              <Quote className="w-6 h-6 text-gold-400" strokeWidth={1.5} aria-hidden />
              <blockquote className="mt-4 font-display italic font-light text-[clamp(1.1rem,1.6vw,1.4rem)] leading-[1.55] text-ink">
                {t.text}
              </blockquote>
              <EditorialRule color="forest" width="40px" className="mt-6" />
              <figcaption className="mt-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-100 text-forest-600 font-display text-[18px] font-medium flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <div className="font-body font-semibold text-[15px] text-ink">{t.name}</div>
                  <div className="font-mono text-[11px] text-text-muted uppercase tracking-[0.08em]">
                    {t.role} · {t.district}
                  </div>
                </div>
                <div className="ml-auto flex gap-0.5 text-gold-400" aria-label={`${t.stars} yıldız`}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-gold-400" strokeWidth={0} />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
