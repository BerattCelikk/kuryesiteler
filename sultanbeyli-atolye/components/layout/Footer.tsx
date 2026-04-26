import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { WORKSHOP, OTHER_WORKSHOPS } from "@/lib/constants";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cream-mid border-t border-terra-200/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg width="32" height="32" viewBox="0 0 36 36" aria-hidden>
                <circle cx="18" cy="18" r="16" fill="#FAE8DF" stroke="#C05C28" strokeWidth="1.5" />
                <path
                  d="M12 14 H24 A1.5 1.5 0 0 1 25.5 15.5 V25 A1.5 1.5 0 0 1 24 26.5 H12 A1.5 1.5 0 0 1 10.5 25 V15.5 A1.5 1.5 0 0 1 12 14 Z"
                  fill="#C05C28"
                />
              </svg>
              <div>
                <div className="font-body font-bold text-ink">Kurye Proje</div>
                <div className="font-body font-semibold text-terra-500 text-sm">
                  {WORKSHOP.name}
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-ink-light leading-relaxed mb-4 max-w-xs">
              {WORKSHOP.tagline}. {WORKSHOP.shortDesc}
            </p>
            <StatusBadge size="md" showHours />
            <div className="flex items-center gap-3 mt-5">
              <a
                href={`https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terra-500 hover:text-terra-600"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${WORKSHOP.email}`}
                className="text-terra-500 hover:text-terra-600"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${WORKSHOP.phoneRaw}`}
                className="text-terra-500 hover:text-terra-600"
                aria-label="Telefon"
              >
                <Phone size={20} />
              </a>
            </div>
            <p className="mt-6 font-body text-xs text-ink-faint">© 2026 Kurye Proje</p>
          </div>

          <div>
            <div className="section-label mb-4">Hizmetler</div>
            <ul className="space-y-2.5">
              {WORKSHOP.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={
                      s.id === "b2b"
                        ? "/ekibinizle-gelin"
                        : `/hizmetler/${s.slug}`
                    }
                    className="font-body text-[15px] text-ink-mid hover:text-terra-500 transition-colors"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-label mb-4">Bağlantılar</div>
            <ul className="space-y-2.5 mb-6">
              {[
                ["Ana Sayfa", "/"],
                ["Nasıl Çalışır", "/nasil-calisir"],
                ["Atölye", "/atolye"],
                ["Sıkça Sorulanlar", "/sikca-sorulanlar"],
                ["İletişim", "/iletisim"],
                ["Randevu", "/randevu"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-[15px] text-ink-mid hover:text-terra-500 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="section-label mb-3">İletişim</div>
            <div className="space-y-2 font-body text-sm text-ink-light">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-terra-500 shrink-0" />
                <span>{WORKSHOP.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-terra-500" />
                <a href={`tel:${WORKSHOP.phoneRaw}`} className="hover:text-terra-500">
                  {WORKSHOP.phone}
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="section-label mb-4">Diğer Atölyeler</div>
            <ul className="space-y-2.5">
              {OTHER_WORKSHOPS.map((w) => (
                <li key={w.name}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-[15px] text-ink-mid hover:text-terra-500 transition-colors group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-terra-300 group-hover:bg-terra-500" />
                    {w.name}
                    <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-ink-faint border border-terra-200 rounded-full px-2 py-0.5">
                      {w.side}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-stone border-t border-terra-200/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-mono-sm text-ink-faint">
          <span>kurye-proje / sultanbeyli / v5.0</span>
          <span>7 atölye • 2 yaka • İstanbul</span>
        </div>
      </div>
    </footer>
  );
}
