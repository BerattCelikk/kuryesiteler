"use client";
import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string): boolean {
  const subscribe = (onChange: () => void) => {
    const m = window.matchMedia(query);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  };
  const getSnapshot = () => window.matchMedia(query).matches;
  // Server has no matchMedia — return false so SSR markup is deterministic; client hydrates to real value.
  const getServerSnapshot = () => false;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
