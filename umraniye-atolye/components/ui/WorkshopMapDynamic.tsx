"use client";
import dynamic from "next/dynamic";

export const WorkshopMapDynamic = dynamic(
  () => import("./WorkshopMap").then((m) => m.WorkshopMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full card-base flex items-center justify-center text-text-muted text-sm"
        style={{ height: 400 }}
      >
        Harita yükleniyor...
      </div>
    ),
  }
);

export default WorkshopMapDynamic;
