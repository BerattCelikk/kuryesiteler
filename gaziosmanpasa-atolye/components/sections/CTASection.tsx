"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import StatusIndicator from "@/components/ui/StatusIndicator";
import { FadeIn } from "@/components/ui/FadeIn";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { WORKSHOP } from "@/lib/constants";

export default function CTASection() {
  const [bookingId, setBookingId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "homepage-cta" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Hata");
      setBookingId(json.id);
      reset();
      // Deferred until success path so canvas-confetti's ~5KB doesn't sit in the home-page initial bundle.
      const { default: confetti } = await import("canvas-confetti");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E8435A", "#22D3EE", "#FBBF24"],
      });
      toast.success(`Yolda: ${json.id}`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Hata");
    }
  };

  return (
    <section className="snap-section cta-coral-gradient flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence baseFrequency='0.9' /></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>")` }} />

      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <FadeIn>
            <div className="font-mono text-mono-label text-white/70 mb-4">// HAREKET</div>
            <h2 className="font-display font-extrabold text-section-xl text-white leading-tight mb-5">
              {WORKSHOP.copy.ctaTitle}
            </h2>
            <p className="font-body text-base text-white/80 mb-7 max-w-md">{WORKSHOP.copy.ctaSub}</p>
            <StatusIndicator size="md" variant="light" />
            <ul className="mt-7 space-y-2.5">
              {["Aynı gün aktivasyon", "Sözleşmesiz, esnek plan", "WhatsApp destek 7/24"].map((b) => (
                <li key={b} className="flex items-center gap-2 text-white/95 font-body">
                  <CheckCircle2 className="w-4 h-4 text-white" /> {b}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn
          className="bg-void/95 border border-coral-500/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
        >
          {bookingId ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coral-500/15 border border-coral-500/40 mb-5">
                <CheckCircle2 className="w-8 h-8 text-coral-400" />
              </div>
              <h3 className="font-display font-bold text-2xl text-text-bright mb-2">Yolda. Beklerken hazırlan.</h3>
              <p className="font-body text-text-secondary mb-5">Randevu numaranız:</p>
              <div className="font-mono font-bold text-3xl text-coral-glow mb-6">{bookingId}</div>
              <Button onClick={() => setBookingId(null)} variant="ghost">
                Yeni Randevu
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="font-mono text-mono-label text-coral-400 mb-2">// HIZLI BAŞVURU</div>
              <Input label="Ad Soyad" {...register("name")} error={errors.name?.message} placeholder="İsmini yaz" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Telefon" {...register("phone")} error={errors.phone?.message} placeholder="5XX XXX XX XX" />
                <Select label="Platform" {...register("platform")} error={errors.platform?.message} options={[...WORKSHOP.platforms]} placeholder="Seç" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="date" label="Tercih Tarihi" {...register("date")} error={errors.date?.message} />
                <Select label="Saat Dilimi" {...register("timeSlot")} error={errors.timeSlot?.message} options={[...WORKSHOP.timeSlots]} placeholder="Seç" />
              </div>
              <Textarea label="Mesaj (opsiyonel)" {...register("message")} error={errors.message?.message} placeholder="Eklemek istediğin bir şey?" />
              <Button type="submit" variant="white" fullWidth disabled={isSubmitting}>
                {isSubmitting ? "Gönderiliyor..." : "Rotayı Başlat"} <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
