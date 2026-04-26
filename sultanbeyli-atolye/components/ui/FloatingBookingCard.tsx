"use client";
import Link from "next/link";
import { MapPin, Clock, Hourglass } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { Button } from "./Button";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours } from "@/lib/utils";

export function FloatingBookingCard() {
  return (
    <aside className="hidden lg:block">
      <div className="float-card p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display text-2xl text-ink leading-tight">
              Randevu Alın
            </h3>
            <p className="font-body text-xs text-ink-light mt-1">
              30 saniyede tamamlanır
            </p>
          </div>
          <StatusBadge size="sm" />
        </div>

        <div className="h-px bg-terra-200/60 mb-4" />

        <ul className="space-y-3 mb-5">
          <li className="flex items-start gap-3 font-body text-sm text-ink-mid">
            <MapPin size={16} className="text-terra-500 mt-0.5 shrink-0" />
            <span>{WORKSHOP.address}</span>
          </li>
          <li className="flex items-center gap-3 font-body text-sm text-ink-mid">
            <Clock size={16} className="text-terra-500 shrink-0" />
            <span>Bugün {getTodayHours()}</span>
          </li>
          <li className="flex items-center gap-3 font-body text-sm text-ink-light">
            <Hourglass size={16} className="text-terra-500 shrink-0" />
            <span>~8 dk bekleme</span>
          </li>
        </ul>

        <div className="h-px bg-terra-200/60 mb-4" />

        <div className="space-y-3 mb-4">
          <label className="block">
            <span className="block font-body text-[11px] font-bold uppercase tracking-wider text-ink-mid mb-1">
              Tarih
            </span>
            <input
              type="date"
              className="w-full bg-sand-light border border-terra-200/60 rounded-xl px-3 py-2 font-body text-sm text-ink focus:outline-none focus:border-terra-500"
            />
          </label>
          <label className="block">
            <span className="block font-body text-[11px] font-bold uppercase tracking-wider text-ink-mid mb-1">
              Saat dilimi
            </span>
            <select className="w-full bg-sand-light border border-terra-200/60 rounded-xl px-3 py-2 font-body text-sm text-ink focus:outline-none focus:border-terra-500">
              <option value="">Seçin…</option>
              {WORKSHOP.timeSlots.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>

        <Button variant="primary" size="md" href="/randevu" fullWidth>
          Randevu Alın
        </Button>

        <p className="text-center mt-3 font-body text-xs text-ink-faint italic">
          veya{" "}
          <Link href="/iletisim" className="underline hover:text-terra-500">
            randevusuz gelin
          </Link>
        </p>
      </div>
    </aside>
  );
}
