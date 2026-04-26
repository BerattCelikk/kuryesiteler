import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";
import { generateBookingId } from "@/lib/utils";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz veri" }, { status: 400 });
  }
  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Form hataları", issues: parsed.error.issues },
      { status: 422 },
    );
  }
  return NextResponse.json({ id: generateBookingId(), data: parsed.data });
}
