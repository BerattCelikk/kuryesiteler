import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";
import Button from "@/components/ui/Button";

export default function ForestPull() {
  return (
    <section className="section-forest py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <InkReveal>
          <p className="font-display italic font-light text-ivory text-[clamp(2.5rem,5vw,5rem)] leading-[1.0] tracking-[0.01em]">
            Sistemde olmanın farkını ilk günden hissedeceksiniz.
          </p>
        </InkReveal>
        <EditorialRule color="gold" width="80px" className="mt-10 opacity-70" />
        <p className="mt-8 font-body text-ivory/70 text-[18px] leading-[1.85]">
          Randevu alın ya da doğrudan uğrayın.
        </p>
        <div className="mt-8">
          <Button href="/randevu" variant="dark" size="lg">Randevu Alın</Button>
        </div>
      </div>
    </section>
  );
}
