"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-[#111111]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Referanslar</SectionLabel>
          <h2 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            Kuryeler Ne Diyor?
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WORKSHOP.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-8 transition-all duration-300 hover:border-[#FF6B00]/30"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-4 select-none text-[80px] leading-none"
                style={{ color: "rgba(255,107,0,0.10)", fontFamily: "Georgia, serif" }}
              >
                &ldquo;
              </span>

              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, k) => (
                  <Star key={k} size={14} className="fill-[#FF6B00] text-[#FF6B00]" />
                ))}
              </div>

              <p className="mt-4 italic leading-[1.7] text-white">{t.text}</p>

              <div className="mt-6 h-px w-full bg-[#2A2A2A]" />

              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #FF6B00, #FF8C00)",
                  }}
                >
                  {initials(t.name)}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-white">{t.name}</div>
                  <div className="text-[12px] text-[#A0A0A0]">
                    {t.role} · {t.district}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
