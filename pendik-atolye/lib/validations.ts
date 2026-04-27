import { z } from "zod";

const phoneRegex = /^(\+?90)?\s?\(?5\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/;

export const bookingSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter").max(50),
  lastName: z.string().min(2, "Soyad en az 2 karakter").max(50),
  phone: z.string().regex(phoneRegex, "Geçerli bir telefon numarası girin"),
  email: z.string().email("Geçerli bir e-posta girin").optional().or(z.literal("")),
  date: z.string().min(1, "Tarih seçin"),
  slot: z.string().min(1, "Saat aralığı seçin"),
  platforms: z.array(z.string()).min(1, "En az 1 platform seçin"),
  bagTypes: z.array(z.string()).min(1, "En az 1 çanta türü seçin"),
  count: z.number().min(1).max(50),
  isFleet: z.boolean(),
  company: z.string().optional(),
  notes: z.string().max(500).optional(),
  consent: z.literal(true, { message: "Onay vermeniz gerekiyor" }),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter"),
  phone: z.string().regex(phoneRegex, "Geçerli telefon"),
  email: z.string().email("Geçerli e-posta").optional().or(z.literal("")),
  subject: z.string().min(1, "Konu seçin"),
  message: z.string().min(10, "Mesaj en az 10 karakter").max(1000),
});

export const b2bSchema = z.object({
  company: z.string().min(2, "Firma adı"),
  contactName: z.string().min(2, "Yetkili kişi"),
  phone: z.string().regex(phoneRegex, "Geçerli telefon"),
  email: z.string().email("Geçerli e-posta"),
  fleetSize: z.number().min(5, "Filo programı için min. 5 kurye"),
  notes: z.string().max(500).optional(),
});

export type BookingForm = z.infer<typeof bookingSchema>;
export type ContactForm = z.infer<typeof contactSchema>;
export type B2BForm = z.infer<typeof b2bSchema>;
