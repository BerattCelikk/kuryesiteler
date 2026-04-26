import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
import Logo from "@/components/ui/Logo";
import StatusIndicator from "@/components/ui/StatusIndicator";
import { WORKSHOP, OTHER_WORKSHOPS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-coral-500/15 grid-bg">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Logo size={36} />
            <div>
              <div className="font-display font-bold text-text-bright text-lg leading-none">KURYE PROJE</div>
              <div className="font-mono text-[10px] text-coral-400 uppercase tracking-widest mt-1">GOP ATÖLYESİ</div>
            </div>
          </div>
          <div className="mb-6">
            <StatusIndicator size="md" />
          </div>
          <div className="flex gap-3">
            <a href={`https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`} target="_blank" rel="noopener" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-coral-400 hover:bg-coral-500/10 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={WORKSHOP.waLink} target="_blank" rel="noopener" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-coral-400 hover:bg-coral-500/10 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
          <div className="font-mono text-[11px] text-text-muted mt-6">© 2024 Kurye Proje</div>
        </div>

        <div>
          <div className="font-mono text-mono-label text-coral-400 mb-4">// HİZMETLER</div>
          <ul className="space-y-2.5">
            {WORKSHOP.services.map((s) => (
              <li key={s.id}>
                <Link href={`/hizmetler/${s.slug}`} className="font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-mono-label text-coral-400 mb-4">// SAYFALAR</div>
          <ul className="space-y-2.5">
            <li><Link href="/" className="font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">Başlangıç</Link></li>
            <li><Link href="/nasil-calisir" className="font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">Nasıl Çalışır</Link></li>
            <li><Link href="/rotani-bul" className="font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">Rotanı Bul</Link></li>
            <li><Link href="/aklindaki-sorular" className="font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">Aklındaki Sorular</Link></li>
            <li><Link href="/randevu" className="font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">Randevu</Link></li>
            <li><Link href="/filonu-yonet" className="font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">Filonu Yönet</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-mono-label text-coral-400 mb-4">// İLETİŞİM</div>
          <p className="font-body text-sm text-text-secondary leading-relaxed mb-3">{WORKSHOP.address}</p>
          <p className="font-mono text-[12px] text-text-bright">{WORKSHOP.phone}</p>
          <p className="font-mono text-[12px] text-text-secondary mt-1">{WORKSHOP.hours.weekday.label}: {WORKSHOP.hours.weekday.open}–{WORKSHOP.hours.weekday.close}</p>
          <p className="font-mono text-[12px] text-text-secondary">{WORKSHOP.hours.weekend.label}: {WORKSHOP.hours.weekend.open}–{WORKSHOP.hours.weekend.close}</p>
          <a href={WORKSHOP.googleMapsUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 mt-4 font-mono text-[11px] text-coral-300 uppercase tracking-widest hover:text-coral-400 transition-colors">
            Rotayı Aç <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div>
          <div className="font-mono text-mono-label text-coral-400 mb-4">// DİĞER ATÖLYELER</div>
          <ul className="space-y-2.5">
            {OTHER_WORKSHOPS.map((w) => (
              <li key={w.name}>
                <a href={w.href} target="_blank" rel="noopener" className="group flex items-center gap-2 font-body text-sm text-text-secondary hover:text-coral-300 transition-colors">
                  <svg width="14" height="6" viewBox="0 0 14 6" className="opacity-50 group-hover:opacity-100"><path d="M0 3 L14 3" stroke="currentColor" strokeDasharray="2 1.5" /></svg>
                  {w.name}
                  <span className="font-mono text-[10px] text-text-muted uppercase">· {w.side}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-void border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between font-mono text-[11px] text-text-muted">
          <span>kurye-proje / gop-hub / v4.0</span>
          <span>7 atölye · 2 yaka · İstanbul</span>
        </div>
      </div>
    </footer>
  );
}
