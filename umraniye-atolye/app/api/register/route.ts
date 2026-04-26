import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { bookingSchema, b2bSchema, contactSchema } from "@/lib/validations";
import { generateBookingId, isWorkshopOpen } from "@/lib/utils";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "registrations.json");

const rateBucket = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW = 60 * 60 * 1000;

function rateLimit(ip: string) {
  const now = Date.now();
  const rec = rateBucket.get(ip);
  if (!rec || rec.reset < now) {
    rateBucket.set(ip, { count: 1, reset: now + WINDOW });
    return true;
  }
  if (rec.count >= LIMIT) return false;
  rec.count++;
  return true;
}

async function appendRecord(record: Record<string, unknown>) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  let list: Record<string, unknown>[] = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    list = JSON.parse(raw);
    if (!Array.isArray(list)) list = [];
  } catch {
    list = [];
  }
  list.push(record);
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Çok fazla istek. Lütfen daha sonra tekrar deneyin." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Geçersiz JSON" }, { status: 400 });
  }

  const type = (body as { type?: string })?.type ?? "booking";

  let parsed;
  if (type === "b2b") parsed = b2bSchema.safeParse(body);
  else if (type === "contact") parsed = contactSchema.safeParse(body);
  else parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { success: false, error: "Form doğrulama hatası", fieldErrors },
      { status: 400 }
    );
  }

  const bookingId = generateBookingId();
  const record = {
    bookingId,
    type,
    source: "umraniye",
    timestamp: new Date().toISOString(),
    ip,
    data: parsed.data,
  };

  try {
    await appendRecord(record);
  } catch (e) {
    console.error("write failed", e);
    return NextResponse.json(
      { success: false, error: "Kayıt oluşturulamadı, lütfen tekrar deneyin." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      bookingId,
      estimatedWait: "~8 dk",
      open: isWorkshopOpen(),
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
