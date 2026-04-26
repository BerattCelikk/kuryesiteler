import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A0A0A0]",
        className,
      )}
    >
      <span className="h-[1px] w-8 bg-[#FF6B00]" />
      {children}
    </div>
  );
}
