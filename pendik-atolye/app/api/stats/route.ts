import { NextResponse } from "next/server";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";

export async function GET() {
  const open = isWorkshopOpen();
  const hours = getTodayHours();
  return NextResponse.json(
    {
      total: 9000,
      today: 47,
      open,
      nextChange: open ? hours.close : hours.open,
    },
    { headers: { "cache-control": "no-cache" } }
  );
}
