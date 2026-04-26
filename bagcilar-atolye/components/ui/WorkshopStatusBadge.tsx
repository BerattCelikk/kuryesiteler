"use client";

import { useEffect, useState } from "react";
import { isWorkshopOpen } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "md";
  className?: string;
}

export function WorkshopStatusBadge({ size = "sm", className }: Props) {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string } | null>(null);

  useEffect(() => {
    const tick = () => setStatus(isWorkshopOpen());
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#1A1A1A]",
          size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-[12px]",
          className,
        )}
      >
        <span className="h-2 w-2 rounded-full bg-[#555]" />
        <span className="font-semibold tracking-wide text-[#A0A0A0]">—</span>
      </span>
    );
  }

  const dotColor = status.isOpen ? "bg-[#22C55E]" : "bg-[#EF4444]";
  const textColor = status.isOpen ? "text-[#22C55E]" : "text-[#EF4444]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#1A1A1A]",
        size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-[12px]",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            dotColor,
          )}
        />
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", dotColor)} />
      </span>
      <span className={cn("font-bold uppercase tracking-wider", textColor)}>
        {status.label}
      </span>
    </span>
  );
}
