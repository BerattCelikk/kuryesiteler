import { SectionHeader } from "@/components/ui/SectionHeader";
import { WarmAccordion } from "@/components/ui/WarmAccordion";
import { Button } from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";

export function FAQSection() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Sorular"
          title={WORKSHOP.copy.faqTitle}
          subtitle="Hızlı cevaplar — daha fazlasını sormak istersen kapımız açık."
          align="center"
        />
        <WarmAccordion items={WORKSHOP.faq} grouped />

        <div className="mt-12 bg-cream-mid border border-terra-200/40 rounded-3xl p-8 text-center">
          <h3 className="font-display text-2xl text-ink mb-3">
            Başka sorunuz var mı?
          </h3>
          <p className="font-body text-ink-light mb-5 max-w-md mx-auto">
            Cevaplayamadığımız hiç olmadı. Bir mesaj atın, hemen dönüş yapalım.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="whatsapp" href={WORKSHOP.waLink} external>
              WhatsApp&apos;tan Yazın
            </Button>
            <Button variant="secondary" href="/randevu">
              Randevu Alın
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
