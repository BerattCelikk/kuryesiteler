"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { Network, Building2, FileSpreadsheet, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import PageHero from "@/components/layout/PageHero";
import TiltCard from "@/components/ui/TiltCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Input, Select, Textarea } from "@/components/ui/Input";
import RouteLineSVG from "@/components/ui/RouteLineSVG";
import { b2bSchema, type B2BInput } from "@/lib/validations";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tiers = [
  {
    id: "small",
    label: "5–10 Kurye",
    badge: "Başlangıç",
    color: "coral" as const,
    features: ["Toplu kayıt indirimi", "Tek temas noktası", "Aylık raporlama", "Öncelikli randevu"],
    note: "Küçük filolarınız için esnek başlangıç paketi.",
  },
  {
    id: "mid",
    label: "11–20 Kurye",
    badge: "Tercih Edilen",
    color: "cyan" as const,
    features: ["Özel filo fiyatlandırması", "Ayda 1 saha ziyareti", "Aylık fatura kesimi", "WhatsApp özel hattı"],
    note: "En popüler tercih. Orta boy filolar için optimize.",
  },
  {
    id: "large",
    label: "20+ Kurye",
    badge: "Enterprise",
    color: "amber" as const,
    features: ["Stratejik anlaşma", "Yerinde teknisyen", "Haftalık rapor", "API entegrasyonu (talep üzerine)"],
    note: "Büyük operasyonlar için tam entegre çözüm.",
  },
];

const features = [
  { icon: Building2, title: "Kurumsal Yapı", desc: "Fatura, sözleşme ve raporlamayı şirket yapına göre kuruyoruz." },
  { icon: FileSpreadsheet, title: "Tek Tıkla Rapor", desc: "Aylık aktivite raporu, eksik kuryenin durumu, hasar takibi tek panelde." },
  { icon: Zap, title: "Öncelikli Servis", desc: "Filondan biri arızalandığında atölyede sıraya girmiyor; doğrudan teknisyene." },
];

const processSteps = [
  { n: "01", t: "Başvuru" },
  { n: "02", t: "Saha Görüşmesi" },
  { n: "03", t: "Teklif" },
  { n: "04", t: "Aktivasyon" },
];

export default function Page() {
  const [activeTier, setActiveTier] = useState("mid");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<B2BInput>({ resolver: zodResolver(b2bSchema) });

  const onSubmit = async (data: B2BInput) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "b2b" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Hata");
      toast.success(`Başvuru alındı: ${json.id}. 24 saat içinde dönüş yapacağız.`);
      reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Hata");
    }
  };

  return (
    <>
      <PageHero
        breadcrumb="GOP → EKİPLE GEL"
        title={
          <>
            <span className="text-cyan-400">Ekiple mi</span> Geliyorsunuz?
          </>
        }
        subtitle="5+ kurye için filo çanta yönetimi. Toplu kayıt, özel fiyat, fatura kesimi ve öncelikli servis."
      />

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="font-mono text-mono-label text-coral-400 mb-3">// NEDEN GOP?</div>
        <h2 className="font-display font-bold text-section-lg text-text-bright mb-8">Neden GOP Atölyesi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <TiltCard maxTilt={5}>
                <div className="panel holo-card p-7 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-cyan-400" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-bright mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="font-mono text-mono-label text-coral-400 mb-3">// SEÇENEKLER</div>
          <h2 className="font-display font-bold text-section-lg text-text-bright mb-8">Filo Boyutuna Göre</h2>
          <Tabs.Root value={activeTier} onValueChange={setActiveTier}>
            <Tabs.List className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
              {tiers.map((t) => (
                <Tabs.Trigger
                  key={t.id}
                  value={t.id}
                  className={cn(
                    "panel p-4 md:p-5 text-left transition-all data-[state=active]:border-coral-500/60 data-[state=active]:bg-coral-500/5"
                  )}
                >
                  <div className="font-mono text-[11px] text-coral-300 uppercase tracking-widest mb-1">{t.badge}</div>
                  <div className="font-display font-bold text-text-bright text-base md:text-lg">{t.label}</div>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {tiers.map((t) => (
              <Tabs.Content key={t.id} value={t.id} className="outline-none">
                <TiltCard maxTilt={3}>
                  <div className="panel holo-card p-7 md:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                    <div>
                      <Badge color={t.color}>{t.badge}</Badge>
                      <h3 className="font-display font-bold text-section-lg text-text-bright mt-3 mb-3">{t.label}</h3>
                      <p className="font-body text-text-secondary mb-5 max-w-xl">{t.note}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {t.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 font-body text-text-bright">
                            <CheckCircle2 className="w-4 h-4 text-coral-400" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button href="#b2b-form" variant="primary" size="lg">
                      Başvur <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </TiltCard>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="font-mono text-mono-label text-coral-400 mb-3">// SÜREÇ</div>
        <h2 className="font-display font-bold text-section-lg text-text-bright mb-10">Başvuru Süreci</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          {processSteps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="panel p-5 text-center">
                <div className="font-mono text-[12px] text-coral-300 mb-3">{s.n}</div>
                <div className="font-body font-semibold text-text-bright">{s.t}</div>
              </div>
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2">
                  <RouteLineSVG variant="horizontal" delay={i * 0.1} duration={0.7} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="b2b-form" className="bg-surface py-16">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <div className="font-mono text-mono-label text-coral-400 mb-3">// BAŞVURU</div>
          <h2 className="font-display font-bold text-section-lg text-text-bright mb-8 flex items-center gap-3">
            <Network className="w-6 h-6 text-cyan-400" /> Filo Başvurusu
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="panel p-7 md:p-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Şirket Adı" {...register("company")} error={errors.company?.message} placeholder="Şirket Ünvanı" />
              <Input label="Yetkili Adı" {...register("contactName")} error={errors.contactName?.message} placeholder="Ad Soyad" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Telefon" {...register("phone")} error={errors.phone?.message} placeholder="5XX XXX XX XX" />
              <Input label="E-posta" type="email" {...register("email")} error={errors.email?.message} placeholder="info@sirket.com" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Filo Boyutu" {...register("fleetSize")} error={errors.fleetSize?.message} options={["5-10", "11-20", "20+"]} placeholder="Seç" />
              <Select label="Platform" {...register("platform")} error={errors.platform?.message} options={[...WORKSHOP.platforms]} placeholder="Seç" />
            </div>
            <Textarea label="Mesaj" {...register("message")} error={errors.message?.message} placeholder="Eklemek istediğin detaylar..." />
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
              {isSubmitting ? "Gönderiliyor..." : "Başvuruyu Gönder"} <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
