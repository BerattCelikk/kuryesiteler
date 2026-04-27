"use client";
import dynamic from "next/dynamic";

const WorkshopMap = dynamic(() => import("./WorkshopMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[420px] bg-ivory-mid rounded-lg border border-[var(--border-light)]" />,
});

export default function MapClient({ height = 420 }: { height?: number }) {
  return <WorkshopMap height={height} />;
}
