"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface SidebarLink {
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: string;
}

interface Props {
  links: SidebarLink[];
  heading?: string;
}

export function Sidebar({ links, heading }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeLink = links.find((l) => l.href === pathname) ?? links[0];

  return (
    <>
      {/* Mobile dropdown */}
      <div className="lg:hidden mb-6">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between px-4 h-11 border border-border-light rounded-[12px] bg-white text-text-primary"
        >
          <span className="font-medium text-sm">{activeLink?.label}</span>
          <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
        </button>
        {open && (
          <div className="mt-2 border border-border-light rounded-[12px] bg-white shadow-card overflow-hidden">
            {links.map((l) => {
              const active = l.href === pathname;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm border-b border-border-light last:border-b-0",
                    active ? "text-blue-700 bg-blue-50 font-medium" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {l.icon}
                  <span>{l.label}</span>
                  {l.badge && <span className="pill pill-blue ml-auto">{l.badge}</span>}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          {heading && (
            <h4 className="section-label mb-4">{heading}</h4>
          )}
          <nav className="flex flex-col gap-1">
            {links.map((l) => {
              const active = l.href === pathname;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "group flex items-center gap-2 px-3 py-2 rounded-[10px] text-sm transition-colors border-l-[3px]",
                    active
                      ? "bg-blue-50 text-blue-700 border-blue-600 font-semibold"
                      : "text-text-secondary border-transparent hover:text-text-primary hover:bg-bg-soft"
                  )}
                >
                  {l.icon && (
                    <span className={cn(active ? "text-blue-600" : "text-text-muted group-hover:text-text-primary")}>
                      {l.icon}
                    </span>
                  )}
                  <span>{l.label}</span>
                  {l.badge && <span className="pill pill-blue ml-auto">{l.badge}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
