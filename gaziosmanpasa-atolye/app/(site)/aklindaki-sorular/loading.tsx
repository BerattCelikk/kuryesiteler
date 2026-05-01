export default function Loading() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-8 py-12" aria-busy="true" aria-live="polite">
      {/* PageHero placeholder */}
      <div className="mb-10 space-y-3">
        <div className="h-3 w-32 rounded bg-white/5 animate-pulse" />
        <div className="h-10 w-2/3 rounded bg-white/5 animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse" />
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
        <div>
          {/* Search input skeleton */}
          <div className="h-12 w-full rounded bg-white/5 animate-pulse mb-8" />

          {/* Accordion skeleton — 7 question rows */}
          <div className="panel divide-y divide-white/8">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex gap-4 items-center flex-1">
                  <div className="h-3 w-8 rounded bg-white/5 animate-pulse" />
                  <div className="h-4 rounded bg-white/5 animate-pulse" style={{ width: `${50 + ((i * 7) % 35)}%` }} />
                </div>
                <div className="h-4 w-4 rounded bg-white/5 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="panel-coral p-6 space-y-4">
            <div className="h-5 w-2/3 rounded bg-white/5 animate-pulse" />
            <div className="h-4 w-full rounded bg-white/5 animate-pulse" />
            <div className="h-10 w-full rounded bg-coral-500/15 animate-pulse" />
            <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse" />
          </div>
        </aside>
      </div>
    </section>
  );
}
