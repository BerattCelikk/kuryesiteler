"use client";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Search, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import StatusIndicator from "@/components/ui/StatusIndicator";
import TiltCard from "@/components/ui/TiltCard";
import { WORKSHOP } from "@/lib/constants";

export default function Page() {
  const [q, setQ] = useState("");
  const filtered = WORKSHOP.faq.filter(
    (f) => f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <PageHero breadcrumb="GOP → SSS" title="Aklındaki Sorular" subtitle="Hızlıca cevap bul. Daha derin bir sorun varsa WhatsApp aktif." />

      <section className="max-w-[1100px] mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-[1fr_320px] gap-10 items-start">
        <div>
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-coral-400" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Sorunu yaz..." className="pl-11" />
          </div>

          {filtered.length === 0 ? (
            <div className="panel p-8 text-center">
              <p className="font-body text-text-secondary mb-4">Aradığını bulamadın mı? WhatsApp'tan yaz, hemen yanıt verelim.</p>
              <Button href={WORKSHOP.waLink} target="_blank" variant="primary">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </div>
          ) : (
            <Accordion.Root type="single" collapsible className="panel divide-y divide-white/8">
              {filtered.map((f, i) => (
                <Accordion.Item key={i} value={`q-${i}`} className="px-5">
                  <Accordion.Trigger className="group w-full py-4 flex items-center justify-between gap-4 text-left">
                    <div className="flex gap-4 items-start">
                      <span className="font-mono text-[12px] text-coral-400 mt-1 shrink-0">{String(i + 1).padStart(2, "0")} —</span>
                      <span className="font-body font-medium text-text-bright">{f.q}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-coral-400 transition-transform group-data-[state=open]:rotate-180 shrink-0" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden">
                    <div className="pb-5 pl-9 font-body text-text-secondary leading-relaxed border-l-2 border-coral-500/40 ml-1">{f.a}</div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <TiltCard maxTilt={4}>
            <div className="panel-coral holo-card p-6">
              <h3 className="font-display font-bold text-xl text-text-bright mb-3">Yanıt yok mu?</h3>
              <p className="font-body text-sm text-text-secondary mb-5">7/24 destek aktif. Mesaj at, hemen dönelim.</p>
              <div className="space-y-3">
                <Button href={WORKSHOP.waLink} target="_blank" variant="primary" fullWidth>
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
                <a href={`tel:${WORKSHOP.phoneRaw}`} className="flex items-center gap-2 font-mono text-[13px] text-text-secondary hover:text-coral-300 py-2">
                  <Phone className="w-4 h-4" /> {WORKSHOP.phone}
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-white/10">
                <StatusIndicator size="sm" />
              </div>
            </div>
          </TiltCard>
        </aside>
      </section>
    </>
  );
}
