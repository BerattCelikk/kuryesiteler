"use client";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircle, Phone, MapPin } from "lucide-react";
import StatusIndicator from "@/components/ui/StatusIndicator";
import TiltCard from "@/components/ui/TiltCard";
import Button from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";

export default function FAQSection() {
  const items = WORKSHOP.faq.slice(0, 6);
  return (
    <section className="snap-section bg-surface flex items-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-mono-label text-coral-400 mb-3">// DESTEK</div>
          <h2 className="font-display font-bold text-section-xl text-text-bright mb-12 max-w-3xl">
            {WORKSHOP.copy.faqTitle}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10">
          <Accordion.Root type="single" collapsible defaultValue="item-0">
            {items.map((q, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="border-b border-white/8 data-[state=open]:bg-raised/30 transition-colors">
                <Accordion.Trigger className="group flex items-center justify-between w-full py-5 text-left gap-4">
                  <div className="flex gap-4 items-start">
                    <span className="font-mono text-[12px] text-coral-400 mt-1 shrink-0">{String(i + 1).padStart(2, "0")} —</span>
                    <span className="font-body font-medium text-[15px] md:text-base text-text-bright">{q.q}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-coral-400 transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-open_0.3s_ease-out] data-[state=closed]:animate-[accordion-close_0.3s_ease-out]">
                  <div className="pb-5 pl-9 pr-6 font-body text-[15px] text-text-secondary leading-relaxed border-l-2 border-coral-500/40 ml-1">
                    {q.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
            <style>{`
              @keyframes accordion-open { from { max-height:0; opacity:0 } to { max-height:300px; opacity:1 } }
              @keyframes accordion-close { from { max-height:300px; opacity:1 } to { max-height:0; opacity:0 } }
            `}</style>
          </Accordion.Root>

          <div className="lg:sticky lg:top-24 self-start">
            <TiltCard maxTilt={4}>
              <div className="panel-coral holo-card p-7">
                <h3 className="font-display font-bold text-xl text-text-bright mb-4">Sorun Var mı?</h3>
                <p className="font-body text-sm text-text-secondary mb-6">7/24 WhatsApp destek aktif. Veya direk atölyeye uğra.</p>
                <Button href={WORKSHOP.waLink} target="_blank" variant="primary" fullWidth>
                  <MessageCircle className="w-4 h-4" /> WhatsApp Destek
                </Button>
                <a href={`tel:${WORKSHOP.phoneRaw}`} className="mt-3 flex items-center gap-2 font-mono text-[12px] text-text-secondary hover:text-coral-300 transition-colors py-2">
                  <Phone className="w-3.5 h-3.5" /> {WORKSHOP.phone}
                </a>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <StatusIndicator size="sm" />
                </div>
                <div className="mt-3 flex items-start gap-2 text-[12px] font-body text-text-secondary">
                  <MapPin className="w-3.5 h-3.5 text-coral-400 shrink-0 mt-0.5" />
                  {WORKSHOP.address}
                </div>
              </div>
            </TiltCard>

            <div className="mt-5 text-center">
              <Button href="/aklindaki-sorular" variant="ghost" size="sm">
                Tüm Sorular →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
