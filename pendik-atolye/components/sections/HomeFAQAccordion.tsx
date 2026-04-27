"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";

export function HomeFAQAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="flex flex-col">
      {WORKSHOP.faq.slice(0, 3).map((f, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-gray-200 last:border-b-0"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group w-full flex items-center justify-between py-3 text-left progress-bar-item">
              <span className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-lime-600 w-6">
                  {String(i + 1).padStart(2, "0")} /
                </span>
                <span className="text-[14px] font-semibold text-gray-800">
                  {f.q}
                </span>
              </span>
              <ChevronDown
                size={16}
                className="text-gray-400 transition-transform group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.2s_ease-out] data-[state=closed]:animate-[accordion-up_0.2s_ease-out]">
            <div className="pb-3 pl-9 pr-4 text-[13px] text-gray-600 leading-relaxed">
              {f.a}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
