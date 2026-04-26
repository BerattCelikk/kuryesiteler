"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorDot() {
  const { x, y } = useMousePosition();
  const [visible, setVisible] = useState(false);
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setCanShow(mq.matches);
    let timer: ReturnType<typeof setTimeout> | null = null;
    const onMove = () => {
      setVisible(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setVisible(false), 2000);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!canShow) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 pointer-events-none z-[70]"
      style={{
        translateX: x,
        translateY: y,
        x: "-50%",
        y: "-50%",
        opacity: visible ? 1 : 0,
        transition: "opacity .4s",
      }}
    />
  );
}

export default CursorDot;
