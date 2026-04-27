"use client";
import { useEffect, useState } from "react";

export function HeroTyper({ text, delay = 0 }: { text: string; delay?: number }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, 35);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);
  return (
    <span className="font-mono text-[12px] text-lime-300 tracking-wider">
      {shown}
      <span className="inline-block w-[7px] h-[12px] bg-lime-300 ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
