import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";
import { generateBookingId } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const id = generateBookingId();
    return NextResponse.json({ ok: true, bookingId: id });
  } catch {
    return NextResponse.json({ ok: false, error: "Beklenmeyen bir hata oluştu." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: "register", workshop: "kadikoy" });
}
