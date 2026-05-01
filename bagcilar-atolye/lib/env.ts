import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.string().optional(),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().optional(),
  TURSO_DATABASE_URL: z.string().optional(),
  TURSO_AUTH_TOKEN: z.string().optional(),
  ADMIN_KEY: z.string().optional(),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
  console.error('Gecersiz env vars:', result.error.flatten())
  throw new Error('Environment validation failed')
}

export const env = result.data
