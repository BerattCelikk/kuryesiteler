"use client";
import { useState, useMemo } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Search } from "lucide-react";
import { FAQItem } from "@/components/ui/FAQItem";
import { WORKSHOP, FAQ_CATEGORIES } from "@/lib/constants";

export function FAQSearch({ initialCategory }: { initialCategory?: string }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | undefined>(initialCategory);

  const filtered = useMemo(() => {
    const lc = q.toLowerCase();
    return WORKSHOP.faq.filter((f) => {
      const match = !q || f.q.toLowerCase().includes(lc) || f.a.toLowerCase().includes(lc);
      const catMatch = !cat || f.category === cat;
      return match && catMatch;
    });
  }, [q, cat]);

  return (
    <div>
      <div className="mb-6 card-base p-4 flex items-center gap-3">
        <Search className="w-4 h-4 text-text-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Soru ara..."
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-text-subtle"
        />
        {q && (
          <span className="text-xs font-mono text-text-muted">
            {filtered.length} soru bulundu
          </span>
        )}
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCat(undefined)}
          className={`pill ${cat ? "pill-neutral" : "pill-blue"} cursor-pointer`}
        >
          Tümü
        </button>
        {FAQ_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c === cat ? undefined : c)}
            className={`pill ${cat === c ? "pill-blue" : "pill-neutral"} cursor-pointer`}
          >
            {c}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="card-base p-8 text-center text-text-muted">
          Bu aramayla eşleşen soru bulunamadı.
        </div>
      ) : (
        <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
          {filtered.map((f, i) => (
            <FAQItem key={f.q} item={f} index={i} value={`sss-${i}`} />
          ))}
        </Accordion.Root>
      )}
    </div>
  );
}

export default FAQSearch;
