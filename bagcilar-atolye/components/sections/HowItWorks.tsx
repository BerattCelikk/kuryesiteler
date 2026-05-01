"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  FileCheck,
};

export function HowItWorks() {
  return (
    <section id="nasil-calisir-section" className="bg-[#111111]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center">
            <SectionLabel>Süreç</SectionLabel>
          </div>
          <h2 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            5 Adımda Yasal Çantaya
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#A0A0A0]">
            WhatsApp&apos;tan fotoğraf gönder, projeyi al, TÜVTÜRK ve noteri aynı gün bitir.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5 md:gap-8">
          {HOW_IT_WORKS.map((s, i) => {
            const Icon = iconMap[s.iconName] ?? ClipboardCheck;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative z-10 rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#FF6B00] hover:bg-[#1A1A1A]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 top-1 text-[64px] font-black leading-none"
                  style={{ color: "rgba(255,107,0,0.10)" }}
                >
                  {num}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00]/10">
                  <Icon size={20} className="text-[#FF6B00]" />
                </div>

                <h3 className="relative mt-5 text-[17px] font-bold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-[#A0A0A0]">
                  {s.description}
                </p>

                {i < HOW_IT_WORKS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block"
                  >
                    <ArrowRight size={20} className="text-[#2A2A2A]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
