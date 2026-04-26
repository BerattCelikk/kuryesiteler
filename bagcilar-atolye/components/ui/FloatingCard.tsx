"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { WorkshopStatusBadge } from "./WorkshopStatusBadge";
import { MapSkeleton } from "./MapSkeleton";

const WorkshopMap = dynamic(() => import("./WorkshopMap"), {
  ssr: false,
  loading: () => <MapSkeleton height={160} />,
});

export function FloatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-gradient-to-br from-[#161616] to-[#111111] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FF6B00]/10 blur-3xl" />
        </div>

        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
                Flagship Atölye
              </div>
              <div className="mt-1 text-xl font-black tracking-tight text-white">
                {WORKSHOP.district}
              </div>
            </div>
            <WorkshopStatusBadge size="sm" />
          </div>

          <div className="mt-4 h-[160px] overflow-hidden rounded-xl">
            <WorkshopMap height={160} zoom={14} mini />
          </div>

          <div className="mt-4 space-y-2.5 text-[13px]">
            <div className="flex items-start gap-2.5 text-[#A0A0A0]">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#FF6B00]" />
              <span>{WORKSHOP.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#A0A0A0]">
              <Clock size={14} className="shrink-0 text-[#FF6B00]" />
              <span>
                Her gün {WORKSHOP.hours.weekday.open} – {WORKSHOP.hours.weekday.close}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-[#A0A0A0]">
              <Navigation size={14} className="shrink-0 text-[#FF6B00]" />
              <span>Kirazlı Metro 3 dk</span>
            </div>
          </div>

          <a
            href={WORKSHOP.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-4 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#FF8C00]"
          >
            Rota Al →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
