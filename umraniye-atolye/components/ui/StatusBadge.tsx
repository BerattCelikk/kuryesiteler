"use client";
import { useEffect, useState } from "react";
import { isWorkshopOpen } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusBadge({ size = "md", className }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setOpen(isWorkshopOpen());
    update();
    const i = setInterval(update, 60000);
    return () => clearInterval(i);
  }, []);

  const dim =
    size === "sm"
      ? "h-6 px-2.5 text-[10px] gap-1.5"
      : size === "lg"
      ? "h-9 px-4 text-sm gap-2"
      : "h-7 px-3 text-[11px] gap-2";
  const dot =
    size === "sm" ? "w-1.5 h-1.5" : size === "lg" ? "w-2.5 h-2.5" : "w-2 h-2";

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full bg-bg-muted text-text-muted font-mono font-bold uppercase tracking-wider",
          dim,
          className
        )}
      >
        <span className={cn("rounded-full bg-text-subtle", dot)} />
        ···
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono font-bold uppercase tracking-wider",
        open ? "bg-success-bg text-[#047857]" : "bg-danger-bg text-[#B91C1C]",
        dim,
        className
      )}
    >
      <span className="relative inline-flex">
        <span
          className={cn(
            "rounded-full",
            dot,
            open ? "bg-success" : "bg-danger"
          )}
        />
        {open && (
          <span
            className={cn(
              "absolute inset-0 rounded-full bg-success animate-pulse-soft",
              dot
            )}
          />
        )}
      </span>
      {open ? "AÇIK" : "KAPALI"}
    </span>
  );
}

export default StatusBadge;
