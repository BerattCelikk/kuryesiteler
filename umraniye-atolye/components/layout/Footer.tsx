import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Camera as Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { WORKSHOP, OTHER_WORKSHOPS } from "@/lib/constants";
import { Logo } from "./Logo";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getTodayHours } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-bg-soft border-t border-border-light mt-12">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1 Brand (wider) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Logo size={30} />
              <span className="font-display font-bold text-text-primary">Kurye Proje</span>
            </Link>
            <div className="text-sm text-text-secondary mb-1 font-medium">
              {WORKSHOP.name}
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm mb-5">
              {WORKSHOP.shortDesc}
            </p>
            <StatusBadge size="md" />
            <div className="flex items-center gap-3 mt-5">
              <a
                href={`https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-blue-600 hover:border-blue-200 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WORKSHOP.waLink}
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-teal-500 hover:border-teal-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="text-xs text-text-subtle mt-5">© 2024 Kurye Proje</div>
          </div>

          {/* Col 2 Hizmetler */}
          <div className="lg:col-span-2">
            <h4 className="section-label mb-4">HİZMETLER</h4>
            <ul className="space-y-2.5 text-sm">
              {WORKSHOP.services
                .filter((s) => s.slug)
                .map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="text-text-secondary hover:text-blue-600 transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              <li className="pt-1">
                <Link
                  href="/hizmetler/b2b"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  B2B Başvurusu <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 Sayfalar */}
          <div className="lg:col-span-2">
            <h4 className="section-label mb-4">SAYFALAR</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-text-secondary hover:text-blue-600">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/atolye" className="text-text-secondary hover:text-blue-600">
                  Atölye
                </Link>
              </li>
              <li>
                <Link href="/nasil-calisir" className="text-text-secondary hover:text-blue-600">
                  Nasıl Çalışır
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-text-secondary hover:text-blue-600">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-text-secondary hover:text-blue-600">
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/randevu"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 İletişim */}
          <div className="lg:col-span-2">
            <h4 className="section-label mb-4">İLETİŞİM</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">{WORKSHOP.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a
                  href={`tel:${WORKSHOP.phoneRaw}`}
                  className="text-text-secondary hover:text-blue-600"
                >
                  {WORKSHOP.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a
                  href={`mailto:${WORKSHOP.email}`}
                  className="text-text-secondary hover:text-blue-600 break-all"
                >
                  {WORKSHOP.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-text-secondary">Bugün {getTodayHours()}</span>
              </li>
              <li className="pt-1">
                <a
                  href={WORKSHOP.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  Rota Al <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5 Diger Atolyeler */}
          <div className="lg:col-span-2">
            <h4 className="section-label mb-4">DİĞER ATÖLYELER</h4>
            <ul className="space-y-2 text-sm">
              {OTHER_WORKSHOPS.map((w) => (
                <li key={w.name}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-text-secondary hover:text-blue-600 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-text-subtle group-hover:bg-blue-600" />
                    <span className="flex-1">{w.name}</span>
                    <span className="text-[10px] font-mono text-text-subtle uppercase">
                      {w.side.slice(0, 3)}
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-bg-muted border-t border-border-light py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-2">
          <span className="font-mono text-[11px] text-text-subtle">
            kurye-proje / ümraniye-hub
          </span>
          <span className="text-[11px] text-text-subtle">
            7 atölye · 2 yaka · İstanbul
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
