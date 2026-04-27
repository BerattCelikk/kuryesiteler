"use client";
import { useEffect, useState } from "react";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function StatusBadge({
  size = "md",
  showHours = false,
  className,
}: { size?: "sm" | "md"; showHours?: boolean; className?: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [hours, setHours] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      setOpen(isWorkshopOpen());
      setHours(getTodayHours());
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "status-pill",
        open ? "status-open" : "status-closed",
        size === "sm" && "text-[10px]",
        className
      )}
    >
      <span className="status-dot" />
      {open ? "Açık" : "Kapalı"}
      {showHours && hours && <span className="opacity-70">· {hours}</span>}
    </span>
  );
}
