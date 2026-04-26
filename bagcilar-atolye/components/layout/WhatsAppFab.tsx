"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";

export function WhatsAppFab() {
  const pathname = usePathname();
  if (pathname === "/randevu") return null;
  const msg = encodeURIComponent(
    "Merhaba, Bağcılar atölyesi hakkında bilgi almak istiyorum.",
  );
  return (
    <motion.a
      href={`https://wa.me/${WORKSHOP.whatsappRaw}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile ulaş"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
      transition={{
        opacity: { duration: 0.4, delay: 1 },
        scale: { duration: 0.4, delay: 1 },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
    >
      <MessageCircle size={24} strokeWidth={2} fill="currentColor" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#1A1A1A] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        WhatsApp ile ulaş
      </span>
    </motion.a>
  );
}
