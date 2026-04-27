"use client";
import { useInkSpread } from "@/hooks/useInkSpread";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function InkReveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const { ref, revealed } = useInkSpread<HTMLDivElement>({ delay });
  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={cn(
        "ink-target transition-opacity duration-700",
        revealed ? "revealed opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </Component>
  );
}
