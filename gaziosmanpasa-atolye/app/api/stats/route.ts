import { NextResponse } from "next/server";
import { WORKSHOP } from "@/lib/constants";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";

export async function GET() {
  return NextResponse.json({
    workshop: WORKSHOP.name,
    district: WORKSHOP.district,
    open: isWorkshopOpen(),
    hours: getTodayHours(),
    coordinates: WORKSHOP.coordinates,
    stats: WORKSHOP.stats.map((s) => ({ id: s.id, display: s.display, label: s.label })),
    ts: Date.now(),
  });
}
