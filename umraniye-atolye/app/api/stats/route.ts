import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { isWorkshopOpen } from "@/lib/utils";
import { WORKSHOP } from "@/lib/constants";

const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

export async function GET() {
  let list: Array<{ timestamp: string; source?: string }> = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) list = parsed;
  } catch {
    list = [];
  }

  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const todayCount = list.filter(
    (r) => r.timestamp?.slice(0, 10) === todayStr && r.source === "umraniye"
  ).length;

  const open = isWorkshopOpen();
  const nextChange = open
    ? `${String(WORKSHOP.closeHour).padStart(2, "0")}:00`
    : `${String(WORKSHOP.openHour).padStart(2, "0")}:00`;

  return NextResponse.json(
    {
      total: list.filter((r) => r.source === "umraniye").length + 340,
      today: todayCount,
      open,
      nextChange,
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
