import { SectionHeader } from "@/components/ui/SectionHeader";
import { WarmStatCard } from "@/components/ui/WarmStatCard";
import { WORKSHOP } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="bg-cream-mid py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Veriler"
          title={WORKSHOP.copy.statsLabel}
          subtitle="Mahallenin gerçek rakamları, abartısız."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKSHOP.stats.map((s, i) => (
            <WarmStatCard key={s.id} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
