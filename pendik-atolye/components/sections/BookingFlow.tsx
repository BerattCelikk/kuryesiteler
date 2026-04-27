"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Switch from "@radix-ui/react-switch";
import { Check, Calendar, Phone, MessageCircle, Minus, Plus } from "lucide-react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import { bookingSchema, type BookingForm } from "@/lib/validations";
import { WORKSHOP } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState<{ id: string; data: BookingForm } | null>(null);

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      slot: "",
      platforms: [],
      bagTypes: [],
      count: 1,
      isFleet: false,
      company: "",
      notes: "",
      consent: false as unknown as true,
    },
  });

  const next = async (fields: Array<keyof BookingForm>) => {
    const ok = await form.trigger(fields);
    if (ok) setStep((s) => s + 1);
  };

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type: "booking", payload: data }),
      });
      const json = await res.json();
      if (json.success) {
        setSuccess({ id: json.bookingId, data });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6CC024", "#94E04A", "#212529"],
        });
      } else toast.error("Hata oluştu.");
    } catch {
      toast.error("Bağlantı hatası.");
    }
  });

  if (success) return <BookingSuccess id={success.id} data={success.data} />;

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="sticky top-[60px] z-40 bg-white border-b border-gray-200 -mx-6 px-6 py-4 mb-8">
        <div className="flex items-center justify-between gap-2 max-w-2xl mx-auto">
          {WORKSHOP.bookingSteps.map((s, i) => (
            <div key={s.n} className="flex items-center gap-2 flex-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full font-mono font-bold text-[12px] flex items-center justify-center transition-all",
                  i < step
                    ? "bg-lime-100 text-lime-700"
                    : i === step
                    ? "bg-lime-500 text-gray-900 shadow-[0_0_0_4px_rgba(108,192,36,0.18)]"
                    : "bg-gray-100 text-gray-400"
                )}
              >
                {i < step ? <Check size={14} /> : s.n}
              </div>
              <span
                className={cn(
                  "text-[11px] font-semibold hidden md:block",
                  i === step ? "text-gray-900" : "text-gray-500"
                )}
              >
                {s.label}
              </span>
              {i < WORKSHOP.bookingSteps.length - 1 && (
                <div className={cn("h-px flex-1", i < step ? "bg-lime-400" : "bg-gray-200")} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8">
        <aside className="self-start lg:sticky lg:top-[150px]">
          <div className="widget p-5 flex flex-col gap-4">
            <div>
              <div className="font-display font-bold text-[22px] text-gray-900">
                {WORKSHOP.name}
              </div>
              <div className="text-[12px] font-mono text-gray-500 mt-0.5">
                {WORKSHOP.address}
              </div>
            </div>
            <StatusBadge size="sm" />
            <div className="border-t border-gray-150" />
            <div>
              <div className="precision-label mb-2">Gereksinimler</div>
              <ol className="flex flex-col gap-1.5 text-[13px] text-gray-700">
                {["Kimlik", "Plaka no.", "Mevcut çanta"].map((x, i) => (
                  <li key={x} className="flex gap-2">
                    <span className="font-mono text-lime-600">
                      {String(i + 1).padStart(2, "0")} /
                    </span>
                    {x}
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-t border-gray-150" />
            <div>
              <div className="precision-label mb-1">Bekleme</div>
              <div className="font-mono text-[15px] text-lime-600">≤10 dk walk-in</div>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Filo programı için 5+ kurye ile gelirseniz öncelikli işlem yapılır.
            </p>
            <Button variant="secondary" size="sm" fullWidth href={WORKSHOP.waLink}>
              <MessageCircle size={14} /> WhatsApp
            </Button>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="widget p-7"
            >
              {step === 0 && <Step1 form={form} />}
              {step === 1 && <Step2 form={form} />}
              {step === 2 && <Step3 form={form} />}
              {step === 3 && <Step4 form={form} />}
              <div className="flex justify-between gap-3 mt-8">
                {step > 0 ? (
                  <Button
                    variant="secondary"
                    size="md"
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                  >
                    ← Geri
                  </Button>
                ) : <span />}
                {step < 3 ? (
                  <Button
                    variant="primary"
                    size="md"
                    type="button"
                    onClick={() =>
                      next(
                        step === 0
                          ? ["firstName", "lastName", "phone", "email"]
                          : step === 1
                          ? ["date", "slot"]
                          : ["platforms", "bagTypes", "count"]
                      )
                    }
                  >
                    Devam →
                  </Button>
                ) : (
                  <Button variant="primary" size="md" type="submit">
                    Onayla
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="precision-label !text-gray-600 mb-1.5 block">{children}</span>;
}
const inputCls =
  "w-full bg-white border border-gray-300 rounded-md px-3.5 py-2.5 text-[14px] text-gray-900 focus:border-lime-500 focus:outline-none focus:shadow-[0_0_0_3px_rgba(108,192,36,0.15)] transition-all";

function Step1({ form }: { form: ReturnType<typeof useForm<BookingForm>> }) {
  const { register, formState: { errors } } = form;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display font-bold text-[22px] text-gray-900">
        01 — Kişisel Bilgiler
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <FieldLabel>Ad</FieldLabel>
          <input className={inputCls} {...register("firstName")} />
          {errors.firstName && <Err>{errors.firstName.message}</Err>}
        </div>
        <div>
          <FieldLabel>Soyad</FieldLabel>
          <input className={inputCls} {...register("lastName")} />
          {errors.lastName && <Err>{errors.lastName.message}</Err>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Telefon</FieldLabel>
          <input className={inputCls} placeholder="+90 5XX XXX XX XX" {...register("phone")} />
          {errors.phone && <Err>{errors.phone.message}</Err>}
        </div>
        <div>
          <FieldLabel>E-posta (opsiyonel)</FieldLabel>
          <input className={inputCls} {...register("email")} />
          {errors.email && <Err>{errors.email.message}</Err>}
        </div>
      </div>
    </div>
  );
}

function Step2({ form }: { form: ReturnType<typeof useForm<BookingForm>> }) {
  const { register, watch, setValue, formState: { errors } } = form;
  const slot = watch("slot");
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display font-bold text-[22px] text-gray-900">02 — Slot Seç</h2>
      <div>
        <FieldLabel>Tarih</FieldLabel>
        <input type="date" className={inputCls} {...register("date")} />
        {errors.date && <Err>{errors.date.message}</Err>}
      </div>
      <div>
        <FieldLabel>Saat Aralığı</FieldLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-1">
          {WORKSHOP.timeSlots.map((s) => {
            const selected = slot === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setValue("slot", s, { shouldValidate: true })}
                className={cn(
                  "h-[60px] rounded-lg border text-[14px] font-semibold transition-all",
                  selected
                    ? "bg-lime-400 border-lime-600 text-gray-900 shadow-[0_4px_16px_rgba(108,192,36,0.25)]"
                    : "bg-white border-gray-200 text-gray-700 hover:border-lime-400"
                )}
              >
                {s}
              </button>
            );
          })}
        </div>
        {errors.slot && <Err>{errors.slot.message}</Err>}
      </div>
    </div>
  );
}

function Step3({ form }: { form: ReturnType<typeof useForm<BookingForm>> }) {
  const { control, watch, setValue, register, formState: { errors } } = form;
  const platforms = watch("platforms") ?? [];
  const bags = watch("bagTypes") ?? [];
  const count = watch("count") ?? 1;
  const isFleet = watch("isFleet");

  const togglePlatform = (p: string) =>
    setValue(
      "platforms",
      platforms.includes(p) ? platforms.filter((x) => x !== p) : [...platforms, p],
      { shouldValidate: true }
    );
  const toggleBag = (b: string) =>
    setValue(
      "bagTypes",
      bags.includes(b) ? bags.filter((x) => x !== b) : [...bags, b],
      { shouldValidate: true }
    );

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-display font-bold text-[22px] text-gray-900">03 — Detaylar</h2>
      <div>
        <FieldLabel>Platform(lar)</FieldLabel>
        <div className="flex flex-wrap gap-2">
          {WORKSHOP.platforms.map((p) => {
            const on = platforms.includes(p);
            return (
              <button
                key={p}
                type="button"
                onClick={() => togglePlatform(p)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-[13px] font-semibold border transition-all",
                  on
                    ? "bg-lime-500 border-lime-600 text-gray-900"
                    : "bg-white border-gray-200 text-gray-700 hover:border-lime-400"
                )}
              >
                {p}
              </button>
            );
          })}
        </div>
        {errors.platforms && <Err>{errors.platforms.message}</Err>}
      </div>
      <div>
        <FieldLabel>Çanta Türü</FieldLabel>
        <div className="flex flex-wrap gap-2">
          {WORKSHOP.bagTypes.map((b) => {
            const on = bags.includes(b);
            return (
              <button
                key={b}
                type="button"
                onClick={() => toggleBag(b)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-[13px] font-semibold border transition-all",
                  on
                    ? "bg-lime-500 border-lime-600 text-gray-900"
                    : "bg-white border-gray-200 text-gray-700 hover:border-lime-400"
                )}
              >
                {b}
              </button>
            );
          })}
        </div>
        {errors.bagTypes && <Err>{errors.bagTypes.message}</Err>}
      </div>
      <div>
        <FieldLabel>Çanta Sayısı</FieldLabel>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setValue("count", Math.max(1, count - 1))}
            className="w-9 h-9 rounded-md border border-gray-300 hover:border-lime-500 flex items-center justify-center text-gray-700"
          >
            <Minus size={14} />
          </button>
          <span className="font-display font-bold text-[28px] w-12 text-center text-gray-900">
            {count}
          </span>
          <button
            type="button"
            onClick={() => setValue("count", Math.min(50, count + 1))}
            className="w-9 h-9 rounded-md border border-gray-300 hover:border-lime-500 flex items-center justify-center text-gray-700"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Controller
          control={control}
          name="isFleet"
          render={({ field }) => (
            <Switch.Root
              checked={field.value}
              onCheckedChange={field.onChange}
              className={cn(
                "w-10 h-6 rounded-full transition-colors relative",
                field.value ? "bg-lime-500" : "bg-gray-200"
              )}
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow translate-x-0.5 data-[state=checked]:translate-x-[18px] transition-transform" />
            </Switch.Root>
          )}
        />
        <span className="text-[14px] font-semibold text-gray-800">Filo başvurusu (5+)</span>
      </div>
      <AnimatePresence>
        {isFleet && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <FieldLabel>Firma Adı</FieldLabel>
            <input className={inputCls} {...register("company")} />
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <FieldLabel>Notlar (opsiyonel)</FieldLabel>
        <textarea rows={3} className={inputCls} {...register("notes")} />
      </div>
    </div>
  );
}

function Step4({ form }: { form: ReturnType<typeof useForm<BookingForm>> }) {
  const { watch, control, formState: { errors } } = form;
  const v = watch();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display font-bold text-[22px] text-gray-900">04 — Onay</h2>
      <div className="widget p-5 flex flex-col gap-2 bg-gray-50">
        <Row label="AD SOYAD" value={`${v.firstName} ${v.lastName}`} />
        <Row label="TELEFON" value={v.phone} />
        {v.email && <Row label="E-POSTA" value={v.email} />}
        <Row label="TARİH" value={v.date} />
        <Row label="SLOT" value={v.slot} />
        <Row label="PLATFORMLAR" value={v.platforms.join(", ")} />
        <Row label="ÇANTA" value={`${v.bagTypes.join(", ")} × ${v.count}`} />
        {v.isFleet && <Row label="FİRMA" value={v.company || "—"} />}
      </div>
      <Controller
        control={control}
        name="consent"
        render={({ field }) => (
          <label className="flex items-start gap-3 cursor-pointer">
            <Checkbox.Root
              checked={field.value as unknown as boolean}
              onCheckedChange={(c) => field.onChange(c === true)}
              className={cn(
                "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors mt-0.5",
                field.value ? "bg-lime-500 border-lime-600" : "bg-white border-gray-300"
              )}
            >
              <Checkbox.Indicator>
                <Check size={14} className="text-gray-900" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="text-[13px] text-gray-700 leading-relaxed">
              Bilgilerimin sistemde saklanmasını ve sözleşmesiz kira planı için iletişime geçilmesini onaylıyorum.
            </span>
          </label>
        )}
      />
      {errors.consent && <Err>{errors.consent.message}</Err>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3 py-1 border-b border-gray-200 last:border-b-0">
      <span className="precision-label !text-gray-500 w-32 shrink-0">{label}</span>
      <span className="text-[14px] text-gray-900 font-semibold flex-1">{value}</span>
    </div>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] text-red-600 font-mono">{children}</span>;
}

function BookingSuccess({ id, data }: { id: string; data: BookingForm }) {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 text-center">
      <span className="precision-label">RANDEVU OLUŞTURULDU</span>
      <h2 className="font-display font-bold text-section-xl text-lime-600 mt-3">
        Randevu Onaylandı
      </h2>
      <div className="inline-flex mt-6 px-5 py-2 rounded-full bg-lime-100 border border-lime-300 font-mono font-bold text-[20px] text-lime-700">
        {id}
      </div>
      <div className="widget p-7 mt-8 text-left flex flex-col gap-2">
        <Row label="AD" value={`${data.firstName} ${data.lastName}`} />
        <Row label="TARİH" value={data.date} />
        <Row label="SLOT" value={data.slot} />
        <Row label="ÇANTA" value={`${data.bagTypes.join(", ")} × ${data.count}`} />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button variant="primary" size="md" href={WORKSHOP.waLink}>
          <MessageCircle size={14} /> WhatsApp&apos;a Gönder
        </Button>
        <Button variant="secondary" size="md" href="/">
          <Calendar size={14} /> Panele Dön
        </Button>
      </div>
    </section>
  );
}
