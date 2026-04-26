import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import { WORKSHOP } from "@/lib/constants";
import { ServiceDetailLayout } from "@/components/pages/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Çanta Değişim",
  description: "Hasarlı veya yıpranmış çantanızı aynı gün değiştirin. Projede kesinti yok.",
  alternates: { canonical: "/hizmetler/canta-degisim" },
};

export default function CantaDegisimPage() {
  const service = getServiceBySlug("canta-degisim");
  if (!service) notFound();
  return (
    <ServiceDetailLayout
      service={service}
      priceDisplay="Aynı gün"
      howItWorks={[
        { icon: "Package", title: "Çantanızı Getirin", desc: "Hasarlı veya yıpranmış çantanızı atölyeye getirin." },
        { icon: "Search", title: "Hasar Tespiti", desc: "Teknik ekip durumu 5 dakikada değerlendirir." },
        { icon: "RefreshCw", title: "Yeni Çanta Teslim", desc: "Aynı gün yeni çantanızla ayrılırsınız." },
      ]}
      requirements={[
        "Aktif kira planı (hasar değişimi için)",
        "Hasarlı çanta (tüm parçalarıyla)",
        "Proje numaranız veya telefon numaranız",
      ]}
      relatedFaq={WORKSHOP.faq.filter((f) => f.q.includes("değişim") || f.q.includes("Birden fazla")).slice(0, 3)}
    />
  );
}
