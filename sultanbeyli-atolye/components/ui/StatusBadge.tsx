"use client";
import { useEffect, useState } from "react";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function StatusBadge({
  size = "md",
  showHours = false,
  className,
}: {
  size?: "sm" | "md" | "lg";
  showHours?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setOpen(isWorkshopOpen());
    update();
    const id = window.setInterval(update, 60000);
    return () => window.clearInterval(id);
  }, []);

  const text = !mounted ? "Yükleniyor" : open ? "Açık" : "Kapalı";

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
    lg: "text-sm px-4 py-1.5",
  };

  return (
    <span
      className={cn(
        "status-pill",
        open ? "status-open" : "status-closed",
        sizes[size],
        className,
      )}
      suppressHydrationWarning
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          open ? "bg-sage-500 animate-pulse" : "bg-terra-500",
        )}
      />
      {text}
      {showHours && mounted && (
        <span className="text-ink-light/70 ml-1">· {getTodayHours()}</span>
      )}
    </span>
  );
}
