import { z } from "zod";
import { WORKSHOP } from "./constants";

const phoneRegex = /^05[0-9]{9}$/;
const slots = WORKSHOP.timeSlots as readonly string[];
const platforms = WORKSHOP.platforms as readonly string[];

export const bookingSchema = z.object({
  firstName: z.string().min(2, "Adınızı girin").max(30),
  lastName: z.string().min(2, "Soyadınızı girin").max(30),
  phone: z.string().regex(phoneRegex, "Geçerli telefon girin (05XXXXXXXXX)"),
  email: z.string().email("Geçerli e-posta girin").optional().or(z.literal("")),
  date: z
    .string()
    .min(1, "Tarih seçin")
    .refine((v) => {
      const d = new Date(v);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return d >= today;
    }, "Geçmiş tarih seçilemez"),
  timeSlot: z.string().refine((v) => slots.includes(v), "Saat dilimi seçin"),
  platforms: z
    .array(z.string().refine((v) => platforms.includes(v)))
    .min(1, "En az bir platform seçin"),
  bagCount: z.enum(["1", "2", "3+"]),
  notes: z.string().max(300, "En fazla 300 karakter").optional(),
  consent: z.literal(true, { message: "Onay gerekli" }),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Ad soyad girin").max(50),
  phone: z.string().regex(phoneRegex, "Geçerli telefon girin (05XXXXXXXXX)"),
  date: z
    .string()
    .min(1, "Tarih seçin")
    .refine((v) => {
      const d = new Date(v);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return d >= today;
    }, "Geçmiş tarih seçilemez"),
  timeSlot: z.string().refine((v) => slots.includes(v), "Saat dilimi seçin"),
  message: z.string().max(300).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
