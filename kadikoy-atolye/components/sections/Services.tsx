import Link from "next/link";
import { WORKSHOP } from "@/lib/constants";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";
import ServiceCallout from "@/components/editorial/ServiceCallout";

export default function Services() {
  return (
    <section className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="editorial-label">Hizmetler</div>
        <EditorialRule color="gold" className="mt-3" />
        <InkReveal as="h2" className="mt-6">
          <span className="block font-display font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-ink">
            {WORKSHOP.copy.servicesTitle}
          </span>
        </InkReveal>

        <div className="mt-14 flex flex-col gap-0">
          {WORKSHOP.services.map((s, i) => (
            <div key={s.id} className="border-t border-parchment first:border-t-0 pt-10 pb-10">
              <ServiceCallout service={s} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/hizmetler/sisteme-dahil-olun"
            className="inline-flex items-center gap-2 font-body font-semibold text-forest-500 hover:text-forest-600 hover:gap-3 transition-all"
            data-cursor="hover"
          >
            Tümünü görüntüleyin <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
