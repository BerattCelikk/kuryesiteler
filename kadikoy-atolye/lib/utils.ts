import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WORKSHOP } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isWorkshopOpen(now: Date = new Date()): boolean {
  const day = now.getDay();
  const h = now.getHours();
  const m = now.getMinutes();
  const t = h * 60 + m;
  const isWeekend = day === 0 || day === 6;
  const range = isWeekend ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
  const [oh, om] = range.open.split(":").map(Number);
  const [ch, cm] = range.close.split(":").map(Number);
  return t >= oh * 60 + om && t < ch * 60 + cm;
}

export function getTodayHours(now: Date = new Date()): string {
  const isWeekend = now.getDay() === 0 || now.getDay() === 6;
  const r = isWeekend ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
  return `${r.open}–${r.close}`;
}

export function formatPhone(p: string = WORKSHOP.phone) {
  return p;
}

const ALPHA = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
export function generateBookingId(): string {
  let s = "";
  for (let i = 0; i < 6; i++) s += ALPHA[Math.floor(Math.random() * ALPHA.length)];
  return `KDK-${s}`;
}

export function formatStat(n: number): string {
  return n.toLocaleString("tr-TR");
}

export function getTimeGreeting(now: Date = new Date()): string {
  const h = now.getHours();
  if (h < 6) return "İyi geceler";
  if (h < 12) return "Günaydın";
  if (h < 18) return "İyi günler";
  return "İyi akşamlar";
}

export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getServiceBySlug(slug: string) {
  return WORKSHOP.services.find((s) => s.slug === slug);
}

export function buildMarqueeString(): string[] {
  const dyn = [
    `Bugün ${getTodayHours()}`,
    isWorkshopOpen() ? "Şu Anda Açık" : "Şu Anda Kapalı",
  ];
  return [...WORKSHOP.copy.marqueeItems, ...dyn];
}

export function createICSFile(opts: {
  title: string;
  description: string;
  start: Date;
  durationMin?: number;
  location?: string;
}): string {
  const dur = opts.durationMin ?? 30;
  const end = new Date(opts.start.getTime() + dur * 60_000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//KuryeProje//Kadikoy//TR",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@kuryeproje.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(opts.start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${opts.title}`,
    `DESCRIPTION:${opts.description}`,
    `LOCATION:${opts.location ?? WORKSHOP.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}
