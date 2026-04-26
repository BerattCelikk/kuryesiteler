"use client";

import { motion } from "framer-motion";
import { MapPin, ClipboardCheck, TrendingUp, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Atölyeye Gel",
    desc: "Bağcılar atölyemize motorsikletinle gel. Kirazlı metro çıkışına 3 dakika. Önünde park alanı mevcut.",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Çantanı Kaydet",
    desc: "Kimlik kartını ve plaka bilgini getir. Çantanı teslim al, sisteme 10 dakikada kaydet, proje numaranı al.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Kazanmaya Başla",
    desc: "Araç projesi avantajlarından hemen yararlan. Kira planın aynı gün aktive olur. İlk günden kazanmaya başla.",
  },
];

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
            3 Adımda Başla
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#A0A0A0]">
            Atölyeye gel, çantanı kaydet, projede yerini al. Her şey 10 dakikada.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative z-10 rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-[#FF6B00] hover:bg-[#1A1A1A]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-2 text-[80px] font-black leading-none"
                  style={{ color: "rgba(255,107,0,0.10)" }}
                >
                  {s.num}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00]/10">
                  <Icon size={22} className="text-[#FF6B00]" />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-white">{s.title}</h3>
                <p className="relative mt-3 text-[14px] leading-relaxed text-[#A0A0A0]">
                  {s.desc}
                </p>

                <div className="relative mt-6 text-[12px] font-semibold uppercase tracking-wider text-[#FF6B00]">
                  → Devamı
                </div>

                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 md:block"
                  >
                    <ArrowRight size={24} className="text-[#2A2A2A]" />
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
