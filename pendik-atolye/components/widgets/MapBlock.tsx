"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/ui/WorkshopMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100" />,
});

export function MapBlock({ height = 480 }: { height?: number }) {
  return <Map height={height} />;
}
