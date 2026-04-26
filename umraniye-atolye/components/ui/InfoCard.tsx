"use client";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  accent?: "blue" | "teal" | "none";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  className?: string;
}

const padMap = { sm: "p-4", md: "p-6", lg: "p-8" };
const accentMap = {
  blue: "border-l-[3px] border-l-blue-600",
  teal: "border-l-[3px] border-l-teal-500",
  none: "",
};

export function InfoCard({
  children,
  accent = "none",
  hover = true,
  padding = "md",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "card-base",
        hover && "card-hover",
        padMap[padding],
        accentMap[accent],
        className
      )}
    >
      {children}
    </div>
  );
}

export default InfoCard;
