import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { WORKSHOP, OTHER_WORKSHOPS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { WorkshopStatusBadge } from "@/components/ui/WorkshopStatusBadge";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={36} />
            <div className="leading-none">
              <div className="text-[15px] font-black text-white">Bağcılar Atölyesi</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
                Kurye Araç Proje
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-[#A0A0A0]">
            Bağcılar E-5 üzerinde kurye araç projesi atölyesi. Motosiklet sepeti, topcase
            ve arka çanta ruhsata işletme. TSE onaylı mühendis.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={`https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2A] text-white/80 transition hover:border-[#FF6B00] hover:text-[#FF6B00]"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2A] text-white/80 transition hover:border-[#FF6B00] hover:text-[#FF6B00]"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
          <div className="mt-5">
            <WorkshopStatusBadge size="sm" />
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            Sayfalar
          </h4>
          <ul className="mt-5 space-y-3 text-[13px]">
            {[
              { label: "Nasıl Çalışır", href: "/nasil-calisir" },
              { label: "Hizmetler", href: "/#hizmetler" },
              { label: "Randevu Al", href: "/randevu" },
              { label: "SSS", href: "/#sss" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[#A0A0A0] transition hover:text-[#FF6B00]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            İletişim
          </h4>
          <ul className="mt-5 space-y-3 text-[13px] text-[#A0A0A0]">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#FF6B00]" />
              <span>{WORKSHOP.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-[#FF6B00]" />
              <a href={`tel:${WORKSHOP.phoneRaw}`} className="hover:text-white">
                {WORKSHOP.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={14} className="mt-0.5 shrink-0 text-[#FF6B00]" />
              <span>
                Her gün {WORKSHOP.hours.weekday.open} – {WORKSHOP.hours.weekday.close}
              </span>
            </li>
            <li>
              <a
                href={WORKSHOP.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline"
              >
                Rota Al <ArrowUpRight size={12} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            Diğer Atölyeler
          </h4>
          <ul className="mt-5 space-y-2.5 text-[13px]">
            {OTHER_WORKSHOPS.map((w) => (
              <li key={w.slug}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-[#A0A0A0] transition hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="transition group-hover:text-[#FF6B00]">→</span>
                    {w.name}
                  </span>
                  <span className="rounded-full border border-[#2A2A2A] px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#555]">
                    {w.side}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#2A2A2A]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] text-[#555] md:flex-row">
          <div>© {new Date().getFullYear()} Kurye Proje. Tüm hakları saklıdır.</div>
          <div className="flex gap-5">
            <Link href="/gizlilik" className="hover:text-white">Gizlilik</Link>
            <Link href="/kvkk" className="hover:text-white">KVKK</Link>
          </div>
          <div>Türkiye genelinde 7 atölye</div>
        </div>
      </div>
    </footer>
  );
}
