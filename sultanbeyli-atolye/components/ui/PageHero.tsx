import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlobShape } from "./BlobShape";

export function PageHero({
  label,
  title,
  subtitle,
  breadcrumbs,
}: {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-cream-mid border-b border-terra-200/30">
      <BlobShape
        color="#F4CCBA"
        size={500}
        className="-right-32 -top-32"
        opacity={0.18}
      />
      <BlobShape
        color="#A8C9A8"
        size={300}
        className="-left-20 -bottom-20"
        opacity={0.18}
      />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 mb-6 font-body text-xs font-bold uppercase tracking-wider text-terra-500">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.href ? (
                  <Link href={b.href} className="hover:text-terra-600">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-ink-light">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight size={12} className="text-ink-faint" />
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6 bg-terra-300" />
          <span className="section-label">{label}</span>
        </div>
        <h1
          className="font-display text-display-xl text-ink leading-[1.05] max-w-3xl"
          style={{ animation: "warmRise 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 font-body text-body-lg text-ink-light max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
