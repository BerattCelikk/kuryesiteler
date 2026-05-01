export default function Loading() {
  return (
    <section className="max-w-[900px] mx-auto px-4 md:px-8 py-12" aria-busy="true" aria-live="polite">
      {/* PageHero placeholder */}
      <div className="mb-10 space-y-3">
        <div className="h-3 w-40 rounded bg-white/5 animate-pulse" />
        <div className="h-10 w-2/3 rounded bg-white/5 animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse" />
      </div>

      {/* Step pill nav (4 cells) */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="panel p-3 md:p-4">
            <div className="h-3 w-10 mx-auto rounded bg-white/5 animate-pulse mb-2" />
            <div className="h-4 w-20 mx-auto rounded bg-white/5 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Form panel */}
      <div className="panel p-7 md:p-10 space-y-5">
        <div className="h-3 w-32 rounded bg-white/5 animate-pulse" />
        <div className="h-8 w-2/3 rounded bg-white/5 animate-pulse mb-4" />
        <div className="h-12 w-full rounded bg-white/5 animate-pulse" />
        <div className="h-12 w-full rounded bg-white/5 animate-pulse" />
        <div className="h-24 w-full rounded bg-white/5 animate-pulse" />
        <div className="flex justify-between pt-6 border-t border-white/8">
          <div className="h-10 w-24 rounded bg-white/5 animate-pulse" />
          <div className="h-10 w-28 rounded bg-coral-500/15 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
