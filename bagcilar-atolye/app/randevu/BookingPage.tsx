"use client";

import { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
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
  ImagePlus,
  X as XIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import { WORKSHOP } from "@/lib/constants";
import {
  bookingSchema,
  type BookingInput,
  type BookingFormData,
} from "@/lib/validations";
import { todayIsoDate, whatsappLink } from "@/lib/utils";
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

interface PhotoItem {
  name: string;
  size: number;
  previewUrl: string;
}

interface SuccessData {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
  timeSlot: string;
  photoNames: string[];
}

const MAX_PHOTOS = 3;
const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function BookingPage() {
  const [success, setSuccess] = useState<SuccessData | null>(null);
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const onPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError(null);
    const incoming = Array.from(e.target.files ?? []);
    if (!incoming.length) return;
    const next: PhotoItem[] = [...photos];
    for (const file of incoming) {
      if (next.length >= MAX_PHOTOS) {
        setPhotoError(`En fazla ${MAX_PHOTOS} fotoğraf ekleyebilirsiniz.`);
        break;
      }
      if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
        setPhotoError("Sadece JPEG, PNG veya WebP yükleyebilirsiniz.");
        continue;
      }
      if (file.size > MAX_PHOTO_SIZE) {
        setPhotoError("Her fotoğraf en fazla 5 MB olabilir.");
        continue;
      }
      next.push({
        name: file.name,
        size: file.size,
        previewUrl: URL.createObjectURL(file),
      });
    }
    setPhotos(next);
    e.target.value = "";
  };

  const removePhoto = (idx: number) => {
    setPhotos((prev) => {
      const removed = prev[idx];
      if (removed) URL.revokeObjectURL(removed.previewUrl);
      return prev.filter((_, i) => i !== idx);
    });
    setPhotoError(null);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError,
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
      consent: false,
    },
  });

  const notes = useWatch({ control, name: "notes" }) || "";

  const onSubmit = async (data: BookingInput) => {
    try {
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        date: data.date,
        time: data.timeSlot,
        platform: data.platforms.join(", "),
        bagCount: data.bagCount === "3+" ? 3 : Number(data.bagCount),
        notes: data.notes || null,
        consent: data.consent,
        honeypot,
      };
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (res.status === 400 && result.fields) {
        const fieldMap: Record<string, keyof BookingFormData> = {
          firstName: "firstName",
          lastName: "lastName",
          phone: "phone",
          date: "date",
          time: "timeSlot",
          platform: "platforms",
          bagCount: "bagCount",
          notes: "notes",
          consent: "consent",
        };
        Object.entries(result.fields).forEach(([field, messages]) => {
          const formField = fieldMap[field] ?? (field as keyof BookingFormData);
          setError(formField, {
            type: "server",
            message: Array.isArray(messages) ? messages[0] : String(messages),
          });
        });
        toast.error("Lütfen formu kontrol edin");
        return;
      }

      if (!res.ok || !result.success) {
        toast.error(result.error || "Bir hata oluştu");
        return;
      }

      setSuccess({
        id: result.id,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        date: data.date,
        timeSlot: data.timeSlot,
        photoNames: photos.map((p) => p.name),
      });
      reset();
      photos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      setPhotos([]);
      setPhotoError(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Bağlantı hatası");
    }
  };

  function toIcsDate(dateStr: string, hourOffset: number): string {
    const [year, month, day] = dateStr.split("-").map(Number);
    const d = new Date(Date.UTC(year, month - 1, day, hourOffset - 3, 0, 0));
    return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  }

  const downloadIcs = (s: SuccessData) => {
    const [startHour] = s.timeSlot.split(" – ")[0].split(":").map(Number);
    const selectedDate = s.date;
    const dtstamp =
      new Date()
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `UID:${s.id}@kuryeproje`,
      `DTSTAMP:${dtstamp}`,
      `DTSTART:${toIcsDate(selectedDate, startHour)}`,
      `DTEND:${toIcsDate(selectedDate, startHour + 1)}`,
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
                  href={whatsappLink()}
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
                    <Row k="Saat" v={success.timeSlot} last={success.photoNames.length === 0} />
                    {success.photoNames.length > 0 && (
                      <Row
                        k="Fotoğraflar"
                        v={`Fotoğraflarınız alındı: ${success.photoNames.join(", ")}`}
                        last
                      />
                    )}
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

                  <section>
                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      Araç ve Çanta Fotoğrafları (İsteğe Bağlı)
                    </h3>
                    <p className="mt-2 text-[12px] text-[#A0A0A0]">
                      Motorunuzun ve çantanızın fotoğraflarını eklerseniz ön kontrolünüz
                      çok daha hızlı yapılır.
                    </p>
                    <label
                      htmlFor="photos"
                      className="mt-4 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#2A2A2A] bg-[#0A0A0A] px-4 py-6 text-center transition hover:border-[#FF6B00]/60 hover:bg-[#FF6B00]/5"
                    >
                      <ImagePlus size={22} className="text-[#FF6B00]" />
                      <span className="text-[13px] font-semibold text-white">
                        Fotoğraf seç ({photos.length}/{MAX_PHOTOS})
                      </span>
                      <span className="text-[11px] text-[#555]">
                        JPEG · PNG · WebP — her biri en fazla 5 MB
                      </span>
                      <input
                        id="photos"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                        onChange={onPhotoChange}
                        className="sr-only"
                        disabled={photos.length >= MAX_PHOTOS}
                      />
                    </label>
                    {photoError && (
                      <span className="mt-2 block text-[12px] text-[#EF4444]">
                        {photoError}
                      </span>
                    )}
                    {photos.length > 0 && (
                      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {photos.map((p, idx) => (
                          <li
                            key={p.previewUrl}
                            className="group relative overflow-hidden rounded-lg border border-[#2A2A2A] bg-[#1A1A1A]"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={p.previewUrl}
                              alt={p.name}
                              className="h-32 w-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removePhoto(idx)}
                              aria-label="Fotoğrafı kaldır"
                              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition group-hover:opacity-100"
                            >
                              <XIcon size={14} />
                            </button>
                            <div className="px-2 py-1.5 text-[11px] text-[#A0A0A0]">
                              <div className="truncate">{p.name}</div>
                              <div className="text-[10px] text-[#555]">
                                {(p.size / 1024).toFixed(0)} KB
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>

                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      top: "auto",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                      opacity: 0,
                    }}
                  >
                    <label htmlFor="website">Website (boş bırakın)</label>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#2A2A2A] bg-[#0A0A0A] p-4">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-0.5 h-4 w-4 accent-[#FF6B00]"
                    />
                    <span className="text-[13px] leading-relaxed text-[#A0A0A0]">
                      Kişisel verilerimin randevu amacıyla işlenmesine onay veriyorum.{" "}
                      <a
                        href="/kvkk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B00] underline"
                      >
                        KVKK Aydınlatma Metni
                      </a>{" "}
                      ve{" "}
                      <a
                        href="/gizlilik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B00] underline"
                      >
                        Gizlilik Politikası
                      </a>
                      &apos;nı okudum.
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
