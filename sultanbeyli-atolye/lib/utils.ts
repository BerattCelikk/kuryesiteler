import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WORKSHOP } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isWorkshopOpen(date: Date = new Date()): boolean {
  const hour = date.getHours();
  const min = date.getMinutes();
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  const open = isWeekend ? 9 : WORKSHOP.openHour;
  const close = isWeekend ? 21 : WORKSHOP.closeHour;
  const t = hour + min / 60;
  return t >= open && t < close;
}

export function getTodayHours(): string {
  const day = new Date().getDay();
  const isWeekend = day === 0 || day === 6;
  const h = isWeekend ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
  return `${h.open} – ${h.close}`;
}

export function formatPhone(p: string): string {
  return p.replace(/\s+/g, " ").trim();
}

export function generateBookingId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `SBL-${s}`;
}

export function formatStat(n: number): string {
  return n.toLocaleString("tr-TR");
}

export function getTimeGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Günaydın";
  if (h < 18) return "İyi günler";
  return "İyi akşamlar";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function getServiceBySlug(slug: string) {
  return WORKSHOP.services.find((s) => s.slug === slug);
}

export function createICSFile(opts: {
  id: string;
  title: string;
  description: string;
  start: Date;
  durationMin?: number;
  location?: string;
}) {
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const end = new Date(opts.start.getTime() + (opts.durationMin ?? 30) * 60000);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//KuryeProje//Sultanbeyli//TR",
    "BEGIN:VEVENT",
    `UID:${opts.id}@kuryeproje.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(opts.start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${opts.title}`,
    `DESCRIPTION:${opts.description}`,
    opts.location ? `LOCATION:${opts.location}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}
