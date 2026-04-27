import { Phone, MessageCircle, Camera, MapPin } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/layout/PageHero";
import { ContactFormLight } from "@/components/sections/ContactFormLight";

export const metadata = { title: "İletişim" };

const METHODS = [
  { icon: Phone, label: "Telefon", value: WORKSHOP.phone, href: `tel:${WORKSHOP.phoneRaw}`, sub: "Atölyeye direkt hat" },
  { icon: MessageCircle, label: "WhatsApp", value: WORKSHOP.whatsapp, href: WORKSHOP.waLink, sub: "Anında yanıt" },
  { icon: Camera, label: "Instagram", value: WORKSHOP.instagram, href: `https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`, sub: "Atölyeden görüntüler" },
  { icon: MapPin, label: "Walk-in", value: WORKSHOP.address, href: WORKSHOP.googleMapsUrl, sub: "Randevusuz gel" },
];

export default function Page() {
  return (
    <>
      <PageHero
        label="İLETİŞİM"
        title="İletişim."
        desc="Telefon, WhatsApp veya direkt walk-in. Kanal sizin seçiminiz."
        crumbs={[{ label: "Panel", href: "/" }, { label: "İletişim" }]}
      />
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {METHODS.map(({ icon: Icon, label, value, href, sub }) => (
            <a key={label} href={href} className="widget p-6 flex flex-col gap-3 group">
              <div className="flex items-center justify-between">
                <Icon size={24} className="text-lime-600" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  {label}
                </span>
              </div>
              <div className="font-display font-bold text-[20px] text-gray-900">
                {value}
              </div>
              <div className="text-[12px] text-gray-500">{sub}</div>
            </a>
          ))}
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <ContactFormLight />
        </div>
      </section>
    </>
  );
}
