"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/constants";

export function ServiceListItem({
  service,
  index,
  variant = "light",
}: {
  service: Service;
  index: number;
  variant?: "light" | "dark";
}) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>>)[
    service.icon
  ];

  const textCls = variant === "dark" ? "text-gray-50" : "text-gray-900";
  const subCls = variant === "dark" ? "text-gray-400" : "text-gray-500";
  const idxCls = variant === "dark" ? "text-lime-300" : "text-lime-600";
  const borderCls = variant === "dark" ? "border-gray-800" : "border-gray-200";

  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className={cn(
        "progress-bar-item group flex items-center gap-3 py-3 border-b last:border-b-0 px-1",
        borderCls
      )}
    >
      <span className={cn("font-mono text-[11px] font-medium w-7 shrink-0", idxCls)}>
        {String(index + 1).padStart(2, "0")}
      </span>
      {Icon && (
        <Icon
          size={18}
          strokeWidth={1.8}
          className={variant === "dark" ? "text-lime-300 shrink-0" : "text-lime-600 shrink-0"}
        />
      )}
      <span className={cn("flex-1 text-[15px] font-semibold", textCls)}>
        {service.navTitle}
      </span>
      <span
        className={cn(
          "text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded",
          service.badgeColor === "lime"
            ? "bg-lime-100 text-lime-700"
            : service.badgeColor === "dark"
            ? "bg-gray-900 text-lime-300"
            : "bg-gray-150 text-gray-600"
        )}
      >
        {service.badge}
      </span>
      <ArrowRight
        size={16}
        className={cn(
          "transition-transform group-hover:translate-x-0.5",
          subCls
        )}
      />
    </Link>
  );
}
