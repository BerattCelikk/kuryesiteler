import type { Metadata } from "next";
import { Briefcase, FileText, Receipt, BarChart3 } from "lucide-react";
import PageHeader from "@/components/editorial/PageHeader";
import EditorialRule from "@/components/editorial/EditorialRule";
import PullQuote from "@/components/editorial/PullQuote";
import B2BForm from "@/components/sections/B2BForm";

export const metadata: Metadata = {
  title: "Kurumsal İş Birliği",
  description: "Beş ve üzeri kurye için kurumsal filo çanta yönetimi.",
};

const PERKS = [
  { icon: Briefcase, title: "Toplu Kayıt İndirimi", desc: "Filolu firmalar için özel oran seçenekleri." },
  { icon: Receipt, title: "Fatura & Muhasebe", desc: "Resmi fatura kesimi, aylık özet faturalandırma." },
  { icon: FileText, title: "Sözleşmesiz Esneklik", desc: "İhtiyaca göre büyüt, daralt; cezai madde yok." },
  { icon: BarChart3, title: "Aylık Filo Raporu", desc: "Kullanım, bakım ve değişim raporları kurumunuza ulaşır." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Kurumsal · B2B"
        title="Kurumsal İş Birliği"
        subtitle="Kadıköy ve çevresinde faaliyet gösteren kurye firmaları için özel program."
        page="No. 08"
      />

      <section className="bg-ivory py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="editorial-label">Program Faydaları</div>
          <EditorialRule color="gold" className="mt-3" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PERKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="editorial-card px-7 py-7">
                <Icon className="w-5 h-5 text-forest-400" strokeWidth={1.5} />
                <div className="mt-4 font-display text-[22px] font-medium text-ink">{title}</div>
                <p className="mt-2 font-body text-[14px] leading-[1.7] text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
          <PullQuote text={'"Filonuzun ihtiyaçlarına göre kurgulanan, sözleşmesiz bir iş birliği modeli."'} />
        </div>
      </section>

      <section className="bg-ivory-mid py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="editorial-card px-7 py-8 md:px-10 md:py-10">
            <div className="editorial-label">Başvuru</div>
            <EditorialRule color="gold" width="40px" className="mt-3" />
            <h2 className="mt-5 font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-medium text-ink">
              Birlikte Kurgulayalım
            </h2>
            <p className="mt-3 font-body text-[15px] text-text-muted leading-[1.7]">
              Aşağıdaki formu doldurmanız yeterli. Ekibimiz iki iş günü içinde sizinle iletişime geçecektir.
            </p>
            <div className="mt-8">
              <B2BForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
