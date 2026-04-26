import { cn } from "@/lib/utils";

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "max-w-3xl mb-12",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-terra-300" />
          <span className="section-label">{label}</span>
          <span className="h-px w-6 bg-terra-300" />
        </div>
      )}
      <h2 className="font-display text-display-xl text-ink leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body text-body-lg text-ink-light">
          {subtitle}
        </p>
      )}
    </header>
  );
}
