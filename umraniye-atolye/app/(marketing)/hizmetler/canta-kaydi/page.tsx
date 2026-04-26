import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import { WORKSHOP } from "@/lib/constants";
import { ServiceDetailLayout } from "@/components/pages/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Çanta Kaydı",
  description: "Ümraniye atölyemizde çantanızı 10 dakikada kaydedin. Kimlik ve plaka yeterli, ücretsiz.",
  alternates: { canonical: "/hizmetler/canta-kaydi" },
};

export default function CantaKaydiPage() {
  const service = getServiceBySlug("canta-kaydi");
  if (!service) notFound();

  return (
    <ServiceDetailLayout
      service={service}
      priceDisplay="Ücretsiz"
      howItWorks={[
        { icon: "MapPin", title: "Atölyeye Gelin", desc: "Alemdağ Caddesi'ndeki atölyemize uğrayın." },
        { icon: "ScanBarcode", title: "Çantayı Teslim Edin", desc: "Ekibimiz inceler ve barkodlar." },
        { icon: "Zap", title: "Aktive Olun", desc: "SMS ile proje numaranız gelir, kira planınız başlar." },
      ]}
      requirements={[
        "Nüfus cüzdanı veya ehliyet",
        "Motorsiklet plaka bilgisi",
        "Aktif cep telefonu numarası",
        "(Kargo kuryesi iseniz) şirket yetki belgesi",
      ]}
      relatedFaq={WORKSHOP.faq.filter((f) => f.category === "Belgeler" || f.category === "Genel").slice(0, 3)}
    />
  );
}
