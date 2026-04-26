"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ t, index = 0 }: { t: Testimonial; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-base card-hover p-6 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="pill pill-blue">{t.platform}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: t.stars }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
          ))}
        </div>
      </div>
      <Quote className="w-6 h-6 text-blue-200 mb-3" />
      <p className="text-text-secondary leading-relaxed flex-1">"{t.text}"</p>
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border-light">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center">
          {t.initials}
        </div>
        <div>
          <div className="font-display font-semibold text-sm text-text-primary">{t.name}</div>
          <div className="text-xs text-text-muted">
            {t.role} · {t.district}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
