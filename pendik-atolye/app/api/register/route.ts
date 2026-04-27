import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { generateBookingId } from "@/lib/utils";

const dataPath = path.join(process.cwd(), "data", "registrations.json");
const ipBuckets = new Map<string, { count: number; ts: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || now - bucket.ts > 3600_000) {
    ipBuckets.set(ip, { count: 1, ts: now });
    return true;
  }
  if (bucket.count >= 5) return false;
  bucket.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "anon";
    if (!rateLimit(ip)) {
      return NextResponse.json({ success: false, error: "Çok fazla istek" }, { status: 429 });
    }
    const body = await req.json();
    const bookingId = generateBookingId();
    const record = { ...body, bookingId, ts: new Date().toISOString(), ip };

    try {
      await fs.mkdir(path.dirname(dataPath), { recursive: true });
      let existing: unknown[] = [];
      try {
        const raw = await fs.readFile(dataPath, "utf8");
        existing = JSON.parse(raw);
      } catch {}
      existing.push(record);
      await fs.writeFile(dataPath, JSON.stringify(existing, null, 2));
    } catch {
      // best-effort logging
    }

    return NextResponse.json({
      success: true,
      bookingId,
      estimatedWait: "≤10 dk",
    });
  } catch (e) {
    return NextResponse.json({ success: false, error: "Hata" }, { status: 400 });
  }
}
