import Link from "next/link";
import { AtSign, Phone, Mail, MessageCircle } from "lucide-react";
import { WORKSHOP, OTHER_WORKSHOPS } from "@/lib/constants";
import StatusBadge from "@/components/ui/StatusBadge";
import EditorialRule from "@/components/editorial/EditorialRule";
import MarqueeStrip from "@/components/editorial/MarqueeStrip";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative">
      <MarqueeStrip />

      <div className="bg-ivory-mid border-t border-[var(--border-light)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <div>
                <div className="font-display text-[20px] font-medium text-ink leading-tight">Kurye Proje</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-forest-500">
                  Kadıköy Atölyesi
                </div>
              </div>
            </div>
            <p className="mt-5 font-body italic text-[14px] text-text-muted max-w-sm leading-[1.7]">
              {WORKSHOP.shortDesc}
            </p>
            <div className="mt-5"><StatusBadge /></div>
            <div className="mt-5 flex items-center gap-4 text-forest-500">
              <a href={WORKSHOP.waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-cursor="hover" className="hover:text-forest-600">
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href={`tel:${WORKSHOP.phoneRaw}`} aria-label="Telefon" data-cursor="hover" className="hover:text-forest-600">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href={`mailto:${WORKSHOP.email}`} aria-label="E-posta" data-cursor="hover" className="hover:text-forest-600">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href={`https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-cursor="hover" className="hover:text-forest-600">
                <AtSign className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
            <div className="mt-6 font-mono text-[11px] text-text-subtle">© {new Date().getFullYear()} Kurye Proje</div>
          </div>

          <div className="lg:col-span-2">
            <div className="editorial-label mb-3">Hizmetler</div>
            <EditorialRule color="gold" width="32px" />
            <ul className="mt-4 space-y-2.5">
              {WORKSHOP.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="font-body text-[14px] text-text-secondary hover:text-forest-500"
                    data-cursor="hover"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="editorial-label mb-3">Sayfalar</div>
            <EditorialRule color="gold" width="32px" />
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/", label: WORKSHOP.nav.home },
                { href: "/nasil-calisir", label: WORKSHOP.nav.howto },
                { href: "/atolye", label: WORKSHOP.nav.workshop },
                { href: "/merak-ettikleriniz", label: WORKSHOP.nav.faq },
                { href: "/iletisim", label: WORKSHOP.nav.contact },
                { href: "/randevu", label: WORKSHOP.nav.book },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-[14px] text-text-secondary hover:text-forest-500" data-cursor="hover">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="editorial-label mb-3">İletişim</div>
            <EditorialRule color="gold" width="32px" />
            <div className="mt-4 space-y-2.5 font-body text-[14px] text-text-secondary leading-[1.7]">
              <div>{WORKSHOP.address}</div>
              <a href={`tel:${WORKSHOP.phoneRaw}`} className="block hover:text-forest-500" data-cursor="hover">
                {WORKSHOP.phone}
              </a>
              <a href={WORKSHOP.waLink} target="_blank" rel="noopener noreferrer" className="block hover:text-forest-500" data-cursor="hover">
                WhatsApp: {WORKSHOP.whatsapp}
              </a>
              <div className="font-mono text-[12px] text-text-muted">
                Hafta içi {WORKSHOP.hours.weekday.open}–{WORKSHOP.hours.weekday.close}
                <br />
                Hafta sonu {WORKSHOP.hours.weekend.open}–{WORKSHOP.hours.weekend.close}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="editorial-label mb-3">Diğer Atölyeler</div>
            <EditorialRule color="gold" width="32px" />
            <ul className="mt-4 space-y-2">
              {OTHER_WORKSHOPS.map((w) => (
                <li key={w.name} className="font-body text-[14px] text-text-muted">
                  <a href={w.href} target="_blank" rel="noopener noreferrer" className="hover:text-forest-500 inline-flex gap-2" data-cursor="hover">
                    <span className="text-gold-400">—</span>
                    <span>{w.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-parchment py-4 border-t border-[var(--border-light)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] text-text-subtle">
            <span>kurye-proje / kadıköy-showcase / no.07</span>
            <span>7 atölye · 2 yaka · İstanbul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
