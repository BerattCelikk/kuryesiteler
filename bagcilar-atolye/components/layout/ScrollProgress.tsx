"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: scale, transformOrigin: "0% 0%" }}
      className="fixed inset-x-0 top-0 z-[9999] h-[2px] bg-[#FF6B00]"
    />
  );
}
