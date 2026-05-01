"use client";
import dynamic from "next/dynamic";
import { WorkshopMapErrorBoundary } from "./WorkshopMapErrorBoundary";

// Leaflet touches `window`, so this island isolates the ssr:false dynamic import and lets the parent page stay server-rendered.
const WorkshopMap = dynamic(() => import("@/components/sections/WorkshopMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full rounded-xl bg-elevated border border-white/10" />,
});

export default function WorkshopMapIsland() {
  return (
    <WorkshopMapErrorBoundary>
      <WorkshopMap />
    </WorkshopMapErrorBoundary>
  );
}
