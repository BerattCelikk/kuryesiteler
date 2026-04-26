import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types";

interface Props {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: Props) {
  return (
    <nav aria-label="breadcrumb" className={className}>
      <ol className="flex items-center flex-wrap gap-x-1.5 gap-y-1 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="inline-flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="text-text-muted hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-text-primary font-medium" : "text-text-muted"}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="w-3 h-3 text-text-subtle" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
