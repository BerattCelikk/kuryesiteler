"use client";
import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-[440px] mx-auto animate-float-gentle"
    >
      <svg viewBox="0 0 440 440" className="w-full h-auto">
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EFF6FF" />
            <stop offset="100%" stopColor="#DBEAFE" />
          </linearGradient>
          <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        <rect x="20" y="20" width="400" height="400" rx="24" fill="url(#bgGrad)" />
        <g stroke="#BFDBFE" strokeWidth="1" strokeDasharray="4 6" fill="none" opacity="0.8">
          <path d="M 60 120 Q 180 100, 260 180 T 380 300" />
          <path d="M 60 300 Q 160 260, 240 280 T 380 200" />
        </g>

        <g>
          <circle cx="100" cy="140" r="6" fill="#2DD4BF" />
          <circle cx="100" cy="140" r="14" fill="#2DD4BF" fillOpacity="0.2" />
          <circle cx="320" cy="200" r="6" fill="#14B8A6" />
          <circle cx="180" cy="320" r="6" fill="#60A5FA" />
        </g>

        <g transform="translate(210 200)">
          <circle cx="0" cy="0" r="36" fill="white" stroke="#2563EB" strokeWidth="3" />
          <circle cx="0" cy="0" r="28" fill="url(#pinGrad)" />
          <path
            d="M -8 -6 L 8 -6 L 8 2 L 4 2 L 4 8 L -4 8 L -4 2 L -8 2 Z"
            fill="white"
          />
        </g>

        <g fontFamily="monospace" fontSize="10" fill="#64748B" fontWeight="700">
          <text x="80" y="100">METRO</text>
          <text x="300" y="170">DEPO</text>
          <text x="160" y="355">D100</text>
        </g>

        <g stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M 210 155 L 210 120" strokeDasharray="2 4" opacity="0.6" />
        </g>
      </svg>
    </motion.div>
  );
}

export default HeroIllustration;
