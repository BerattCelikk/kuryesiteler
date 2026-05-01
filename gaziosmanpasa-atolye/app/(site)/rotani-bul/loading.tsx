export default function Loading() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-12" aria-busy="true" aria-live="polite">
      {/* PageHero placeholder */}
      <div className="mb-8 space-y-3">
        <div className="h-3 w-44 rounded bg-white/5 animate-pulse" />
        <div className="h-10 w-1/2 rounded bg-white/5 animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-white/5 animate-pulse" />
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Map skeleton */}
        <div className="h-[480px] md:h-[580px] panel overflow-hidden">
          <div className="w-full h-full bg-elevated/60 animate-pulse" />
        </div>

        {/* Sidebar — two stacked cards */}
        <aside className="space-y-5">
          <div className="panel-coral holo-card p-6 space-y-4">
            <div className="h-3 w-24 rounded bg-white/5 animate-pulse" />
            <div className="h-5 w-3/4 rounded bg-white/5 animate-pulse" />
            <div className="h-4 w-full rounded bg-white/5 animate-pulse" />
            <div className="space-y-2 pt-3">
              <div className="h-4 w-2/3 rounded bg-white/5 animate-pulse" />
              <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse" />
              <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse" />
            </div>
            <div className="h-10 w-full rounded bg-coral-500/15 animate-pulse mt-3" />
            <div className="h-10 w-full rounded bg-white/5 animate-pulse" />
          </div>

          <div className="panel p-6 space-y-3">
            <div className="h-3 w-20 rounded bg-white/5 animate-pulse" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-full rounded bg-white/5 animate-pulse" />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
