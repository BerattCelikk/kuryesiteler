"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsBar() {
  return (
    <section className="border-y border-[#2A2A2A] bg-[#111111]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex flex-col items-center text-center md:border-r md:border-[#2A2A2A] md:last:border-r-0"
          >
            <div className="text-[40px] font-black leading-none text-white">
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mx-auto mt-3 h-[2px] w-[30px] bg-[#FF6B00]" />
            <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#555]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
