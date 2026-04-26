"use client";
import { useEffect, useState } from "react";
import { WORKSHOP } from "@/lib/constants";
import { StatCard } from "@/components/ui/StatCard";

export function StatsBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="bg-bg-soft py-14 border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="section-label">ATÖLYE VERİLERİ</h3>
          <span className="font-mono text-xs text-text-muted">{time || "--:--:--"}</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {WORKSHOP.stats.map((s, i) => (
            <StatCard key={s.id} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
