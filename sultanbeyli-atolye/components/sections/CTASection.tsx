"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, User, Send } from "lucide-react";
import { TextField, SelectField, TextareaField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { BlobShape } from "@/components/ui/BlobShape";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { generateBookingId, createICSFile } from "@/lib/utils";
import { WORKSHOP } from "@/lib/constants";

export function CTASection() {
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<ContactInput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    await new Promise((r) => setTimeout(r, 600));
    const id = generateBookingId();
    setBookingId(id);
    setSubmitted(data);
    confetti({
      particleCount: 80,
      spread: 65,
      origin: { y: 0.7 },
      colors: ["#C05C28", "#E8A888", "#4E8A4E", "#A8C9A8", "#FAE8DF"],
    });
    toast.success("Randevunuz alındı!");
    reset();
  };

  return (
    <section className="relative overflow-hidden bg-sage-bg py-24">
      <BlobShape color="#A8C9A8" size={520} className="-left-32 -top-32" opacity={0.3} />
      <BlobShape color="#F4CCBA" size={400} className="-right-20 -bottom-32" opacity={0.25} />
      <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <span className="section-label">Başlangıç</span>
        <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
          {WORKSHOP.copy.ctaTitle}
        </h2>
        <p className="mt-4 font-body text-body-lg text-ink-light max-w-lg mx-auto">
          {WORKSHOP.copy.ctaSub}
        </p>

        <AnimatePresence mode="wait">
          {bookingId ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 bg-cream border border-terra-200/40 rounded-3xl p-8 text-left shadow-[0_8px_40px_rgba(192,92,40,0.14)]"
            >
              <h3 className="font-display text-3xl text-terra-500 mb-2">
                Randevunuz Alındı!
              </h3>
              <p className="font-body text-ink-light mb-4">
                Telefonunuza onay mesajı gönderdik.
              </p>
              <span className="inline-block bg-terra-100 border border-terra-200 rounded-full px-4 py-2 font-mono text-base text-terra-600 font-bold mb-5">
                {bookingId}
              </span>
              {submitted && (
                <ul className="space-y-1.5 font-body text-sm text-ink-mid mb-6">
                  <li>
                    <strong>Ad:</strong> {submitted.name}
                  </li>
                  <li>
                    <strong>Telefon:</strong> {submitted.phone}
                  </li>
                  {submitted.date && (
                    <li>
                      <strong>Tarih:</strong> {submitted.date}
                    </li>
                  )}
                  {submitted.slot && (
                    <li>
                      <strong>Saat:</strong> {submitted.slot}
                    </li>
                  )}
                </ul>
              )}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href={createICSFile({
                    id: bookingId,
                    title: "Sultanbeyli Atölyesi - Randevu",
                    description: "Kurye Proje Sultanbeyli Atölyesi randevusu",
                    start: submitted?.date ? new Date(submitted.date) : new Date(),
                    location: WORKSHOP.address,
                  })}
                  external
                >
                  Takvime Ekle
                </Button>
                <Button
                  variant="whatsapp"
                  size="md"
                  href={`${WORKSHOP.waLink}?text=${encodeURIComponent(`Randevu kodum: ${bookingId}`)}`}
                  external
                >
                  WhatsApp&apos;tan Gönder
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-10 max-w-lg mx-auto bg-cream border border-terra-200/40 rounded-3xl p-7 text-left shadow-[0_4px_24px_rgba(192,92,40,0.10)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField
                  label="Ad Soyad"
                  placeholder="Adınız"
                  className="sm:col-span-2"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <TextField
                  label="Telefon"
                  type="tel"
                  placeholder="0530…"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
                <SelectField
                  label="Platform"
                  options={WORKSHOP.platforms}
                  error={errors.platform?.message}
                  {...register("platform")}
                />
                <TextField
                  label="Tarih"
                  type="date"
                  error={errors.date?.message}
                  {...register("date")}
                />
                <SelectField
                  label="Saat Dilimi"
                  options={WORKSHOP.timeSlots}
                  error={errors.slot?.message}
                  {...register("slot")}
                />
                <TextareaField
                  label="Mesaj (opsiyonel)"
                  placeholder="Bizimle paylaşmak istediğin bir şey?"
                  className="sm:col-span-2"
                  error={errors.message?.message}
                  {...register("message")}
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                className="mt-5"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Gönderiliyor…" : "Randevu Alın"}
              </Button>
              <p className="text-center mt-3 font-body text-xs text-ink-faint italic">
                veya randevusuz gelin
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
