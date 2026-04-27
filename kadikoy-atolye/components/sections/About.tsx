import { WORKSHOP } from "@/lib/constants";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";
import PullQuote from "@/components/editorial/PullQuote";

export default function About() {
  return (
    <section className="bg-ivory py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        <span className="page-number hidden lg:block">No. 02 — Atölye</span>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-20 relative">
          <div>
            <div className="editorial-label">Hakkımızda</div>
            <EditorialRule color="gold" className="mt-3" />

            <InkReveal as="h2" className="mt-6">
              <span className="block font-display font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-ink">
                {WORKSHOP.copy.aboutTitle}
              </span>
            </InkReveal>

            <p className="mt-6 font-body text-[18px] leading-[1.85] text-text-secondary">
              {WORKSHOP.copy.aboutPara1}
            </p>
            <p className="mt-4 font-body text-[16px] leading-[1.75] text-text-muted">
              {WORKSHOP.copy.aboutPara2}
            </p>

            <PullQuote text={'"Kadıköy\'de her teslimat önemlidir — biz de bunu biliyoruz."'} />
          </div>

          <div className="relative min-h-[280px]">
            <span
              aria-hidden
              className="hidden lg:block absolute -top-4 -right-6 font-display font-light leading-none text-forest-500/[0.06] select-none pointer-events-none"
              style={{ fontSize: "20vw" }}
            >
              07
            </span>
            <div className="editorial-card relative px-7 py-7 max-w-sm">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">Kuruluş</div>
              <div className="mt-2 font-display text-[28px] font-medium text-ink">Kadıköy, 2022</div>
              <EditorialRule color="gold" width="48px" className="mt-3" />
              <div className="mt-3 font-mono text-[12px] text-text-muted">7 hizmet · 1 adres</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
