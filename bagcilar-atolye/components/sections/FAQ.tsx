"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlowButton } from "@/components/ui/GlowButton";

export function FAQ() {
  return (
    <section id="sss" className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center">
            <SectionLabel>Destek</SectionLabel>
          </div>
          <h2 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
            Sıkça Sorulan Sorular
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="mt-12 space-y-0">
          {FAQ_ITEMS.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="group overflow-hidden border-b border-[#2A2A2A] transition-colors data-[state=open]:border-l-2 data-[state=open]:border-l-[#FF6B00] data-[state=open]:bg-[#FF6B00]/3"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-2 py-5 text-left text-[16px] font-medium text-white transition-colors hover:text-[#FF6B00] data-[state=open]:text-white">
                  <span>{item.question}</span>
                  <Plus
                    size={18}
                    className="shrink-0 text-[#FF6B00] transition-transform duration-300 group-data-[state=open]:rotate-45"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[slideUp_200ms_ease-out] data-[state=open]:animate-[slideDown_200ms_ease-out]">
                <div className="px-2 pb-5 pr-10 text-[15px] leading-[1.7] text-[#A0A0A0]">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-xl border border-[#2A2A2A] bg-[#111111] p-6 text-center"
        >
          <p className="text-[15px] text-[#A0A0A0]">Başka sorunuz mu var?</p>
          <div className="mt-4 flex justify-center">
            <GlowButton
              href={whatsappLink()}
              external
              variant="primary"
              size="md"
              icon={MessageCircle}
              iconPosition="left"
            >
              WhatsApp ile Sor
            </GlowButton>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes slideDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes slideUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
