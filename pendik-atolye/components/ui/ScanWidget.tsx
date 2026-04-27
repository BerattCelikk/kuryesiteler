"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
}

export function ScanWidget({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scanning, setScanning] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const Tag = as as "div";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          setTimeout(() => {
            setScanning(true);
            setTimeout(() => setRevealed(true), 100);
            setTimeout(() => setScanning(false), 700);
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, triggered]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "scan-target transition-opacity duration-300",
        scanning && "scanning",
        revealed ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  );
}
