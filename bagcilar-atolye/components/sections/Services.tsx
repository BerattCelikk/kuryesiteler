"use client";

import { motion } from "framer-motion";
import { Package, RefreshCw, Wrench, MessageCircle, type LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  badge: string;
  badgeColor: "green" | "blue" | "orange";
}

const services: Service[] = [
  {
    icon: Package,
    title: "Çanta Kaydı",
    desc: "Teslimat çantanızı araç projemize kaydedin, kira planınızı başlatın ve avantajlardan yararlanın.",
    badge: "Ücretsiz",
    badgeColor: "green",
  },
  {
    icon: RefreshCw,
    title: "Çanta Değişim",
    desc: "Yıpranan veya hasarlı çantanızı yenisiyle değiştirin. Projede kalmaya devam edin.",
    badge: "Hızlı",
    badgeColor: "blue",
  },
  {
    icon: Wrench,
    title: "Bakım & Servis",
    desc: "Çantanızın periyodik bakımını ve derin temizliğini atölyemizde profesyonelce yaptırın.",
    badge: "Yerinde",
    badgeColor: "orange",
  },
  {
    icon: MessageCircle,
    title: "Proje Danışmanlık",
    desc: "Araç projesi hakkında merak ettiğiniz her şeyi yüz yüze, açık ve dürüst biçimde yanıtlıyoruz.",
    badge: "Ücretsiz",
    badgeColor: "green",
  },
];

const badgeStyles: Record<Service["badgeColor"], string> = {
  green: "bg-[#22C55E]/10 text-[#22C55E]",
  blue: "bg-[#3B82F6]/10 text-[#3B82F6]",
  orange: "bg-[#FF6B00]/10 text-[#FF6B00]",
};

export function Services() {
  return (
    <section id="hizmetler" className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Hizmetler</SectionLabel>
          <h2 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            Atölyemizde Ne Yapabilirsiniz?
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#A0A0A0]">
            Çanta kaydından servise, danışmanlıktan değişime — kurye hayatınız için her şey
            tek çatı altında.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-6 transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#1E1E1E] hover:shadow-[var(--shadow-glow-orange)]"
              >
                <span
                  className={cn(
                    "absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                    badgeStyles[s.badgeColor],
                  )}
                >
                  {s.badge}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00]/8">
                  <Icon
                    size={22}
                    className="text-[#555] transition-colors duration-300 group-hover:text-[#FF6B00]"
                  />
                </div>

                <h3 className="mt-5 text-[18px] font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#A0A0A0]">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
