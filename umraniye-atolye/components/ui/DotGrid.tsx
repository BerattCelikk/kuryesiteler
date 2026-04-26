import { cn } from "@/lib/utils";

export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 pointer-events-none dot-pattern-bg opacity-40",
        className
      )}
    />
  );
}

export default DotGrid;
