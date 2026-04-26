import { z } from "zod";

const phoneRegex = /^(\+?90)?[\s-]?\(?0?5\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export const bookingSchema = z.object({
  type: z.literal("booking").optional(),
  firstName: z.string().min(2, "Ad en az 2 karakter olmalı"),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalı"),
  phone: z.string().regex(phoneRegex, "Geçerli bir telefon numarası girin"),
  email: z.string().email("Geçerli bir e-posta girin").optional().or(z.literal("")),
  date: z.string().min(1, "Tarih seçin"),
  timeSlot: z.string().min(1, "Saat aralığı seçin"),
  platforms: z.array(z.string()).min(1, "En az bir platform seçin"),
  bagTypes: z.array(z.string()).min(1, "En az bir çanta tipi seçin"),
  bagCount: z.string().min(1, "Çanta sayısı seçin"),
  isB2B: z.boolean().optional(),
  companyName: z.string().optional(),
  notes: z.string().max(500, "Not en fazla 500 karakter olabilir").optional(),
  consent: z.literal(true, { message: "Onay gerekli" }),
});

export const b2bSchema = z.object({
  type: z.literal("b2b").optional(),
  firstName: z.string().min(2, "Ad en az 2 karakter olmalı"),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalı"),
  phone: z.string().regex(phoneRegex, "Geçerli bir telefon numarası girin"),
  email: z.string().email("Geçerli bir e-posta girin"),
  companyName: z.string().min(2, "Firma adı zorunlu"),
  position: z.string().min(2, "Pozisyon zorunlu"),
  fleetSize: z.string().min(1, "Filo büyüklüğü seçin"),
  platform: z.string().optional(),
  additionalInfo: z.string().max(1000).optional(),
  consent: z.literal(true, { message: "Onay gerekli" }),
});

export const contactSchema = z.object({
  type: z.literal("contact").optional(),
  name: z.string().min(2, "Ad soyad zorunlu"),
  phone: z.string().regex(phoneRegex, "Geçerli bir telefon numarası girin"),
  subject: z.enum(["Genel Bilgi", "Randevu", "B2B", "Şikayet"], {
    message: "Konu seçin",
  }),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı").max(1000),
});

export type BookingInput = z.infer<typeof bookingSchema>;
export type B2BInput = z.infer<typeof b2bSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
