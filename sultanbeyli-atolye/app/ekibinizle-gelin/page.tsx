"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Users, FileCheck, Tag, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { TextField, SelectField, TextareaField } from "@/components/ui/FormField";
import { B2BIllustration } from "@/components/illustrations";
import { b2bSchema, type B2BInput } from "@/lib/validations";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TIERS = [
  { id: "small", title: "5–10 Kişi", price: "%10 indirim", features: ["Toplu kayıt", "Tek fatura", "Telefonla destek"], highlight: false },
  { id: "mid", title: "11–20 Kişi", price: "%15 indirim", features: ["Filo raporu", "Öncelikli kabul", "Atanmış temsilci", "Kişisel ziyaret"], highlight: true },
  { id: "large", title: "20+ Kişi", price: "Özel fiyat", features: ["Tam servis paket", "Aylık raporlama", "Yerinde kayıt", "SLA"], highlight: false },
];

const STEPS = [
  { n: "01", title: "Bize Ulaşın", desc: "Form, telefon veya WhatsApp." },
  { n: "02", title: "Görüşelim", desc: "İhtiyaçlarınızı dinliyoruz." },
  { n: "03", title: "Teklif Hazırlayalım", desc: "Filo büyüklüğüne göre özel fiyat." },
  { n: "04", title: "Birlikte Başlayalım", desc: "Toplu kayıt ve aktivasyon." },
];

const BENEFITS = [
  { icon: Users, title: "Filonuzu Tanıyın", desc: "Aylık raporlarla kuryelerinizin durumunu izleyin." },
  { icon: FileCheck, title: "Tek Fatura", desc: "Şirketinize tek fatura, kolay muhasebe." },
  { icon: Tag, title: "İndirimli Fiyat", desc: "Filo büyüklüğüne göre %10–25 indirim." },
  { icon: ShieldCheck, title: "Öncelikli Servis", desc: "Hızlı kayıt, hızlı değişim, atanmış destek." },
];

export default function B2BPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<B2BInput>({ resolver: zodResolver(b2bSchema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Başvurunuz alındı, ekibimiz dönüş yapacak.");
    reset();
  };

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
          { label: "Ekibinizle Gelin" },
        ]}
        label="B2B"
        title="Ekibinizle Gelin."
        subtitle="Kargo firmaları ve kurye ağları için özel filo çanta yönetimi."
      />

      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
            <div className="lg:flex-1">
              <span className="section-label">Neden Toplu Kayıt?</span>
              <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
                Filonuz büyüse de süreç sade kalır.
              </h2>
              <p className="mt-4 font-body text-body-lg text-ink-light">
                B2B programımız 5+ kuryeli ekipler için özel olarak tasarlandı.
                Tek bir adresten yönetim, indirimli fiyat, atanmış temsilci.
              </p>
            </div>
            <div className="hidden lg:block icon-wrap !w-[200px] !h-[200px]">
              <B2BIllustration size={160} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {BENEFITS.map((b) => (
              <div key={b.title} className="warm-card !bg-cream-mid p-6">
                <span className="h-12 w-12 rounded-2xl bg-terra-100 border border-terra-200 flex items-center justify-center mb-3">
                  <b.icon size={20} className="text-terra-500" />
                </span>
                <h3 className="font-display text-xl text-ink mb-1">{b.title}</h3>
                <p className="font-body text-sm text-ink-light">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-mid py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Filo Boyutu</span>
            <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
              Ekip Büyüklüğünüze Göre
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIERS.map((t) => (
              <div
                key={t.id}
                className={cn(
                  "warm-card !bg-cream p-7 relative",
                  t.highlight && "!border-terra-500 !border-2",
                )}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terra-500 text-cream font-body text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1">
                    Önerilen
                  </span>
                )}
                <h3 className="font-display text-2xl text-ink mb-1">{t.title}</h3>
                <p className="font-mono text-mono-sm text-terra-500 mb-5">{t.price}</p>
                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-ink-mid">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Süreç</span>
            <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
              Nasıl Başvurulur?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {STEPS.map((s) => (
              <div key={s.n} className="warm-card !bg-cream-mid p-6 text-center">
                <span className="inline-block font-mono text-mono-sm bg-terra-100 text-terra-600 rounded-full px-3 py-1 mb-3">
                  {s.n}
                </span>
                <h3 className="font-display text-xl text-ink mb-1">{s.title}</h3>
                <p className="font-body text-sm text-ink-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-mid py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="section-label">Başvuru</span>
            <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
              Hadi Tanışalım
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-cream rounded-3xl border border-terra-200/40 p-7 shadow-[0_4px_24px_rgba(192,92,40,0.10)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                label="Ad Soyad"
                error={errors.name?.message}
                {...register("name")}
              />
              <TextField
                label="Şirket"
                error={errors.company?.message}
                {...register("company")}
              />
              <SelectField
                label="Filo Büyüklüğü"
                options={["1-4 (Bireysel)", "5-10", "11-20", "20+"]}
                error={errors.fleetSize?.message}
                {...register("fleetSize")}
              />
              <SelectField
                label="Platform"
                options={WORKSHOP.platforms}
                error={errors.platform?.message}
                {...register("platform")}
              />
              <TextField
                label="Telefon"
                type="tel"
                className="sm:col-span-2"
                error={errors.phone?.message}
                {...register("phone")}
              />
              <TextareaField
                label="Mesaj"
                placeholder="İhtiyacınızı kısaca anlatın"
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
              {isSubmitting ? "Gönderiliyor…" : "Başvuruyu Gönderin"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
