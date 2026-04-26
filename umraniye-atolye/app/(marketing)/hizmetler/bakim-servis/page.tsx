import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import { WORKSHOP } from "@/lib/constants";
import { ServiceDetailLayout } from "@/components/pages/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Bakım & Servis",
  description: "Profesyonel çanta bakımı: fermuar kontrolü, iç astar temizliği, ısı yalıtımı testi.",
  alternates: { canonical: "/hizmetler/bakim-servis" },
};

export default function BakimServisPage() {
  const service = getServiceBySlug("bakim-servis");
  if (!service) notFound();
  return (
    <ServiceDetailLayout
      service={service}
      priceDisplay="Randevusuz"
      howItWorks={[
        { icon: "ClipboardCheck", title: "Kontrol", desc: "Fermuar, iç astar ve ısı yalıtımı incelenir." },
        { icon: "Sparkles", title: "Temizlik & Bakım", desc: "Derin temizlik ve koruma uygulanır." },
        { icon: "CheckCircle", title: "Teslim", desc: "20-30 dakikada çantanız yeniden hazır." },
      ]}
      requirements={[
        "Çantanız (aktif kira planı zorunlu değil)",
        "Kısa bekleme süresi (20-30 dakika)",
        "Proje numaranız (varsa)",
      ]}
      relatedFaq={WORKSHOP.faq.filter((f) => f.category === "Saat & Ulaşım").slice(0, 3)}
    />
  );
}
