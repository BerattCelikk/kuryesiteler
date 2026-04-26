import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { bookingSchema } from "@/lib/validations";
import { generateBookingId } from "@/lib/utils";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "registrations.json");

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const ipHits: Map<string, number[]> = new Map();

function getIp(req: NextRequest): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) return false;
  hits.push(now);
  ipHits.set(ip, hits);
  return true;
}

async function readAll(): Promise<unknown[]> {
  try {
    const buf = await fs.readFile(DATA_FILE, "utf8");
    const arr = JSON.parse(buf);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

async function writeAll(rows: unknown[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(rows, null, 2), "utf8");
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Çok fazla istek. Lütfen sonra tekrar deneyin." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Geçersiz istek" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "_";
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }
    return NextResponse.json(
      { success: false, errors: fieldErrors, error: "Doğrulama hatası" },
      { status: 400 },
    );
  }

  const bookingId = generateBookingId();
  const timestamp = new Date().toISOString();
  const record = { bookingId, timestamp, ...parsed.data };

  try {
    const rows = await readAll();
    rows.push(record);
    await writeAll(rows);
  } catch {
    return NextResponse.json(
      { success: false, error: "Kayıt oluşturulamadı" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, bookingId, timestamp });
}
