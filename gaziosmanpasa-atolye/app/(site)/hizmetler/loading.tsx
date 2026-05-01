export default function Loading() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16" aria-busy="true" aria-live="polite">
      {/* PageHero placeholder */}
      <div className="mb-10 space-y-3">
        <div className="h-3 w-40 rounded bg-white/5 animate-pulse" />
        <div className="h-10 w-1/2 rounded bg-white/5 animate-pulse" />
        <div className="h-4 w-1/3 rounded bg-white/5 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="panel p-7 h-full flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-xl bg-white/5 animate-pulse" />
              <div className="h-5 w-16 rounded bg-white/5 animate-pulse" />
            </div>
            <div className="h-6 w-2/3 rounded bg-white/5 animate-pulse mb-3" />
            <div className="h-4 w-full rounded bg-white/5 animate-pulse mb-1.5" />
            <div className="h-4 w-3/4 rounded bg-white/5 animate-pulse mb-5" />
            <div className="h-3 w-20 rounded bg-coral-500/15 animate-pulse mt-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
