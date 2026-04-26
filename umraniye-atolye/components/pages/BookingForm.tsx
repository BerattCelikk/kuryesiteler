"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Download,
  MessageCircle,
  User,
} from "lucide-react";
import * as Switch from "@radix-ui/react-switch";
import { WORKSHOP } from "@/lib/constants";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { cn, createICSFile } from "@/lib/utils";

const STEPS = ["Kişisel", "Zaman", "Kuryelik", "Onay"];
const BAG_COUNTS = ["1", "2", "3", "4+"];

type SuccessPayload = {
  bookingId: string;
  data: BookingInput;
};

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState<SuccessPayload | null>(null);

  const form = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      type: "booking" as const,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      timeSlot: "",
      platforms: [],
      bagTypes: [],
      bagCount: "",
      isB2B: false,
      companyName: "",
      notes: "",
      consent: true as unknown as true,
    },
  });

  const { control, register, handleSubmit, trigger, watch, setValue, formState } = form;
  const values = watch();

  const nextStep = async () => {
    const fieldGroups: Array<(keyof BookingInput)[]> = [
      ["firstName", "lastName", "phone", "email"],
      ["date", "timeSlot"],
      ["platforms", "bagTypes", "bagCount"],
      ["consent"],
    ];
    const ok = await trigger(fieldGroups[step]);
    if (ok) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const onSubmit = async (data: BookingInput) => {
    if (!data.consent) {
      toast.error("Onay gerekli");
      return;
    }
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, type: "booking" }),
    });
    const json = await res.json();
    if (!res.ok) {
      toast.error(json.error ?? "Bir hata oluştu");
      return;
    }
    setSuccess({ bookingId: json.bookingId, data });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.4 },
      colors: ["#2563EB", "#3B82F6", "#14B8A6", "#2DD4BF"],
    });
  };

  const togglePlatform = (p: string) => {
    const cur = values.platforms ?? [];
    setValue(
      "platforms",
      cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p],
      { shouldValidate: true }
    );
  };
  const toggleBagType = (p: string) => {
    const cur = values.bagTypes ?? [];
    setValue(
      "bagTypes",
      cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p],
      { shouldValidate: true }
    );
  };

  if (success) {
    const downloadICS = () => {
      const blob = createICSFile({
        bookingId: success.bookingId,
        date: success.data.date,
        timeSlot: success.data.timeSlot,
        firstName: success.data.firstName,
        lastName: success.data.lastName,
      });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `umraniye-randevu-${success.bookingId}.ics`;
      a.click();
    };
    const waMsg = encodeURIComponent(
      `Randevu onayım: ${success.bookingId} / ${success.data.date} ${success.data.timeSlot}`
    );

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-base p-8 md:p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-teal-500 text-white mx-auto flex items-center justify-center mb-6"
        >
          <Check className="w-10 h-10" strokeWidth={3} />
        </motion.div>
        <h2 className="fluid-xl text-text-primary">Randevu Onaylandı!</h2>
        <p className="mt-2 text-text-muted">
          Tüm detaylar SMS ile gönderildi. Atölyemizde görüşmek üzere.
        </p>
        <div className="mt-6 bg-blue-50 rounded-[12px] p-5 inline-block">
          <div className="text-xs font-mono text-blue-700 uppercase">Randevu No</div>
          <div className="mt-1 font-mono font-bold text-2xl text-blue-700">
            {success.bookingId}
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-3 text-sm text-left">
          <div className="card-base p-4">
            <div className="text-xs font-mono text-text-subtle uppercase mb-1">Ad Soyad</div>
            <div className="font-medium">
              {success.data.firstName} {success.data.lastName}
            </div>
          </div>
          <div className="card-base p-4">
            <div className="text-xs font-mono text-text-subtle uppercase mb-1">Tarih · Saat</div>
            <div className="font-medium">
              {success.data.date} · {success.data.timeSlot}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            variant="secondary"
            size="md"
            icon={<Download className="w-4 h-4" />}
            iconPosition="left"
            onClick={downloadICS}
          >
            Takvime Ekle
          </Button>
          <Button
            variant="teal"
            size="md"
            href={`${WORKSHOP.waLink}?text=${waMsg}`}
            icon={<MessageCircle className="w-4 h-4" />}
            iconPosition="left"
          >
            WhatsApp'a Gönder
          </Button>
        </div>
        <div className="mt-6">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-700">
            Ana sayfaya dön
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="card-base p-4 md:p-5 mb-6">
        <div className="flex items-center justify-between gap-2">
          {STEPS.map((label, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <div key={label} className="flex-1 flex items-center gap-2">
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0",
                    done && "bg-blue-600 text-white",
                    active && "bg-white text-blue-700 ring-2 ring-blue-500",
                    !active && !done && "bg-bg-muted text-text-muted"
                  )}
                >
                  {done ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "text-xs md:text-sm font-display font-medium hidden md:inline",
                    active ? "text-text-primary" : "text-text-muted"
                  )}
                >
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-px",
                      done ? "bg-blue-600" : "bg-border-light"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div className="card-base p-7 md:p-8">
                <h2 className="fluid-lg text-text-primary flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" /> Sizi Tanıyalım
                </h2>
                <p className="text-text-muted text-sm mt-1">
                  Randevu onayı SMS ile gönderilecek.
                </p>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <Field label="Ad" error={formState.errors.firstName?.message}>
                    <input
                      {...register("firstName")}
                      className="input"
                      placeholder="Adınız"
                    />
                  </Field>
                  <Field label="Soyad" error={formState.errors.lastName?.message}>
                    <input
                      {...register("lastName")}
                      className="input"
                      placeholder="Soyadınız"
                    />
                  </Field>
                  <Field label="Telefon" error={formState.errors.phone?.message}>
                    <input
                      {...register("phone")}
                      className="input font-mono"
                      placeholder="+90 5xx xxx xx xx"
                    />
                  </Field>
                  <Field label="E-posta (opsiyonel)" error={formState.errors.email?.message}>
                    <input
                      type="email"
                      {...register("email")}
                      className="input"
                      placeholder="ornek@mail.com"
                    />
                  </Field>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={nextStep}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Devam
                  </Button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="card-base p-7 md:p-8">
                <h2 className="fluid-lg text-text-primary flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" /> Randevu Zamanı
                </h2>
                <p className="text-text-muted text-sm mt-1">
                  Size uygun tarih ve saat aralığını seçin.
                </p>
                <div className="mt-6">
                  <Field label="Tarih" error={formState.errors.date?.message}>
                    <input
                      type="date"
                      {...register("date")}
                      min={new Date().toISOString().split("T")[0]}
                      className="input font-mono"
                    />
                  </Field>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-display font-medium text-text-secondary mb-3">
                    Saat Aralığı
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {WORKSHOP.timeSlots.map((slot) => {
                      const selected = values.timeSlot === slot;
                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setValue("timeSlot", slot, { shouldValidate: true })}
                          className={cn(
                            "h-14 rounded-[12px] border text-left px-4 transition-colors",
                            selected
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white border-border-light text-text-secondary hover:border-blue-200"
                          )}
                        >
                          <div className="font-mono font-bold text-sm">{slot}</div>
                          <div className={cn("text-xs", selected ? "text-blue-100" : "text-text-muted")}>
                            ~8 dk bekleme
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {formState.errors.timeSlot && (
                    <p className="text-xs text-danger mt-2">{formState.errors.timeSlot.message}</p>
                  )}
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    icon={<ArrowLeft className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Geri
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={nextStep}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Devam
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="card-base p-7 md:p-8">
                <h2 className="fluid-lg text-text-primary">Kuryelik Bilgileri</h2>
                <p className="text-text-muted text-sm mt-1">
                  Hangi platformda çalışıyorsunuz? Hangi çantayı kullanıyorsunuz?
                </p>

                <div className="mt-6">
                  <div className="text-sm font-display font-medium text-text-secondary mb-3">
                    Platform (birden fazla seçilebilir)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {WORKSHOP.platforms.map((p) => {
                      const selected = values.platforms?.includes(p);
                      return (
                        <button
                          type="button"
                          key={p}
                          onClick={() => togglePlatform(p)}
                          className={cn(
                            "h-10 px-4 rounded-full border text-sm font-medium transition-colors",
                            selected
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-text-secondary border-border-light hover:border-blue-200"
                          )}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                  {formState.errors.platforms && (
                    <p className="text-xs text-danger mt-2">{formState.errors.platforms.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <div className="text-sm font-display font-medium text-text-secondary mb-3">
                    Çanta Tipi
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {WORKSHOP.bagTypes.map((p) => {
                      const selected = values.bagTypes?.includes(p);
                      return (
                        <button
                          type="button"
                          key={p}
                          onClick={() => toggleBagType(p)}
                          className={cn(
                            "h-10 px-4 rounded-full border text-sm font-medium transition-colors",
                            selected
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-text-secondary border-border-light hover:border-blue-200"
                          )}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                  {formState.errors.bagTypes && (
                    <p className="text-xs text-danger mt-2">{formState.errors.bagTypes.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <div className="text-sm font-display font-medium text-text-secondary mb-3">
                    Çanta Sayısı
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {BAG_COUNTS.map((c) => {
                      const selected = values.bagCount === c;
                      return (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setValue("bagCount", c, { shouldValidate: true })}
                          className={cn(
                            "h-14 rounded-[12px] border font-mono font-bold",
                            selected
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-text-secondary border-border-light hover:border-blue-200"
                          )}
                        >
                          {c}
                        </button>
                      );
                    })}
                  </div>
                  {formState.errors.bagCount && (
                    <p className="text-xs text-danger mt-2">{formState.errors.bagCount.message}</p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between p-4 rounded-[12px] bg-bg-soft border border-border-light">
                  <div>
                    <div className="font-display font-semibold text-sm text-text-primary">
                      Kurumsal / Filo Başvurusu
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">
                      5+ çanta için özel B2B fiyatlandırma.
                    </div>
                  </div>
                  <Controller
                    control={control}
                    name="isB2B"
                    render={({ field }) => (
                      <Switch.Root
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-11 h-6 rounded-full bg-border-medium data-[state=checked]:bg-blue-600 relative transition-colors"
                      >
                        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow translate-x-0.5 data-[state=checked]:translate-x-[22px] transition-transform" />
                      </Switch.Root>
                    )}
                  />
                </div>

                <AnimatePresence>
                  {values.isB2B && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4">
                        <Field label="Firma Adı" error={formState.errors.companyName?.message}>
                          <input
                            {...register("companyName")}
                            className="input"
                            placeholder="Şirket adı"
                          />
                        </Field>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6">
                  <Field label="Not (opsiyonel)" error={formState.errors.notes?.message}>
                    <textarea
                      {...register("notes")}
                      rows={3}
                      className="input min-h-[80px] resize-none py-2.5"
                      placeholder="Eklemek istediğiniz bir not var mı?"
                    />
                  </Field>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    icon={<ArrowLeft className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Geri
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={nextStep}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Devam
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card-base p-7 md:p-8">
                <h2 className="fluid-lg text-text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> Özet & Onay
                </h2>
                <p className="text-text-muted text-sm mt-1">
                  Bilgilerinizi kontrol edin ve randevuyu onaylayın.
                </p>
                <dl className="mt-6 grid md:grid-cols-2 gap-4">
                  {[
                    { k: "Ad Soyad", v: `${values.firstName} ${values.lastName}` },
                    { k: "Telefon", v: values.phone, mono: true },
                    { k: "E-posta", v: values.email || "—" },
                    { k: "Tarih", v: values.date, mono: true },
                    { k: "Saat", v: values.timeSlot, mono: true },
                    { k: "Çanta Sayısı", v: values.bagCount, mono: true },
                    { k: "Platformlar", v: values.platforms?.join(", ") || "—" },
                    { k: "Çanta Tipleri", v: values.bagTypes?.join(", ") || "—" },
                    { k: "Tip", v: values.isB2B ? `Kurumsal · ${values.companyName || ""}` : "Bireysel" },
                  ].map((r) => (
                    <div key={r.k} className="p-4 rounded-[10px] bg-bg-soft">
                      <dt className="font-mono text-[10px] uppercase text-text-muted tracking-wider">
                        {r.k}
                      </dt>
                      <dd className={cn("mt-1 text-sm text-text-primary", r.mono && "font-mono")}>
                        {r.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <label className="mt-6 flex items-start gap-3 text-sm text-text-secondary">
                  <Controller
                    control={control}
                    name="consent"
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        checked={!!field.value}
                        onChange={(e) => field.onChange(e.target.checked || false)}
                        className="mt-0.5 w-4 h-4 accent-blue-600"
                      />
                    )}
                  />
                  <span>
                    KVKK kapsamında kişisel verilerimin randevu amacıyla işlenmesini kabul ediyorum.
                  </span>
                </label>
                {formState.errors.consent && (
                  <p className="text-xs text-danger mt-1">{formState.errors.consent.message}</p>
                )}

                <div className="mt-8 flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    icon={<ArrowLeft className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Geri
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={formState.isSubmitting}
                  >
                    RANDEVUMU ONAYLA
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          height: 44px;
          padding: 0 14px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: white;
          font-size: 15px;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-display font-medium text-text-secondary">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </label>
  );
}

export default BookingForm;
