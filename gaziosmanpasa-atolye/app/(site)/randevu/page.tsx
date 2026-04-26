"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Calendar, Download } from "lucide-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import RouteLineSVG from "@/components/ui/RouteLineSVG";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { WORKSHOP } from "@/lib/constants";
import { createICSFile } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function Page() {
  const [step, setStep] = useState(0);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<BookingInput | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<BookingInput>({ resolver: zodResolver(bookingSchema), mode: "onBlur" });

  const stepFields: (keyof BookingInput)[][] = [
    ["name", "phone"],
    ["date", "timeSlot"],
    ["service", "platform", "bagType", "notes"],
    ["kvkk"],
  ];

  const next = async () => {
    const ok = await trigger(stepFields[step]);
    if (ok) setStep(Math.min(step + 1, stepFields.length - 1));
  };
  const prev = () => setStep(Math.max(0, step - 1));

  const onSubmit = async (data: BookingInput) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "booking" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Hata");
      setBookingId(json.id);
      setSubmittedData(data);
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 }, colors: ["#E8435A", "#22D3EE", "#FBBF24"] });
      toast.success("Yolda!");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Hata");
    }
  };

  const downloadICS = () => {
    if (!submittedData) return;
    const [datePart] = submittedData.date.split("T");
    const [hStart] = submittedData.timeSlot.split(" – ");
    const start = new Date(`${datePart}T${hStart}:00`);
    const end = new Date(start.getTime() + 30 * 60_000);
    const ics = createICSFile({
      title: `GOP Atölye Randevusu — ${bookingId}`,
      start,
      end,
      description: `Hizmet: ${submittedData.service}\nPlatform: ${submittedData.platform}\nNot: ${submittedData.notes ?? "—"}`,
      location: WORKSHOP.address,
    });
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${bookingId}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHero breadcrumb="GOP → RANDEVU" title="Zaman Seç. Yolda Ol." subtitle="Dört adımda randevu. Toplam 60 saniye." />

      {bookingId ? (
        <section className="max-w-[700px] mx-auto px-4 md:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="panel holo-card p-8 md:p-12 text-center border-coral-500/40"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-coral-500/15 border border-coral-500/40 mb-6">
              <CheckCircle2 className="w-10 h-10 text-coral-400" />
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-bright mb-3">Yolda. Beklerken hazırlan.</h2>
            <p className="font-body text-text-secondary mb-6">Randevu numaranı not al. SMS ile de geleceğiz.</p>
            <div className="font-mono font-bold text-4xl md:text-5xl text-coral-glow mb-8">{bookingId}</div>
            <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
              <Button onClick={downloadICS} variant="primary" fullWidth>
                <Calendar className="w-4 h-4" /> Takvime Ekle
              </Button>
              <Button href={WORKSHOP.googleMapsUrl} target="_blank" variant="ghost" fullWidth>
                Rotayı Aç →
              </Button>
            </div>
            <p className="mt-8 font-mono text-[11px] text-text-muted uppercase tracking-widest">{WORKSHOP.address}</p>
          </motion.div>
        </section>
      ) : (
        <section className="max-w-[900px] mx-auto px-4 md:px-8 py-12">
          {/* Step pill nav */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 mb-10 relative">
            {WORKSHOP.bookingSteps.map((s, i) => {
              const active = i === step;
              const done = i < step;
              return (
                <div key={s.n} className="relative">
                  <div className={cn("panel p-3 md:p-4 text-center transition-all", active && "border-coral-500/60 bg-coral-500/5", done && "border-cyan-500/40")}>
                    <div className={cn("font-mono text-[11px] uppercase tracking-widest mb-1", active ? "text-coral-300" : done ? "text-cyan-400" : "text-text-muted")}>{s.n}</div>
                    <div className={cn("font-body font-semibold text-[13px] md:text-sm", active ? "text-text-bright" : "text-text-secondary")}>{s.label}</div>
                  </div>
                  {i < WORKSHOP.bookingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 -translate-y-1/2">
                      <RouteLineSVG variant="horizontal" delay={0} duration={0.4} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="panel p-7 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {step === 0 && (
                  <>
                    <div className="font-mono text-mono-label text-coral-400">// 01 — SENİ TANIYALIM</div>
                    <h2 className="font-display font-bold text-2xl text-text-bright">Önce kim olduğunu söyle.</h2>
                    <Input label="Ad Soyad" {...register("name")} error={errors.name?.message} placeholder="İsmini yaz" />
                    <Input label="Telefon" {...register("phone")} error={errors.phone?.message} placeholder="5XX XXX XX XX" />
                  </>
                )}
                {step === 1 && (
                  <>
                    <div className="font-mono text-mono-label text-coral-400">// 02 — ZAMANI SEÇ</div>
                    <h2 className="font-display font-bold text-2xl text-text-bright">Hangi gün, hangi saat?</h2>
                    <Input type="date" label="Tarih" {...register("date")} error={errors.date?.message} />
                    <Select label="Saat Dilimi" {...register("timeSlot")} error={errors.timeSlot?.message} options={[...WORKSHOP.timeSlots]} placeholder="Seç" />
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="font-mono text-mono-label text-coral-400">// 03 — DETAYLAR</div>
                    <h2 className="font-display font-bold text-2xl text-text-bright">Hangi hizmet, hangi platform?</h2>
                    <Select label="Hizmet" {...register("service")} error={errors.service?.message} options={WORKSHOP.services.map((s) => s.navTitle)} placeholder="Seç" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select label="Platform" {...register("platform")} error={errors.platform?.message} options={[...WORKSHOP.platforms]} placeholder="Seç" />
                      <Select label="Çanta Tipi" {...register("bagType")} error={errors.bagType?.message} options={[...WORKSHOP.bagTypes]} placeholder="Seç" />
                    </div>
                    <Textarea label="Not (opsiyonel)" {...register("notes")} error={errors.notes?.message} placeholder="Eklemek istediğin bir şey?" />
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="font-mono text-mono-label text-coral-400">// 04 — ONAYLA</div>
                    <h2 className="font-display font-bold text-2xl text-text-bright">Son bir kontrol.</h2>
                    <div className="panel-coral p-5 space-y-2 font-mono text-[13px]">
                      <div><span className="text-text-muted">AD: </span><span className="text-text-bright">{getValues("name") || "—"}</span></div>
                      <div><span className="text-text-muted">TEL: </span><span className="text-text-bright">{getValues("phone") || "—"}</span></div>
                      <div><span className="text-text-muted">TARİH: </span><span className="text-text-bright">{getValues("date") || "—"}</span></div>
                      <div><span className="text-text-muted">SAAT: </span><span className="text-text-bright">{getValues("timeSlot") || "—"}</span></div>
                      <div><span className="text-text-muted">HİZMET: </span><span className="text-text-bright">{getValues("service") || "—"}</span></div>
                      <div><span className="text-text-muted">PLATFORM: </span><span className="text-text-bright">{getValues("platform") || "—"}</span></div>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" {...register("kvkk")} className="mt-1 w-4 h-4 accent-coral-500" />
                      <span className="font-body text-sm text-text-secondary">
                        KVKK kapsamında verilerimin işlenmesini kabul ediyorum. Bilgilerim sadece randevu süreci için kullanılacak.
                      </span>
                    </label>
                    {errors.kvkk && <span className="text-[12px] text-coral-300">{errors.kvkk.message}</span>}
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8 pt-6 border-t border-white/8">
              {step > 0 ? (
                <Button type="button" onClick={prev} variant="ghost">
                  <ArrowLeft className="w-4 h-4" /> Geri
                </Button>
              ) : <div />}
              {step < 3 ? (
                <Button type="button" onClick={next} variant="primary">
                  Devam <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? "Gönderiliyor..." : "Onayla, Yolda."} <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </section>
      )}
    </>
  );
}
