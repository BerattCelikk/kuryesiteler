"use client";
import { useEffect, useState } from "react";
import { isWorkshopOpen, getTodayHours } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  className?: string;
}

export default function StatusIndicator({ size = "md", variant = "dark", className }: Props) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setOpen(isWorkshopOpen(d));
      setTime(d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const dotColor = open ? "bg-coral-500" : "bg-amber-500";
  const labelColor = variant === "light" ? "text-white" : open ? "text-coral-300" : "text-amber-400";
  const sizeText = size === "sm" ? "text-[10px]" : size === "lg" ? "text-sm" : "text-[11px]";

  return (
    <span className={cn("inline-flex items-center gap-2 font-mono uppercase tracking-widest", sizeText, className)}>
      <span className="relative inline-flex items-center justify-center">
        <span className={cn("rounded-full", dotColor, size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2")} />
        {open && (
          <span
            className={cn("absolute rounded-full bg-coral-500/60", size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2")}
            style={{ animation: "radarRing 2s ease-out infinite" }}
          />
        )}
      </span>
      <span className={cn("font-bold", labelColor)}>{open ? "AKTİF" : "KAPALI"}</span>
      <span className={cn(variant === "light" ? "text-white/70" : "text-text-muted")}>· {time}</span>
      {size !== "sm" && (
        <span className={cn(variant === "light" ? "text-white/50" : "text-text-muted", "hidden sm:inline")}>
          · {getTodayHours()}
        </span>
      )}
    </span>
  );
}
