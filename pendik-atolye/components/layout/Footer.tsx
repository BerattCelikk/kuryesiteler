import Link from "next/link";
import { Phone, MapPin, Camera, MessageCircle, ExternalLink } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { WORKSHOP, OTHER_WORKSHOPS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <div>
              <div className="font-semibold text-[15px] text-gray-900">Kurye Proje</div>
              <div className="text-[12px] text-lime-600 font-mono uppercase tracking-wider">
                Pendik Atölyesi
              </div>
            </div>
          </div>
          <p className="text-[13px] text-gray-500 leading-relaxed">{WORKSHOP.tagline}</p>
          <StatusBadge size="sm" />
          <div className="flex items-center gap-3 mt-1">
            <a href={WORKSHOP.waLink} className="text-gray-500 hover:text-lime-600 transition-colors" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href={`https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`} className="text-gray-500 hover:text-lime-600 transition-colors" aria-label="Instagram">
              <Camera size={18} />
            </a>
            <a href={`tel:${WORKSHOP.phoneRaw}`} className="text-gray-500 hover:text-lime-600 transition-colors" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
          <div className="text-[11px] text-gray-400 font-mono mt-2">© 2024</div>
        </div>

        <FCol title="Hizmetler">
          {WORKSHOP.services.map((s) => (
            <FLink key={s.id} href={`/hizmetler/${s.slug}`}>
              {s.navTitle}
            </FLink>
          ))}
        </FCol>

        <FCol title="Sayfalar">
          <FLink href="/">Panel</FLink>
          <FLink href="/hizmetler">Hizmetler</FLink>
          <FLink href="/surec">Süreç</FLink>
          <FLink href="/konum">Konum</FLink>
          <FLink href="/sss">SSS</FLink>
          <FLink href="/randevu">Randevu</FLink>
          <FLink href="/iletisim">İletişim</FLink>
        </FCol>

        <FCol title="İletişim">
          <p className="text-[13px] text-gray-600 leading-relaxed flex items-start gap-2">
            <MapPin size={14} className="text-lime-600 mt-0.5 shrink-0" />
            {WORKSHOP.address}
          </p>
          <p className="text-[13px] text-gray-600 flex items-center gap-2">
            <Phone size={14} className="text-lime-600 shrink-0" />
            {WORKSHOP.phone}
          </p>
          <p className="text-[12px] text-gray-500 font-mono">
            {WORKSHOP.hours.weekday.label}: {WORKSHOP.hours.weekday.open}-{WORKSHOP.hours.weekday.close}
          </p>
          <p className="text-[12px] text-gray-500 font-mono">
            {WORKSHOP.hours.weekend.label}: {WORKSHOP.hours.weekend.open}-{WORKSHOP.hours.weekend.close}
          </p>
          <a
            href={WORKSHOP.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-lime-600 hover:text-lime-700 mt-2 inline-flex items-center gap-1"
          >
            Haritada Aç <ExternalLink size={12} />
          </a>
        </FCol>

        <FCol title="Diğer Atölyeler">
          {OTHER_WORKSHOPS.map((w) => (
            <a
              key={w.name}
              href={w.href}
              className="text-[13px] text-gray-600 hover:text-lime-600 flex items-center gap-2 group"
            >
              <span className="w-1 h-1 rounded-full bg-lime-500" />
              <span>{w.name}</span>
              <span className="text-[10px] text-gray-400 font-mono uppercase ml-auto">
                {w.side === "Avrupa" ? "AVR" : "AND"}
              </span>
            </a>
          ))}
        </FCol>
      </div>

      <div className="bg-gray-100 border-t border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-2 text-[11px] font-mono text-gray-500">
          <span>kurye-proje / pendik-b2b / v6.0</span>
          <span>7 atölye • 2 yaka • İstanbul</span>
        </div>
      </div>
    </footer>
  );
}

function FCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="precision-label mb-1">{title}</div>
      {children}
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[13px] text-gray-600 hover:text-lime-600 transition-colors">
      {children}
    </Link>
  );
}
