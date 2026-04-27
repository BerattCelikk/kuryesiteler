import { z } from "zod";

const turkishName = z
  .string()
  .min(2, "Lütfen adınızı tamamen yazınız.")
  .max(80, "Bu alan çok uzun.");

const turkishPhone = z
  .string()
  .min(10, "Geçerli bir telefon numarası giriniz.")
  .regex(/^[+\d\s()-]{10,20}$/, "Telefon numarası biçimi uygun değil.");

const turkishEmail = z.string().email("Geçerli bir e-posta giriniz.").optional().or(z.literal(""));

export const bookingSchema = z.object({
  fullName: turkishName,
  phone: turkishPhone,
  email: turkishEmail,
  platform: z.string().min(1, "Lütfen bir platform seçiniz."),
  bagType: z.string().min(1, "Lütfen çanta türünü seçiniz."),
  date: z.string().min(1, "Bir tarih seçmeniz gerekmektedir."),
  timeSlot: z.string().min(1, "Bir saat aralığı seçmeniz gerekmektedir."),
  notes: z.string().max(500, "Mesajınız çok uzun.").optional(),
  consent: z.literal(true, { message: "Devam etmek için onay vermeniz gerekmektedir." }),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  fullName: turkishName,
  phone: turkishPhone,
  email: turkishEmail,
  subject: z.string().min(2, "Lütfen bir konu yazınız.").max(120),
  message: z.string().min(10, "Mesajınızı biraz daha açar mısınız?").max(1000),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const b2bSchema = z.object({
  companyName: z.string().min(2, "Şirket adı zorunludur.").max(120),
  contactName: turkishName,
  phone: turkishPhone,
  email: turkishEmail,
  fleetSize: z.coerce.number().min(1, "En az bir kurye giriniz.").max(5000),
  notes: z.string().max(1000).optional(),
});
export type B2BInput = z.input<typeof b2bSchema>;
export type B2BOutput = z.output<typeof b2bSchema>;
