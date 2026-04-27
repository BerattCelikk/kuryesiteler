import { WORKSHOP } from "@/lib/constants";

export function StepStrip() {
  return (
    <div className="relative flex items-start justify-between gap-1 flex-1">
      <div className="absolute top-3 left-4 right-4 border-t border-dashed border-lime-400 -z-0" />
      {WORKSHOP.steps.map((s) => (
        <div
          key={s.n}
          className="relative flex flex-col items-center text-center flex-1 progress-bar-item px-1 py-1"
        >
          <div className="w-7 h-7 rounded-full bg-white border-2 border-lime-500 flex items-center justify-center text-[10px] font-mono font-bold text-lime-700 z-10">
            {s.n}
          </div>
          <span className="mt-2 text-[10px] md:text-[11px] font-semibold text-gray-700 leading-tight">
            {s.title}
          </span>
        </div>
      ))}
    </div>
  );
}
