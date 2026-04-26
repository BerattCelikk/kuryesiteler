import { NextResponse } from "next/server";
import { WORKSHOP } from "@/lib/constants";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";

export async function GET() {
  return NextResponse.json({
    workshop: WORKSHOP.name,
    district: WORKSHOP.district,
    open: isWorkshopOpen(),
    today: getTodayHours(),
    stats: WORKSHOP.stats,
  });
}
