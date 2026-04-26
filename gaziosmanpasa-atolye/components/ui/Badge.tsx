import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  color?: "coral" | "cyan" | "amber" | "white";
  className?: string;
}

const colorClass: Record<NonNullable<Props["color"]>, string> = {
  coral: "border-coral-500/40 text-coral-300 bg-coral-500/8",
  cyan: "border-cyan-500/40 text-cyan-400 bg-cyan-500/8",
  amber: "border-amber-500/40 text-amber-400 bg-amber-500/8",
  white: "border-white/40 text-white bg-white/8",
};

export default function Badge({ children, color = "coral", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full border font-mono text-[10px] uppercase tracking-widest",
        colorClass[color],
        className
      )}
    >
      {children}
    </span>
  );
}
