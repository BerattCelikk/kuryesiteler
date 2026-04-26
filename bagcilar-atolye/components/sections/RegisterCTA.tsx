"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { WORKSHOP } from "@/lib/constants";
import { todayIsoDate } from "@/lib/utils";

export function RegisterCTA() {
  const [success, setSuccess] = useState<{ id: string; date: string; timeSlot: string } | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.name.split(" ")[0] || data.name,
          lastName: data.name.split(" ").slice(1).join(" ") || "-",
          phone: data.phone,
          date: data.date,
          timeSlot: data.timeSlot,
          platforms: ["Diğer"],
          bagCount: "1",
          notes: data.message,
          consent: true,
          email: "",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        toast.error(json.error || "Bir hata oluştu");
        return;
      }
      setSuccess({ id: json.bookingId, date: data.date, timeSlot: data.timeSlot });
      reset();
    } catch {
      toast.error("Bağlantı hatası");
    }
  };

  return (
    <section
      className="relative border-t"
      style={{
        borderColor: "rgba(255,107,0,0.2)",
        background:
          "#0A0A0A radial-gradient(ellipse at top, rgba(255,107,0,0.14), transparent 60%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#FF6B00]">
            Bugün Gel, Bugün Başla
          </div>
          <h2 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            Araç projesine katılmak için beklemenize gerek yok.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#A0A0A0]">
            Randevu al veya direkt atölyemize uğra — walk-in memnuniyetle karşılanır.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-[#22C55E]/30 bg-[#22C55E]/5 p-8 text-center"
              >
                <CheckCircle2 size={48} className="mx-auto text-[#22C55E]" />
                <h3 className="mt-4 text-2xl font-black text-white">
                  Randevunuz Alındı!
                </h3>
                <div className="mt-2 font-mono text-2xl font-bold text-[#FF6B00]">
                  {success.id}
                </div>
                <p className="mt-3 text-[14px] text-[#A0A0A0]">
                  {success.date} · {success.timeSlot}
                </p>
                <p className="mt-2 text-[13px] text-[#A0A0A0]">Sizi bekliyoruz.</p>
                <button
                  onClick={() => setSuccess(null)}
                  className="mt-5 text-[13px] font-semibold text-[#FF6B00] underline"
                >
                  Yeni Randevu Al
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 md:p-8"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field label="Ad Soyad" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="Adınız Soyadınız"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Telefon" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      placeholder="05XXXXXXXXX"
                      inputMode="numeric"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Tarih" error={errors.date?.message}>
                    <input
                      type="date"
                      min={todayIsoDate()}
                      {...register("date")}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Saat Dilimi" error={errors.timeSlot?.message}>
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
                  <div className="md:col-span-2">
                    <Field label="Mesajınız (opsiyonel)" error={errors.message?.message}>
                      <textarea
                        {...register("message")}
                        placeholder="Eklemek istediğiniz bir not..."
                        rows={3}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-6 py-4 text-[15px] font-bold uppercase tracking-wider text-black transition-all hover:bg-[#FF8C00] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Randevu Oluştur <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 text-[15px] text-white placeholder:text-[#555] outline-none transition focus:border-[#FF6B00] focus:ring-[3px] focus:ring-[#FF6B00]/15";

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
      <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-[#A0A0A0]">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-[12px] text-[#EF4444]">{error}</span>}
    </label>
  );
}
