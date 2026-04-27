import EditorialRule from "./EditorialRule";
import InkReveal from "./InkReveal";
import { WORKSHOP } from "@/lib/constants";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  page,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  page?: string;
}) {
  return (
    <header className="bg-ivory pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[var(--border-light)] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative">
        {page && <span className="page-number hidden lg:block">{page}</span>}
        <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-forest-500">
          {eyebrow}
        </div>
        <EditorialRule color="gold" width="32px" className="mt-3" />
        <InkReveal as="h1" className="mt-6">
          <span className="block font-display font-light text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[0.01em] text-ink">
            {title}
          </span>
        </InkReveal>
        {subtitle && (
          <p className="mt-6 max-w-2xl font-display italic font-light text-forest-500 text-[clamp(1.1rem,1.6vw,1.4rem)] leading-[1.5]">
            {subtitle}
          </p>
        )}
        <div className="mt-8 font-mono text-[11px] tracking-[0.12em] uppercase text-text-subtle">
          Kurye Proje · {WORKSHOP.edition}
        </div>
      </div>
    </header>
  );
}
