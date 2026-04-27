"use client";
import { motion } from "framer-motion";
import InkReveal from "./InkReveal";

export default function PullQuote({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <InkReveal className="relative my-8">
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold-400"
      />
      <blockquote className="font-display italic leading-[1.5] text-forest-500 pl-6 text-[clamp(1.3rem,2vw,1.8rem)] font-light">
        {text}
      </blockquote>
      {attribution && (
        <div className="mt-3 pl-6 font-mono text-[12px] text-text-muted tracking-wider">— {attribution}</div>
      )}
    </InkReveal>
  );
}
