"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  CalendarPlus,
} from "lucide-react";
import toast from "react-hot-toast";
import { WORKSHOP } from "@/lib/constants";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { todayIsoDate } from "@/lib/utils";
import { WorkshopStatusBadge } from "@/components/ui/WorkshopStatusBadge";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

const inputCls =
  "w-full rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 text-[15px] text-white placeholder:text-[#555] outline-none transition focus:border-[#FF6B00] focus:ring-[3px] focus:ring-[#FF6B00]/15";

function Field({
  label,
  error,
  children,
  required,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-[#A0A0A0]">
        {label}
        {required && <span className="ml-1 text-[#FF6B00]">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-[12px] text-[#EF4444]">{error}</span>}
    </label>
  );
}

interface SuccessData {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
  timeSlot: string;
}

export function BookingPage() {
  const [success, setSuccess] = useState<SuccessData | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      timeSlot: "",
      platforms: [],
      bagCount: "1",
      notes: "",
      consent: false as unknown as true,
    },
  });

  const notes = watch("notes") || "";

  const onSubmit = async (data: BookingInput) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        if (json.errors) {
          Object.values(json.errors)
            .flat()
            .slice(0, 1)
            .forEach((m) => toast.error(String(m)));
        } else {
          toast.error(json.error || "Bir hata oluştu");
        }
        return;
      }
      setSuccess({
        id: json.bookingId,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        date: data.date,
        timeSlot: data.timeSlot,
      });
      reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Bağlantı hatası");
    }
  };

  const downloadIcs = (s: SuccessData) => {
    const [startH] = s.timeSlot.split(" – ")[0].split(":").map(Number);
    const dt = new Date(s.date);
    dt.setHours(startH, 0, 0);
    const end = new Date(dt.getTime() + 30 * 60000);
    const fmt = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `UID:${s.id}@kuryeproje`,
      `DTSTAMP:${fmt(new Date())}`,
      `DTSTART:${fmt(dt)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:Kurye Proje Randevusu - ${s.id}`,
      `LOCATION:${WORKSHOP.address}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${s.id}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#0A0A0A] pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 text-center">
          <div className="flex justify-center">
            <SectionLabel>Randevu</SectionLabel>
          </div>
          <h1 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            Randevu Oluştur
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-[#A0A0A0]">
            Formu doldur, randevu bilgilerini al. Atölyemize geldiğinde öncelikli olacaksın.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
                    Flagship
                  </div>
                  <div className="mt-1 text-xl font-black text-white">
                    {WORKSHOP.district}
                  </div>
                </div>
                <WorkshopStatusBadge size="sm" />
              </div>

              <div className="mt-5 flex items-start gap-2.5 text-[13px] text-[#A0A0A0]">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#FF6B00]" />
                <span>{WORKSHOP.address}</span>
              </div>

              <div className="mt-5 h-px bg-[#2A2A2A]" />

              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#FF6B00]" />
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-white">
                    Saatler
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-[13px]">
                  {Object.entries(WORKSHOP.hours).map(([k, v]) => (
                    <li key={k} className="flex justify-between text-[#A0A0A0]">
                      <span>{v.label}</span>
                      <span>
                        {v.open} – {v.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 h-px bg-[#2A2A2A]" />

              <div className="mt-5">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Yanında Getir
                </h3>
                <ul className="mt-3 space-y-2 text-[13px] text-[#A0A0A0]">
                  {[
                    "Kimlik kartı",
                    "Motorsiklet ruhsatı / plakası",
                    "Teslimat çantası",
                    "Aktif kurye hesabı",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#FF6B00]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 h-px bg-[#2A2A2A]" />

              <div className="mt-5 flex flex-col gap-2.5">
                <GlowButton
                  href={`https://wa.me/${WORKSHOP.whatsappRaw}`}
                  external
                  variant="secondary"
                  size="sm"
                  icon={MessageCircle}
                  iconPosition="left"
                  fullWidth
                >
                  WhatsApp
                </GlowButton>
                <GlowButton
                  href={WORKSHOP.googleMapsUrl}
                  external
                  variant="ghost"
                  size="sm"
                  icon={Navigation}
                  iconPosition="left"
                  fullWidth
                >
                  Rota Al
                </GlowButton>
              </div>
            </div>
          </aside>

          <div>
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-[#22C55E]/30 bg-[#22C55E]/5 p-8 md:p-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex justify-center"
                  >
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                      <circle cx="36" cy="36" r="34" stroke="#22C55E" strokeWidth="3" />
                      <motion.path
                        d="M22 36 L32 46 L50 28"
                        stroke="#22C55E"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                    </svg>
                  </motion.div>
                  <h2 className="mt-6 text-center text-3xl font-black text-white">
                    Randevunuz Onaylandı!
                  </h2>
                  <div className="mt-5 text-center font-mono text-3xl font-bold tracking-widest text-[#FF6B00]">
                    {success.id}
                  </div>

                  <div className="mx-auto mt-8 max-w-sm rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] p-5 text-[14px]">
                    <Row k="Ad Soyad" v={`${success.firstName} ${success.lastName}`} />
                    <Row k="Telefon" v={success.phone} />
                    <Row k="Tarih" v={success.date} />
                    <Row k="Saat" v={success.timeSlot} last />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <GlowButton
                      variant="primary"
                      size="md"
                      icon={CalendarPlus}
                      iconPosition="left"
                      onClick={() => downloadIcs(success)}
                    >
                      Takvime Ekle
                    </GlowButton>
                    <GlowButton
                      variant="secondary"
                      size="md"
                      onClick={() => setSuccess(null)}
                    >
                      Yeni Randevu Al
                    </GlowButton>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 md:p-10"
                >
                  <section>
                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      Kişisel Bilgiler
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Ad" required error={errors.firstName?.message}>
                        <input {...register("firstName")} className={inputCls} />
                      </Field>
                      <Field label="Soyad" required error={errors.lastName?.message}>
                        <input {...register("lastName")} className={inputCls} />
                      </Field>
                      <Field label="Telefon" required error={errors.phone?.message}>
                        <input
                          {...register("phone")}
                          placeholder="05XXXXXXXXX"
                          inputMode="numeric"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="E-posta (opsiyonel)" error={errors.email?.message}>
                        <input
                          {...register("email")}
                          placeholder="ornek@eposta.com"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      Randevu Detayları
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Field label="Tarih" required error={errors.date?.message}>
                        <input
                          type="date"
                          min={todayIsoDate()}
                          {...register("date")}
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Saat Dilimi" required error={errors.timeSlot?.message}>
                        <select {...register("timeSlot")} className={inputCls} defaultValue="">
                          <option value="" disabled>
                            Seçin
                          </option>
                          {WORKSHOP.timeSlots.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <p className="mt-3 text-[12px] text-[#555]">
                      Randevuyla gelenler önceliklidir. Walk-in da kabul edilir.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      Kurye Bilgileri
                    </h3>

                    <div className="mt-4">
                      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#A0A0A0]">
                        Platform <span className="text-[#FF6B00]">*</span>
                      </span>
                      <Controller
                        name="platforms"
                        control={control}
                        render={({ field }) => (
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {WORKSHOP.platforms.map((p) => {
                              const selected = field.value?.includes(p);
                              return (
                                <button
                                  type="button"
                                  key={p}
                                  onClick={() => {
                                    const next = selected
                                      ? field.value.filter((v: string) => v !== p)
                                      : [...(field.value || []), p];
                                    field.onChange(next);
                                  }}
                                  className={`rounded-lg border px-3 py-2.5 text-[13px] font-semibold transition ${
                                    selected
                                      ? "border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00]"
                                      : "border-[#2A2A2A] bg-[#1A1A1A] text-[#A0A0A0] hover:border-[#FF6B00]/40"
                                  }`}
                                >
                                  {p}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      />
                      {errors.platforms && (
                        <span className="mt-1 block text-[12px] text-[#EF4444]">
                          {errors.platforms.message}
                        </span>
                      )}
                    </div>

                    <div className="mt-5">
                      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#A0A0A0]">
                        Çanta Sayısı <span className="text-[#FF6B00]">*</span>
                      </span>
                      <div className="flex gap-2">
                        {(["1", "2", "3+"] as const).map((c) => (
                          <label
                            key={c}
                            className="flex-1 cursor-pointer rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] py-2.5 text-center text-[14px] font-semibold text-[#A0A0A0] transition has-[:checked]:border-[#FF6B00] has-[:checked]:bg-[#FF6B00]/10 has-[:checked]:text-[#FF6B00]"
                          >
                            <input
                              type="radio"
                              value={c}
                              {...register("bagCount")}
                              className="sr-only"
                            />
                            {c}
                          </label>
                        ))}
                      </div>
                      {errors.bagCount && (
                        <span className="mt-1 block text-[12px] text-[#EF4444]">
                          {errors.bagCount.message}
                        </span>
                      )}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      Notlar
                    </h3>
                    <div className="mt-4">
                      <textarea
                        {...register("notes")}
                        rows={3}
                        maxLength={300}
                        placeholder="Eklemek istediğiniz bir şey..."
                        className={inputCls}
                      />
                      <div className="mt-1 text-right text-[11px] text-[#555]">
                        {notes.length}/300
                      </div>
                    </div>
                  </section>

                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] p-4">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-0.5 h-4 w-4 accent-[#FF6B00]"
                    />
                    <span className="text-[13px] leading-relaxed text-[#A0A0A0]">
                      Kişisel verilerimin araç projesi randevu amacıyla işlenmesine onay
                      veriyorum. <a href="#" className="text-[#FF6B00] underline">Gizlilik Politikası</a>
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="-mt-6 block text-[12px] text-[#EF4444]">
                      {errors.consent.message}
                    </span>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-6 py-4 text-[15px] font-bold uppercase tracking-wider text-black transition-all hover:bg-[#FF8C00] disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Randevunuz işleniyor...
                      </>
                    ) : (
                      "Randevu Oluştur"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div
      className={`flex justify-between py-2 ${
        last ? "" : "border-b border-[#2A2A2A]"
      }`}
    >
      <span className="text-[#A0A0A0]">{k}</span>
      <span className="font-semibold text-white">{v}</span>
    </div>
  );
}
