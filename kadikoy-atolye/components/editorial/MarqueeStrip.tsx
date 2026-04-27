"use client";
import { useMemo } from "react";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours, isWorkshopOpen } from "@/lib/utils";

export default function MarqueeStrip() {
  const items = useMemo(() => {
    const dyn = [`Bugün ${getTodayHours()}`, isWorkshopOpen() ? "Açık" : "Kapalı"];
    return [...WORKSHOP.copy.marqueeItems, ...dyn];
  }, []);

  const renderTrack = (key: string) => (
    <div key={key} className="marquee-track" aria-hidden={key !== "a"}>
      {items.map((it, i) => (
        <span key={`${key}-${i}`} className={`marquee-item ${i % 3 === 1 ? "marquee-item-accent" : ""}`}>
          {it} <span className="text-gold-400 mx-1">·</span>
        </span>
      ))}
      {items.map((it, i) => (
        <span key={`${key}-d-${i}`} className={`marquee-item ${i % 3 === 1 ? "marquee-item-accent" : ""}`}>
          {it} <span className="text-gold-400 mx-1">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee-strip" data-cursor-dark="true" role="marquee" aria-label="Atölye durum bilgisi">
      {renderTrack("a")}
    </div>
  );
}
