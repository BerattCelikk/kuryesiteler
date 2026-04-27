import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";

export default function EditorialQuote() {
  return (
    <section className="bg-ivory-mid py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <EditorialRule color="gold" width="120px" />
        <InkReveal className="mt-8">
          <p className="font-display italic font-light text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.4] text-forest-600">
            Mahallenin gözde teslimat güzergahında, on yılın birikimini sisteme taşıyoruz.
          </p>
        </InkReveal>
        <EditorialRule color="gold" width="120px" className="mt-8" />
      </div>
    </section>
  );
}
