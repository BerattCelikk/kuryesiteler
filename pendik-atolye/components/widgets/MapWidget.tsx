"use client";
import dynamic from "next/dynamic";
import { WORKSHOP } from "@/lib/constants";
import { ExternalLink, MapPin } from "lucide-react";

const Map = dynamic(() => import("@/components/ui/WorkshopMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100" />,
});

export function MapWidget() {
  return (
    <div className="relative h-full min-h-[280px]">
      <Map height={280} />
      <div className="absolute top-3 left-3 bg-white border border-gray-200 rounded-lg p-3 shadow-[0_2px_8px_rgba(0,0,0,0.06)] z-[400] max-w-[220px]">
        <div className="flex items-center gap-2 mb-1">
          <MapPin size={12} className="text-lime-600" />
          <span className="precision-label">{WORKSHOP.copy.locationTitle}</span>
        </div>
        <div className="text-[12px] font-mono text-gray-700 leading-relaxed">
          {WORKSHOP.address}
        </div>
        <div className="text-[11px] font-mono text-gray-500 mt-1">
          {WORKSHOP.hours.weekday.open} – {WORKSHOP.hours.weekday.close}
        </div>
        <a
          href={WORKSHOP.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] text-lime-600 hover:text-lime-700 mt-2 inline-flex items-center gap-1"
        >
          Haritada Aç <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}
