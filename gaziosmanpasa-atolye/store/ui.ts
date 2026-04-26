"use client";
import { create } from "zustand";

type CursorVariant = "default" | "hover" | "text";

interface UIStore {
  currentSection: number;
  setSection: (n: number) => void;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
  commandOpen: boolean;
  setCommandOpen: (v: boolean) => void;
  cursorVariant: CursorVariant;
  setCursorVariant: (v: CursorVariant) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: (v: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  currentSection: 0,
  setSection: (n) => set({ currentSection: n }),
  hoveredCard: null,
  setHoveredCard: (id) => set({ hoveredCard: id }),
  commandOpen: false,
  setCommandOpen: (v) => set({ commandOpen: v }),
  cursorVariant: "default",
  setCursorVariant: (v) => set({ cursorVariant: v }),
  mobileNavOpen: false,
  setMobileNavOpen: (v) => set({ mobileNavOpen: v }),
}));
