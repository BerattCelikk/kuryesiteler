import Link from "next/link";
import * as Icons from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, CheckCircle2, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import StatusIndicator from "@/components/ui/StatusIndicator";
import { WORKSHOP, type Service } from "@/lib/constants";

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = ((Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[service.icon] ?? Icons.Box) as React.ComponentType<{ className?: string; strokeWidth?: number }>;
  const others = WORKSHOP.services.filter((s) => s.slug !== service.slug);
  const stepsTrio = [
    { n: "01", t: "Atölyeye Gel", d: "Fevzi Çakmak Caddesi'ndeki konumumuza uğra." },
    { n: "02", t: "Sürece Başla", d: "Ekibimiz seni karşılar, sürece başlar." },
    { n: "03", t: "Hazır." , d: "İşin tamamlandığında SMS ve mail bildirimi alırsın." },
  ];
  const required = ["Kimlik kartı", "Motorsiklet plakası", "(Kurumsalsa) Şirket belgesi"];
  const serviceFAQ = [
    { q: `${service.navTitle} için randevu şart mı?`, a: "Şart değil ama önerilir. Walk-in mümkün, randevuyla bekleme yok." },
    { q: "Ne kadar sürer?", a: service.benefits.find((b) => /dk|dakika/i.test(b)) ?? "Genellikle 10-30 dakika içinde tamamlanır." },
    { q: "Ücret var mı?", a: service.badge === "Ücretsiz" ? "Hayır, bu hizmet ücretsizdir." : "Plan ve filo boyutuna göre değişir, atölyede birlikte hesaplıyoruz." },
  ];

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-12 pb-6">
        <div className="font-mono text-mono-label text-coral-400 mb-5">
          GOP → HİZMETLER → {service.navTitle.toUpperCase()}
        </div>
        <div className="panel p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
          <div className="w-20 h-20 rounded-2xl bg-coral-500/10 border border-coral-500/30 flex items-center justify-center shrink-0">
            <Icon className="w-10 h-10 text-coral-400" strokeWidth={1.4} />
          </div>
          <div>
            <Badge color={service.badgeColor as "coral" | "cyan" | "amber"}>{service.badge}</Badge>
            <h1 className="font-display font-extrabold text-section-xl text-text-bright mt-3">{service.pageTitle}</h1>
            <p className="font-body text-base md:text-lg text-text-secondary mt-3 max-w-2xl">{service.longDesc}</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
        <div className="space-y-12">
          {/* Nasıl İşler */}
          <div>
            <h2 className="font-display font-bold text-section-lg text-text-bright mb-6">Nasıl İşler?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {stepsTrio.map((s) => (
                <div key={s.n} className="panel p-5">
                  <span className="font-mono text-coral-400 text-[12px]">{s.n}</span>
                  <h3 className="font-body font-semibold text-text-bright mt-2 mb-1">{s.t}</h3>
                  <p className="font-body text-sm text-text-secondary">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ne Getirmelisin */}
          <div>
            <h2 className="font-display font-bold text-section-lg text-text-bright mb-6">Ne Getirmelisin?</h2>
            <ul className="panel p-6 space-y-3 border-l-2 border-l-coral-500/40">
              {required.map((r) => (
                <li key={r} className="flex items-center gap-3 font-body text-text-bright">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-500 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Avantajlar */}
          <div>
            <h2 className="font-display font-bold text-section-lg text-text-bright mb-6">Avantajlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((b) => (
                <TiltCard key={b} maxTilt={4}>
                  <div className="panel holo-card p-5 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral-400 shrink-0" />
                    <span className="font-body text-text-bright">{b}</span>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display font-bold text-section-lg text-text-bright mb-6">Bu Hizmete Özel Sorular</h2>
            <Accordion.Root type="single" collapsible className="panel divide-y divide-white/8">
              {serviceFAQ.map((q, i) => (
                <Accordion.Item key={i} value={`item-${i}`} className="px-5">
                  <Accordion.Trigger className="group w-full py-4 flex items-center justify-between gap-4 text-left">
                    <span className="font-body font-medium text-text-bright">{q.q}</span>
                    <ChevronDown className="w-4 h-4 text-coral-400 group-data-[state=open]:rotate-180 transition-transform" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden">
                    <div className="pb-4 font-body text-text-secondary leading-relaxed">{q.a}</div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start space-y-5">
          <TiltCard maxTilt={4}>
            <div className="panel holo-card p-6 border-l-2 border-l-coral-500">
              <Badge color={service.badgeColor as "coral" | "cyan" | "amber"}>{service.badge}</Badge>
              <h3 className="font-display font-bold text-xl text-text-bright mt-3">{service.navTitle}</h3>
              <p className="font-body text-sm text-text-secondary mt-2">{service.desc}</p>
              <div className="mt-4 pt-4 border-t border-white/8 space-y-3">
                <StatusIndicator size="sm" />
                <div className="flex items-start gap-2 text-[12px] font-body text-text-secondary">
                  <MapPin className="w-3.5 h-3.5 text-coral-400 shrink-0 mt-0.5" /> {WORKSHOP.address}
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <Button href="/randevu" variant="primary" fullWidth>
                  Randevu Al <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href={WORKSHOP.waLink} target="_blank" variant="ghost" fullWidth>
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
              </div>
            </div>
          </TiltCard>

          <div className="panel p-5">
            <div className="font-mono text-mono-label text-coral-400 mb-3">// DİĞER HİZMETLER</div>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/hizmetler/${o.slug}`} className="flex items-center justify-between font-body text-sm text-text-secondary hover:text-coral-300 transition-colors py-1.5">
                    {o.navTitle}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="cta-coral-gradient py-14">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-display font-bold text-2xl text-white">Hazırsan, atölyede görüşelim.</h3>
          <div className="flex gap-3">
            <Button href={WORKSHOP.waLink} target="_blank" variant="white" size="md">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </Button>
            <Button href="/randevu" variant="white" size="md">
              Randevu Al →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
