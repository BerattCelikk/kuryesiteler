import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BarcodeDecoration } from "@/components/ui/BarcodeDecoration";
import { ScanWidget } from "@/components/ui/ScanWidget";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}
interface Props {
  label: string;
  title: string;
  desc?: string;
  crumbs?: Crumb[];
  variant?: "light" | "dark";
  children?: React.ReactNode;
}

export function PageHero({
  label,
  title,
  desc,
  crumbs = [],
  variant = "light",
  children,
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={cn(
        "border-b py-12 md:py-16 relative overflow-hidden",
        isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
      )}
    >
      {isDark && <div className="scan-sweep-overlay" aria-hidden />}
      <div className="max-w-7xl mx-auto px-6">
        {crumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-[11px] font-mono mb-4 flex-wrap">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link
                    href={c.href}
                    className={cn(
                      "transition-colors",
                      isDark
                        ? "text-gray-400 hover:text-lime-300"
                        : "text-gray-500 hover:text-lime-600"
                    )}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {c.label}
                  </span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight
                    size={11}
                    className={isDark ? "text-gray-600" : "text-gray-400"}
                  />
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="flex items-end justify-between gap-6 mb-3">
          <span
            className={cn("precision-label", isDark && "!text-lime-300")}
          >
            {label}
          </span>
          <BarcodeDecoration bars={12} />
        </div>

        <ScanWidget>
          <h1
            className={cn(
              "font-display font-bold text-section-xl",
              isDark ? "text-gray-50" : "text-gray-900"
            )}
          >
            {title}
          </h1>
        </ScanWidget>

        {desc && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-[17px] leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            {desc}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
