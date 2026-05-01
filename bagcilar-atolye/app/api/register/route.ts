import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { registrationSchema } from '@/lib/validations'

const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000

async function checkRateLimit(ip: string): Promise<boolean> {
  const now = new Date()
  const windowEnd = new Date(now.getTime() + RATE_LIMIT_WINDOW_MS)
  try {
    const existing = await db.rateLimit.findUnique({ where: { ip } })
    if (!existing) {
      await db.rateLimit.create({ data: { ip, count: 1, resetAt: windowEnd } })
      return true
    }
    if (now > existing.resetAt) {
      await db.rateLimit.update({ where: { ip }, data: { count: 1, resetAt: windowEnd } })
      return true
    }
    if (existing.count >= RATE_LIMIT_MAX) return false
    await db.rateLimit.update({ where: { ip }, data: { count: { increment: 1 } } })
    return true
  } catch {
    return true
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'

    const allowed = await checkRateLimit(ip)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Cok fazla istek. 1 saat sonra tekrar deneyin.' },
        { status: 429 },
      )
    }

    const body = await request.json()

    if (body && typeof body === 'object' && body.honeypot) {
      return NextResponse.json(
        { success: true, message: 'Kaydiniz alindi.' },
        { status: 201 },
      )
    }

    const validation = registrationSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Gecersiz form verisi', fields: validation.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const data = validation.data

    const duplicate = await db.registration.findUnique({
      where: { phone_date_time: { phone: data.phone, date: data.date, time: data.time } },
    })
    if (duplicate) {
      return NextResponse.json(
        { error: 'Bu tarih ve saat icin zaten bir kaydiniz mevcut.' },
        { status: 409 },
      )
    }

    const today = new Date().toISOString().split('T')[0]
    const todayCount = await db.registration.count({
      where: { phone: data.phone, date: today },
    })
    if (todayCount >= 3) {
      return NextResponse.json(
        { error: 'Bugün bu telefon numarasıyla en fazla 3 kayıt yapılabilir.' },
        { status: 429 },
      )
    }

    const registration = await db.registration.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        date: data.date,
        time: data.time,
        platform: data.platform,
        bagCount: data.bagCount,
        notes: data.notes ?? null,
        consent: data.consent,
        ipAddress: ip,
      },
    })

    return NextResponse.json(
      { success: true, message: 'Kaydiniz alindi. Tesekkurler!', id: registration.id },
      { status: 201 },
    )
  } catch (error) {
    console.error('[POST /api/register]', error)
    return NextResponse.json(
      { error: 'Sunucu hatasi. Lutfen tekrar deneyin.' },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
