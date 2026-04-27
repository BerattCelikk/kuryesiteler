"use client";
import { useState, useMemo } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Search, Phone, MessageCircle, MapPin } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q.trim()) return WORKSHOP.faq;
    const s = q.toLowerCase();
    return WORKSHOP.faq.filter(
      (f) => f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s)
    );
  }, [q]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof WORKSHOP.faq> = {};
    for (const f of filtered) {
      if (!map[f.category]) map[f.category] = [];
      map[f.category].push(f);
    }
    return map;
  }, [filtered]);

  return (
    <>
      <PageHero
        label="SSS · 8 SORU"
        title="Sık Sorulan Sorular."
        desc="Cevap aradığınız bir konu mu var? Hemen aşağıdan arayın."
        crumbs={[{ label: "Panel", href: "/" }, { label: "SSS" }]}
      />
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-3 md:items-center mb-8">
          <div className="flex items-center gap-2 flex-1 bg-white border border-gray-300 rounded-md px-3 focus-within:border-lime-500 focus-within:shadow-[0_0_0_3px_rgba(108,192,36,0.15)] transition-all">
            <Search size={16} className="text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="// SORU ARA..."
              className="flex-1 py-2.5 bg-transparent text-[14px] font-mono placeholder-gray-400 focus:outline-none"
            />
          </div>
          <span className="font-mono text-[12px] text-gray-500 shrink-0">
            {filtered.length} soru
          </span>
        </div>

        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} className="mb-8">
            <div className="precision-label mb-3">{cat}</div>
            <Accordion.Root type="multiple" className="flex flex-col">
              {items.map((f, i) => {
                const idx = WORKSHOP.faq.indexOf(f);
                return (
                  <Accordion.Item
                    key={idx}
                    value={`item-${idx}`}
                    className={cn(
                      "border border-gray-200 rounded-md mb-2 overflow-hidden",
                      "data-[state=open]:border-lime-500 data-[state=open]:bg-[rgba(108,192,36,0.04)]"
                    )}
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left">
                        <span className="font-mono text-[12px] text-lime-600 shrink-0">
                          {String(idx + 1).padStart(2, "0")} /
                        </span>
                        <span className="flex-1 text-[15px] font-semibold text-gray-800">
                          {f.q}
                        </span>
                        <ChevronDown
                          size={16}
                          className="text-gray-400 transition-transform group-data-[state=open]:rotate-180"
                        />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.2s_ease-out] data-[state=closed]:animate-[accordion-up_0.2s_ease-out]">
                      <div className="px-4 pb-4 pt-1 pl-12 text-[14px] text-gray-600 leading-relaxed border-t border-gray-100">
                        {f.a}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
          </div>
        ))}

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <a href={`tel:${WORKSHOP.phoneRaw}`} className="widget p-5 flex flex-col items-start gap-2">
            <Phone size={22} className="text-lime-600" />
            <div className="font-display font-bold text-[18px] text-gray-900">Telefon</div>
            <div className="text-[13px] text-gray-600 font-mono">{WORKSHOP.phone}</div>
          </a>
          <a href={WORKSHOP.waLink} className="widget p-5 flex flex-col items-start gap-2">
            <MessageCircle size={22} className="text-lime-600" />
            <div className="font-display font-bold text-[18px] text-gray-900">WhatsApp</div>
            <div className="text-[13px] text-gray-600 font-mono">{WORKSHOP.whatsapp}</div>
          </a>
          <a href={WORKSHOP.googleMapsUrl} className="widget p-5 flex flex-col items-start gap-2">
            <MapPin size={22} className="text-lime-600" />
            <div className="font-display font-bold text-[18px] text-gray-900">Walk-in</div>
            <div className="text-[13px] text-gray-600">{WORKSHOP.address}</div>
          </a>
        </div>
        <div className="mt-8 text-center">
          <Button variant="primary" size="lg" href="/randevu">Randevu Al</Button>
        </div>
      </section>
    </>
  );
}
