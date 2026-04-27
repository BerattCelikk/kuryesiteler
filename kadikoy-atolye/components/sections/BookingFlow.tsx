"use client";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import { WORKSHOP } from "@/lib/constants";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { generateBookingId, createICSFile } from "@/lib/utils";
import EditorialRule from "@/components/editorial/EditorialRule";
import Button from "@/components/ui/Button";

const inputCls =
  "w-full bg-paper border border-[var(--border-light)] rounded-md px-4 py-3 font-body text-[15px] text-ink placeholder:text-text-subtle focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/20 transition-colors";
const labelCls = "block font-mono text-[11px] uppercase tracking-[0.12em] text-forest-500 mb-2";
const errCls = "mt-1.5 font-body text-[12px] text-[#8B2520]";

type Step = 0 | 1 | 2 | 3 | 4;

export default function BookingFlow() {
  const [step, setStep] = useState<Step>(0);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    mode: "onTouched",
    defaultValues: { consent: undefined as unknown as true },
  });

  const stepFields: Record<number, (keyof BookingInput)[]> = useMemo(
    () => ({
      0: ["fullName", "phone", "email"],
      1: ["date", "timeSlot"],
      2: ["platform", "bagType", "notes"],
      3: ["consent"],
    }),
    []
  );

  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid && step < 3) setStep((s) => (s + 1) as Step);
  };
  const back = () => step > 0 && setStep((s) => (s - 1) as Step);

  const onSubmit = async (values: BookingInput) => {
    await new Promise((r) => setTimeout(r, 700));
    const id = generateBookingId();
    setBookingId(id);
    setStep(4);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ["#1E5C34", "#B8953A", "#FEFCF5"] });
    toast.success(`Randevu kaydı: ${id}`);
    console.log("booking", id, values);
  };

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const watched = watch();

  function downloadICS() {
    if (!watched.date || !watched.timeSlot) return;
    const [h] = watched.timeSlot.split(":");
    const start = new Date(`${watched.date}T${h.padStart(2, "0")}:00:00`);
    const ics = createICSFile({
      title: `Kadıköy Atölyesi · Randevu ${bookingId ?? ""}`,
      description: `Randevu — ${watched.fullName}, ${watched.platform}, ${watched.bagType}`,
      start,
      durationMin: 30,
      location: WORKSHOP.address,
    });
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kadikoy-randevu-${bookingId}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="editorial-card px-6 py-8 md:px-10 md:py-10">
      {/* Stepper */}
      <ol className="flex items-center justify-between gap-3 flex-wrap" aria-label="Adımlar">
        {WORKSHOP.bookingSteps.map((s, i) => {
          const done = i < step || step === 4;
          const active = i === step && step < 4;
          return (
            <li key={s.n} className="flex items-center gap-3 min-w-0">
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-[12px] border ${
                  done
                    ? "bg-forest-500 text-ivory border-forest-600"
                    : active
                      ? "bg-ivory border-forest-500 text-forest-500"
                      : "bg-ivory border-parchment text-text-subtle"
                }`}
              >
                {done ? <Check className="w-4 h-4" strokeWidth={2} /> : s.n}
              </span>
              <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${active ? "text-forest-500" : done ? "text-text-secondary" : "text-text-subtle"}`}>
                {s.label}
              </span>
              {i < WORKSHOP.bookingSteps.length - 1 && (
                <span className={`hidden md:inline-block w-10 h-px ${done ? "bg-forest-500" : "bg-parchment"}`} />
              )}
            </li>
          );
        })}
      </ol>

      <EditorialRule color="gold" width="100%" className="mt-8 mb-8" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className={labelCls} htmlFor="fullName">Ad Soyad</label>
                <input id="fullName" className={inputCls} {...register("fullName")} placeholder="Tam adınız" />
                {errors.fullName && <p className={errCls}>{errors.fullName.message}</p>}
              </div>
              <div>
                <label className={labelCls} htmlFor="phone">Telefon</label>
                <input id="phone" className={inputCls} {...register("phone")} placeholder="+90 ..." />
                {errors.phone && <p className={errCls}>{errors.phone.message}</p>}
              </div>
              <div>
                <label className={labelCls} htmlFor="email">E-posta (opsiyonel)</label>
                <input id="email" className={inputCls} {...register("email")} placeholder="ornek@e-posta.com" />
                {errors.email && <p className={errCls}>{errors.email.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelCls} htmlFor="date">Tarih</label>
                <input id="date" type="date" min={minDate} className={inputCls} {...register("date")} />
                {errors.date && <p className={errCls}>{errors.date.message}</p>}
              </div>
              <div>
                <label className={labelCls} htmlFor="timeSlot">Saat Aralığı</label>
                <select id="timeSlot" className={inputCls} {...register("timeSlot")}>
                  <option value="">Seçiniz…</option>
                  {WORKSHOP.timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.timeSlot && <p className={errCls}>{errors.timeSlot.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelCls} htmlFor="platform">Platform</label>
                <select id="platform" className={inputCls} {...register("platform")}>
                  <option value="">Seçiniz…</option>
                  {WORKSHOP.platforms.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.platform && <p className={errCls}>{errors.platform.message}</p>}
              </div>
              <div>
                <label className={labelCls} htmlFor="bagType">Çanta Türü</label>
                <select id="bagType" className={inputCls} {...register("bagType")}>
                  <option value="">Seçiniz…</option>
                  {WORKSHOP.bagTypes.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                {errors.bagType && <p className={errCls}>{errors.bagType.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className={labelCls} htmlFor="notes">Notlarınız (opsiyonel)</label>
                <textarea id="notes" rows={4} className={inputCls} {...register("notes")} placeholder="Özel bir talebiniz varsa belirtebilirsiniz." />
                {errors.notes && <p className={errCls}>{errors.notes.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3 }} className="space-y-6">
              <div>
                <div className="editorial-label">Özet</div>
                <EditorialRule color="forest" width="40px" className="mt-2" />
                <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-[14px]">
                  <Row k="Ad Soyad" v={watched.fullName} />
                  <Row k="Telefon" v={watched.phone} />
                  <Row k="E-posta" v={watched.email || "—"} />
                  <Row k="Tarih" v={watched.date} />
                  <Row k="Saat" v={watched.timeSlot} />
                  <Row k="Platform" v={watched.platform} />
                  <Row k="Çanta" v={watched.bagType} />
                </dl>
              </div>
              <label className="flex items-start gap-3 select-none cursor-pointer" data-cursor="hover">
                <input type="checkbox" className="mt-1.5 w-4 h-4 accent-forest-500" {...register("consent")} />
                <span className="font-body text-[14px] text-text-secondary leading-[1.7]">
                  KVKK kapsamında bilgilerimin yalnızca randevu sürecinde kullanılmasına onay veriyorum.
                </span>
              </label>
              {errors.consent && <p className={errCls}>{errors.consent.message}</p>}
            </motion.div>
          )}

          {step === 4 && bookingId && (
            <motion.div key="s4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest-100 text-forest-600">
                <Check className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display font-medium text-[clamp(1.6rem,3vw,2.4rem)] text-ink">Randevunuz Oluşturuldu</h3>
              <div className="mt-3 font-mono text-[13px] tracking-[0.08em] text-forest-500">{bookingId}</div>
              <p className="mt-4 max-w-md mx-auto font-body text-[15px] text-text-muted leading-[1.7]">
                Detaylar SMS ile telefonunuza ulaşacaktır. Tarih ve saatte atölyemizde görüşmek üzere.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button variant="primary" size="md" onClick={downloadICS}>Takvime Ekleyin</Button>
                <Button href="/" variant="ghost" size="md">Ana Sayfa</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {step < 4 && (
          <div className="mt-10 flex items-center justify-between gap-3">
            <Button variant="ghost" size="md" onClick={back} disabled={step === 0}>Geri</Button>
            {step < 3 ? (
              <Button variant="primary" size="md" onClick={next}>İlerle</Button>
            ) : (
              <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
                {isSubmitting ? "Onaylanıyor…" : "Onayla"}
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

function Row({ k, v }: { k: string; v?: string }) {
  return (
    <div className="border-b border-parchment pb-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">{k}</dt>
      <dd className="mt-1 text-text-primary">{v || "—"}</dd>
    </div>
  );
}
