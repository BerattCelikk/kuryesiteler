"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FAQItem as FAQItemType } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  item: FAQItemType;
  index: number;
  value: string;
}

export function FAQItem({ item, index, value }: Props) {
  return (
    <Accordion.Item
      value={value}
      className={cn(
        "card-base overflow-hidden data-[state=open]:border-blue-200 data-[state=open]:shadow-card-md"
      )}
    >
      <Accordion.Header>
        <Accordion.Trigger className="w-full flex items-center gap-4 p-5 md:p-6 text-left group">
          <span className="font-mono font-bold text-sm text-blue-500 flex-shrink-0 w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 font-display font-semibold text-text-primary text-base md:text-lg">
            {item.q}
          </span>
          <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fade-up_.3s_ease-out] data-[state=closed]:animate-[fade-in_.2s_reverse]">
        <div className="px-5 md:px-6 pb-6 pl-[4.75rem] border-l-2 border-l-blue-100 ml-5 md:ml-6 text-text-secondary leading-relaxed">
          {item.a}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default FAQItem;
