import { z } from "zod";

const phone = z
  .string()
  .min(10, "Telefon numarası eksik")
  .regex(/^[+0-9\s()\-]{10,}$/, "Geçerli bir telefon girin");

export const bookingSchema = z.object({
  name: z.string().min(2, "Ad soyad gerekli"),
  phone,
  platform: z.string().min(1, "Platform seçin"),
  date: z.string().min(1, "Tarih seçin"),
  slot: z.string().min(1, "Saat dilimi seçin"),
  service: z.string().optional(),
  message: z.string().max(500, "En fazla 500 karakter").optional(),
});
export type BookingInput = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Ad soyad gerekli"),
  phone,
  platform: z.string().min(1, "Platform seçin"),
  date: z.string().optional(),
  slot: z.string().optional(),
  message: z.string().max(500, "En fazla 500 karakter").optional(),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const b2bSchema = z.object({
  name: z.string().min(2, "Ad soyad gerekli"),
  company: z.string().min(2, "Şirket adı gerekli"),
  fleetSize: z.string().min(1, "Filo büyüklüğünü seçin"),
  platform: z.string().min(1, "Platform seçin"),
  phone,
  message: z.string().max(800, "En fazla 800 karakter").optional(),
});
export type B2BInput = z.infer<typeof b2bSchema>;
