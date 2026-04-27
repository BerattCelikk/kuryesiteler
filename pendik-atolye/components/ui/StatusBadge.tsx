"use client";
import { useEffect, useState } from "react";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusBadge({ size = "sm", className }: Props) {
  const [open, setOpen] = useState(false);
  const [hours, setHours] = useState(getTodayHours());

  useEffect(() => {
    const tick = () => {
      setOpen(isWorkshopOpen());
      setHours(getTodayHours());
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  const sizeCls =
    size === "lg" ? "text-[13px] px-3 py-1.5" : size === "md" ? "text-[12px] px-2.5 py-1" : "text-[11px] px-2.5 py-1";

  return (
    <span
      className={cn(
        "status-badge",
        open ? "status-open" : "status-closed",
        sizeCls,
        className
      )}
    >
      {open ? `AÇIK · ${hours.close}` : `KAPALI · ${hours.open}`}
    </span>
  );
}
