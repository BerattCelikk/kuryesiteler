"use client";
import { useUIStore } from "@/store/ui";
import { SECTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function SectionDotNav({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const current = useUIStore((s) => s.currentSection);

  const scrollTo = (i: number) => {
    const c = containerRef.current;
    if (!c) return;
    const sections = c.querySelectorAll<HTMLElement>(".snap-section");
    sections[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 items-end">
      {SECTIONS.map((s, i) => {
        const active = i === current;
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            className="group flex items-center gap-3"
            aria-label={s.label}
          >
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-widest transition-all duration-300",
                active ? "text-coral-300 opacity-100" : "text-text-muted opacity-0 group-hover:opacity-100"
              )}
            >
              {s.label}
            </span>
            <span
              className={cn(
                "block rounded-full border transition-all duration-300",
                active
                  ? "w-2.5 h-2.5 bg-coral-500 border-coral-500 shadow-[0_0_8px_rgba(232,67,90,0.6)]"
                  : "w-1.5 h-1.5 border-text-muted group-hover:border-coral-300"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
