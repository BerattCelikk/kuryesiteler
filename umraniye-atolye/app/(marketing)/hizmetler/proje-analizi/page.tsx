import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import { WORKSHOP } from "@/lib/constants";
import { ServiceDetailLayout } from "@/components/pages/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Proje Analizi",
  description: "Ücretsiz kazanç analizi ve plan karşılaştırması. Size en uygun kira planını birlikte seçelim.",
  alternates: { canonical: "/hizmetler/proje-analizi" },
};

export default function ProjeAnaliziPage() {
  const service = getServiceBySlug("proje-analizi");
  if (!service) notFound();
  return (
    <ServiceDetailLayout
      service={service}
      priceDisplay="Ücretsiz"
      howItWorks={[
        { icon: "Calendar", title: "Randevu Alın", desc: "15 dakikalık yüz yüze görüşme için uygun zamanı seçin." },
        { icon: "BarChart3", title: "Analiz", desc: "Kazanç ve plan karşılaştırması birlikte yapılır." },
        { icon: "Target", title: "Öneri", desc: "Size en uygun plan ve optimizasyon önerileri." },
      ]}
      requirements={[
        "Kurye platformunuz bilgisi",
        "Ortalama haftalık çalışma saati",
        "Hedeflediğiniz aylık kazanç (varsa)",
      ]}
      relatedFaq={WORKSHOP.faq.filter((f) => f.category === "Fiyat").slice(0, 3)}
    />
  );
}
