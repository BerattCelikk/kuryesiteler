"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (pathname === "/randevu" || pathname === "/iletisim") {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [pathname, dismissed]);

  if (pathname === "/randevu" || pathname === "/iletisim") return null;

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 40, x: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 240, damping: 24 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="card-base shadow-card-md pr-3 pl-4 py-3 flex items-center gap-3 max-w-xs">
            <a
              href={WORKSHOP.waLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2.5"
            >
              <span className="w-9 h-9 rounded-full teal-gradient-bg flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </span>
              <span className="text-sm">
                <span className="font-display font-semibold text-text-primary">WhatsApp</span>
                <span className="block text-xs text-text-muted">Hemen yazın</span>
              </span>
            </a>
            <button
              type="button"
              aria-label="Kapat"
              onClick={() => setDismissed(true)}
              className="ml-2 w-6 h-6 flex items-center justify-center text-text-subtle hover:text-text-primary"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingWhatsApp;
