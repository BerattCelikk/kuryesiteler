import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import PageHeader from "@/components/editorial/PageHeader";
import EditorialRule from "@/components/editorial/EditorialRule";
import ContactForm from "@/components/sections/ContactForm";
import Button from "@/components/ui/Button";
import MapClient from "@/components/ui/MapClient";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Kadıköy atölyemize ulaşın: telefon, WhatsApp, e-posta ve adres.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="İletişim · Kadıköy"
        title="İletişim"
        subtitle="Ne zaman uğramak isterseniz kapımız açık. Önceden randevu alanlarımıza önceliği veriyoruz."
        page="No. 06"
      />

      <section className="bg-ivory py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="space-y-8">
            <div>
              <div className="editorial-label">Doğrudan</div>
              <EditorialRule color="gold" width="40px" className="mt-3" />
              <ul className="mt-6 space-y-4 font-body text-[15px] text-text-secondary">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 text-forest-500" strokeWidth={1.5} />
                  <a href={`tel:${WORKSHOP.phoneRaw}`} className="hover:text-forest-500" data-cursor="hover">{WORKSHOP.phone}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 mt-1 text-forest-500" strokeWidth={1.5} />
                  <a href={WORKSHOP.waLink} target="_blank" rel="noopener noreferrer" className="hover:text-forest-500" data-cursor="hover">WhatsApp · {WORKSHOP.whatsapp}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 text-forest-500" strokeWidth={1.5} />
                  <a href={`mailto:${WORKSHOP.email}`} className="hover:text-forest-500" data-cursor="hover">{WORKSHOP.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-forest-500" strokeWidth={1.5} />
                  <span>{WORKSHOP.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-forest-500" strokeWidth={1.5} />
                  <span>
                    Hafta içi {WORKSHOP.hours.weekday.open}–{WORKSHOP.hours.weekday.close}
                    <br />Hafta sonu {WORKSHOP.hours.weekend.open}–{WORKSHOP.hours.weekend.close}
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={WORKSHOP.waLink} external variant="primary" size="md">Mesaj Gönderin</Button>
                <Button href={WORKSHOP.googleMapsUrl} external variant="ghost" size="md">Yol Tarifi Alın</Button>
              </div>
            </div>

            <MapClient height={320} />
          </div>

          <div className="editorial-card px-7 py-8 md:px-10 md:py-10">
            <div className="editorial-label">Yazılı İletişim</div>
            <EditorialRule color="gold" width="40px" className="mt-3" />
            <h2 className="mt-5 font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-medium text-ink">
              Bize Birkaç Satır Yazın
            </h2>
            <p className="mt-3 font-body text-[15px] text-text-muted leading-[1.7]">
              Görüşme talepleriniz, danışmanlık randevuları ve genel sorular için aşağıdaki formu kullanabilirsiniz.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
