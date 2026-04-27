"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function PageTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    setActive(true);
    const t = setTimeout(() => setActive(false), 600);
    return () => clearTimeout(t);
  }, [pathname, first]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="loading-bar"
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: ["0%", "30%", "85%", "100%"], opacity: [1, 1, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, times: [0, 0.05, 0.6, 1] }}
          className="fixed top-0 left-0 h-[3px] bg-lime-500 z-[9999] pointer-events-none"
          style={{ boxShadow: "0 0 12px rgba(108,192,36,0.6)" }}
        />
      )}
    </AnimatePresence>
  );
}
