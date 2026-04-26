import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { generateBookingId } from "@/lib/utils";

const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");
const RATE_LIMIT_PER_HOUR = 5;
const memoryRateMap = new Map<string, number[]>();

async function readAll(): Promise<Record<string, unknown>[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeAll(items: Record<string, unknown>[]) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;
  const hits = (memoryRateMap.get(ip) ?? []).filter((t) => t > hourAgo);
  if (hits.length >= RATE_LIMIT_PER_HOUR) {
    memoryRateMap.set(ip, hits);
    return false;
  }
  hits.push(now);
  memoryRateMap.set(ip, hits);
  return true;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "anon";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Çok fazla istek. Bir saat sonra tekrar dene." }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz veri." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Eksik bilgi." }, { status: 400 });
  }

  const id = generateBookingId();
  const record = {
    id,
    createdAt: new Date().toISOString(),
    ip,
    ua: request.headers.get("user-agent") ?? "",
    ...payload,
  };

  try {
    const items = await readAll();
    items.push(record);
    await writeAll(items);
  } catch (e) {
    console.error("write failed", e);
    // Still return ID — collection failure shouldn't break UX
  }

  return NextResponse.json({ id, ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: true, ts: Date.now() });
}
