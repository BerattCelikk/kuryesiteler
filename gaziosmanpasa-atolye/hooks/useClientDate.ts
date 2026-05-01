"use client";
import { useEffect, useState } from "react";

export function useClientDate(formatter: (now: Date) => string): string | null {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    // Run once on mount: server has no clock the client agrees with, so we defer formatting until hydration.
    setValue(formatter(new Date()));
    // formatter is intentionally not a dep — callers pass inline arrows; we don't want to re-fire on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return value;
}
