export default function Loading() {
  return (
    <div aria-busy="true" aria-live="polite">
      {/* PageHero placeholder */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 space-y-3">
        <div className="h-3 w-44 rounded bg-white/5 animate-pulse" />
        <div className="h-10 w-1/2 rounded bg-white/5 animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-white/5 animate-pulse" />
      </section>

      {/* Step sections — 3 alternating skeleton blocks (page actually renders 6, but 3 keeps the skeleton lightweight) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <section key={i} className={i % 2 === 0 ? "bg-surface py-20" : "bg-void grid-bg py-20"}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div className={i % 2 === 0 ? "" : "lg:order-2"}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-white/5 animate-pulse" />
                <div className="h-5 w-20 rounded bg-white/5 animate-pulse" />
              </div>
              <div className="h-9 w-3/4 rounded bg-white/5 animate-pulse mb-4" />
              <div className="h-5 w-full rounded bg-white/5 animate-pulse mb-2" />
              <div className="h-5 w-5/6 rounded bg-white/5 animate-pulse" />
            </div>
            <div className={i % 2 === 0 ? "flex justify-center" : "flex justify-center lg:order-1"}>
              <div className="panel w-full max-w-md aspect-square animate-pulse" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
