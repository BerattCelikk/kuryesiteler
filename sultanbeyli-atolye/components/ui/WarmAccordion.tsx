"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WarmAccordion({
  items,
  grouped = false,
  className,
}: {
  items: FAQ[];
  grouped?: boolean;
  className?: string;
}) {
  let lastCategory = "";

  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("w-full", className)}
    >
      {items.map((it, i) => {
        const showHeader = grouped && it.category !== lastCategory;
        lastCategory = it.category;
        return (
          <div key={i}>
            {showHeader && (
              <div className="flex items-center gap-3 mt-8 mb-3 first:mt-0">
                <span className="h-px w-4 bg-terra-300" />
                <span className="section-label">{it.category}</span>
              </div>
            )}
            <Accordion.Item
              value={`item-${i}`}
              className="border-b border-terra-200/60 group data-[state=open]:bg-cream-mid/40 transition-colors"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-start justify-between gap-4 py-5 text-left group/trigger">
                  <span className="flex items-start gap-3 flex-1">
                    {grouped && (
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terra-300 shrink-0" />
                    )}
                    <span className="font-body font-semibold text-ink text-base md:text-[17px] leading-snug">
                      {it.q}
                    </span>
                  </span>
                  <ChevronDown
                    className="h-5 w-5 text-terra-500 transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordionDown_0.3s_ease-out] data-[state=closed]:animate-[accordionUp_0.25s_ease-out]">
                <div className="flex gap-4 pb-5 pr-8">
                  <span className="terra-line shrink-0 self-stretch" />
                  <p className="font-body text-[15px] text-ink-mid leading-relaxed pt-1">
                    {it.a}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </div>
        );
      })}
      <style jsx>{`
        @keyframes accordionDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes accordionUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
      `}</style>
    </Accordion.Root>
  );
}
