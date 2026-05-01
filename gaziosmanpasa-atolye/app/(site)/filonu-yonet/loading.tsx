export default function Loading() {
  return (
    <div aria-busy="true" aria-live="polite">
      {/* PageHero placeholder */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 space-y-3">
        <div className="h-3 w-40 rounded bg-white/5 animate-pulse" />
        <div className="h-10 w-2/3 rounded bg-white/5 animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse" />
      </section>

      {/* Features grid (3 cards) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="h-3 w-32 rounded bg-white/5 animate-pulse mb-3" />
        <div className="h-8 w-1/3 rounded bg-white/5 animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="panel p-7 h-full">
              <div className="w-12 h-12 rounded-xl bg-white/5 animate-pulse mb-4" />
              <div className="h-5 w-2/3 rounded bg-white/5 animate-pulse mb-2" />
              <div className="h-4 w-full rounded bg-white/5 animate-pulse mb-1.5" />
              <div className="h-4 w-3/4 rounded bg-white/5 animate-pulse" />
            </div>
          ))}
        </div>
      </section>

      {/* Tier tabs */}
      <section className="bg-surface py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="h-3 w-32 rounded bg-white/5 animate-pulse mb-3" />
          <div className="h-8 w-1/3 rounded bg-white/5 animate-pulse mb-8" />
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="panel p-4 md:p-5">
                <div className="h-3 w-20 rounded bg-white/5 animate-pulse mb-2" />
                <div className="h-5 w-24 rounded bg-white/5 animate-pulse" />
              </div>
            ))}
          </div>
          <div className="panel p-7 md:p-10 space-y-4">
            <div className="h-5 w-24 rounded bg-white/5 animate-pulse" />
            <div className="h-7 w-1/3 rounded bg-white/5 animate-pulse" />
            <div className="h-4 w-2/3 rounded bg-white/5 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 w-3/4 rounded bg-white/5 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B form */}
      <section className="bg-surface py-16">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <div className="h-3 w-32 rounded bg-white/5 animate-pulse mb-3" />
          <div className="h-8 w-1/2 rounded bg-white/5 animate-pulse mb-8" />
          <div className="panel p-7 md:p-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-12 rounded bg-white/5 animate-pulse" />
              <div className="h-12 rounded bg-white/5 animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-12 rounded bg-white/5 animate-pulse" />
              <div className="h-12 rounded bg-white/5 animate-pulse" />
            </div>
            <div className="h-24 rounded bg-white/5 animate-pulse" />
            <div className="h-12 w-full rounded bg-coral-500/15 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
