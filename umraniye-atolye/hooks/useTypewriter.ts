"use client";
import { useEffect, useState } from "react";

export function useTypewriter({
  texts,
  speed = 60,
  deleteSpeed = 40,
  pause = 1800,
}: {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;
    const current = texts[idx % texts.length];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && display === current) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    } else {
      t = setTimeout(
        () => {
          setDisplay(
            deleting ? current.slice(0, display.length - 1) : current.slice(0, display.length + 1)
          );
        },
        deleting ? deleteSpeed : speed
      );
    }
    return () => clearTimeout(t);
  }, [display, deleting, idx, texts, speed, deleteSpeed, pause]);

  return display;
}
