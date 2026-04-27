"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";

export default function FAQ() {
  return (
    <section id="faq" className="bg-ivory-mid py-24 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="editorial-label">Sıkça Sorulanlar</div>
        <EditorialRule color="gold" className="mt-3" />
        <InkReveal as="h2" className="mt-6">
          <span className="block font-display font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-ink">
            {WORKSHOP.copy.faqTitle}
          </span>
        </InkReveal>

        <Accordion.Root type="single" collapsible className="mt-12 divide-y divide-parchment border-y border-parchment">
          {WORKSHOP.faq.map((f, i) => (
            <Accordion.Item key={f.q} value={`item-${i}`} className="group">
              <Accordion.Header>
                <Accordion.Trigger
                  className="w-full text-left flex items-start justify-between gap-6 py-6 font-display text-[clamp(1.1rem,1.8vw,1.5rem)] font-medium text-ink transition-colors hover:text-forest-500"
                  data-cursor="hover"
                >
                  <span className="flex gap-4 items-start">
                    <span className="font-mono text-[12px] text-gold-500 mt-2">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f.q}</span>
                  </span>
                  <span className="mt-2 text-forest-500 group-data-[state=open]:hidden"><Plus className="w-5 h-5" strokeWidth={1.5} /></span>
                  <span className="mt-2 text-gold-500 hidden group-data-[state=open]:block"><Minus className="w-5 h-5" strokeWidth={1.5} /></span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[fadeIn_0.3s_ease] pb-6 pl-12 pr-12">
                <p className="font-body text-[16px] leading-[1.85] text-text-secondary">{f.a}</p>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-text-subtle">
                  {f.category}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
