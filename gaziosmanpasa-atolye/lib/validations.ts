import { z } from "zod";

const tcPhone = /^(\+?90)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

export const bookingSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı").max(60),
  phone: z.string().regex(tcPhone, "Geçerli bir telefon numarası gir (5XX XXX XX XX)"),
  platform: z.string().min(1, "Platform seç"),
  bagType: z.string().min(1, "Çanta tipini seç"),
  date: z.string().min(1, "Tarih seç"),
  timeSlot: z.string().min(1, "Saat dilimi seç"),
  service: z.string().min(1, "Hizmet seç"),
  notes: z.string().max(500).optional(),
  kvkk: z.boolean().refine((v) => v === true, "KVKK onayı gerekli"),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "İsmini yaz"),
  phone: z.string().regex(tcPhone, "Geçerli bir telefon numarası gir"),
  platform: z.string().min(1, "Platform seç"),
  date: z.string().optional(),
  timeSlot: z.string().optional(),
  message: z.string().max(500).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const b2bSchema = z.object({
  company: z.string().min(2, "Şirket adı"),
  contactName: z.string().min(2, "Yetkili adı"),
  phone: z.string().regex(tcPhone, "Geçerli bir telefon numarası gir"),
  email: z.string().email("Geçerli e-posta gir"),
  fleetSize: z.string().min(1, "Filo boyutu seç"),
  platform: z.string().min(1, "Platform seç"),
  message: z.string().max(800).optional(),
});

export type B2BInput = z.infer<typeof b2bSchema>;
