import { WORKSHOP } from "@/lib/constants";
import LargeNumber from "@/components/editorial/LargeNumber";

export default function StatsRow() {
  return (
    <section className="bg-ivory-mid py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-parchment">
        {WORKSHOP.stats.map((s) => (
          <div key={s.id} className="px-6 first:pl-0">
            <LargeNumber value={s.display} label={s.label} color={s.color} size="md" />
          </div>
        ))}
      </div>
    </section>
  );
}
