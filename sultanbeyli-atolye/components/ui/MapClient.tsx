"use client";
import dynamic from "next/dynamic";

const WorkshopMap = dynamic(() => import("./WorkshopMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-cream-mid rounded-3xl flex items-center justify-center">
      <span className="font-mono text-mono-sm text-ink-light">harita yükleniyor…</span>
    </div>
  ),
});

export function MapClient({ height = 420 }: { height?: number }) {
  return (
    <div
      style={{ height }}
      className="w-full overflow-hidden rounded-3xl border border-terra-200/40 shadow-[0_4px_24px_rgba(192,92,40,0.12)]"
    >
      <WorkshopMap />
    </div>
  );
}
