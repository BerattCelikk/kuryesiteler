"use client";
import { useRef } from "react";
import SectionDotNav from "./SectionDotNav";
import { useScrollSection } from "@/hooks/useScrollSection";

export default function ScrollSectionTracker({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollSection(ref);
  return (
    <>
      {/* SectionDotNav needs the same ref to read scroll position, so it's owned here, not in the page. */}
      <SectionDotNav containerRef={ref} />
      <div ref={ref} className="snap-container">
        {children}
      </div>
    </>
  );
}
