"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Navigation,
  Train,
  Bus,
  Bike,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkshopStatusBadge } from "@/components/ui/WorkshopStatusBadge";
import { GlowButton } from "@/components/ui/GlowButton";
import { MapSkeleton } from "@/components/ui/MapSkeleton";

const WorkshopMap = dynamic(() => import("@/components/ui/WorkshopMap"), {
  ssr: false,
  loading: () => <MapSkeleton height={420} />,
});

const transitIcons = { Train, Bus, Bike };

export function WorkshopInfo() {
  const today = new Date().getDay();
  const isWeekend = today === 0 || today === 6;

  return (
    <section id="atolye" className="bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <SectionLabel>Lokasyon</SectionLabel>
          <h2 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            Atölyemiz
          </h2>

          <div className="mt-8 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 md:p-8">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0 text-[#FF6B00]" />
              <div>
                <div className="text-[15px] font-semibold text-white">
                  {WORKSHOP.address}
                </div>
                <a
                  href={WORKSHOP.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[13px] text-[#FF6B00] hover:underline"
                >
                  Haritada Gör <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="my-6 h-px bg-[#2A2A2A]" />

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Clock size={16} className="text-[#FF6B00]" />
                <h3 className="text-[13px] font-bold uppercase tracking-wider text-white">
                  Çalışma Saatleri
                </h3>
              </div>
              <ul className="space-y-2.5 text-[14px]">
                {[
                  { key: "weekday", active: !isWeekend, ...WORKSHOP.hours.weekday },
                  { key: "weekend", active: isWeekend, ...WORKSHOP.hours.weekend },
                  { key: "holiday", active: false, ...WORKSHOP.hours.holiday },
                ].map((h) => (
                  <li
                    key={h.key}
                    className={
                      h.active
                        ? "flex items-center justify-between rounded-md border-l-2 border-[#FF6B00] bg-[#FF6B00]/5 px-3 py-2"
                        : "flex items-center justify-between px-3 py-1"
                    }
                  >
                    <span className={h.active ? "text-white" : "text-[#A0A0A0]"}>
                      {h.label}
                    </span>
                    <span
                      className={
                        h.active ? "font-semibold text-[#FF6B00]" : "text-[#A0A0A0]"
                      }
                    >
                      {h.open} – {h.close}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <WorkshopStatusBadge size="md" />
              </div>
            </div>

            <div className="my-6 h-px bg-[#2A2A2A]" />

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Navigation size={16} className="text-[#FF6B00]" />
                <h3 className="text-[13px] font-bold uppercase tracking-wider text-white">
                  Ulaşım
                </h3>
              </div>
              <ul className="space-y-3">
                {WORKSHOP.transit.map((t) => {
                  const Icon = transitIcons[t.icon as keyof typeof transitIcons];
                  return (
                    <li key={t.type} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6B00]/10">
                        <Icon size={16} className="text-[#FF6B00]" />
                      </span>
                      <div>
                        <div className="text-[14px] font-semibold text-white">{t.label}</div>
                        <div className="text-[12px] text-[#A0A0A0]">{t.detail}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="my-6 h-px bg-[#2A2A2A]" />

            <div className="flex flex-col gap-3 sm:flex-row">
              <GlowButton
                href={WORKSHOP.googleMapsUrl}
                external
                variant="primary"
                size="md"
                icon={Navigation}
                iconPosition="left"
                fullWidth
              >
                Rota Al
              </GlowButton>
              <GlowButton
                href={whatsappLink()}
                external
                variant="secondary"
                size="md"
                icon={MessageCircle}
                iconPosition="left"
                fullWidth
              >
                WhatsApp
              </GlowButton>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start"
        >
          <WorkshopMap height={480} zoom={16} />
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1.5 text-[12px] font-semibold text-[#FF6B00]">
            <Train size={13} />
            Kirazlı Metroya 2 dk
          </div>
        </motion.div>
      </div>
    </section>
  );
}
