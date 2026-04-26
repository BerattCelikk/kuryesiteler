import { cn } from "@/lib/utils";

interface Props {
  breadcrumb: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ breadcrumb, title, subtitle, className }: Props) {
  return (
    <section className={cn("relative bg-void grid-bg border-b border-white/5", className)}>
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="font-mono text-mono-label text-coral-400 mb-5">{breadcrumb}</div>
        <h1 className="font-display font-extrabold text-section-xl text-text-bright max-w-3xl">{title}</h1>
        {subtitle && <p className="font-body text-base md:text-lg text-text-secondary mt-5 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
