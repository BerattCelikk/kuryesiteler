import { NextResponse } from "next/server";
import { WORKSHOP } from "@/lib/constants";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    workshop: WORKSHOP.name,
    edition: WORKSHOP.edition,
    open: isWorkshopOpen(),
    todayHours: getTodayHours(),
    stats: WORKSHOP.stats,
    coordinates: WORKSHOP.coordinates,
    updatedAt: new Date().toISOString(),
  });
}
