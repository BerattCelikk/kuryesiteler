import { WORKSHOP } from "@/lib/constants";

export default function IssueStrip() {
  const yr = new Date().getFullYear();
  return (
    <div className="bg-forest-500 text-ivory/80 py-2 text-center" data-cursor-dark="true">
      <span className="font-mono text-[11px] tracking-[0.16em] uppercase">
        Kurye Proje · Kadıköy · {WORKSHOP.edition} · {yr}
      </span>
    </div>
  );
}
