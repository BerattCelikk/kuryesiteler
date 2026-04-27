import { WORKSHOP } from "@/lib/constants";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-ivory-deep py-24 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="editorial-label">Birlikte</div>
        <EditorialRule color="gold" width="48px" className="mt-3" />
        <InkReveal as="h2" className="mt-6">
          <span className="block font-display font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-ink">
            {WORKSHOP.copy.ctaTitle}
          </span>
        </InkReveal>
        <p className="mt-6 font-body text-[18px] leading-[1.85] text-text-secondary max-w-lg">
          {WORKSHOP.copy.ctaSub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/randevu" variant="primary" size="lg">Randevu Alın</Button>
          <Button href={WORKSHOP.waLink} external variant="secondary" size="lg">Mesaj Gönderin</Button>
        </div>
      </div>
    </section>
  );
}
