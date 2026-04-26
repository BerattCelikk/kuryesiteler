import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WORKSHOP } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isWorkshopOpen(date: Date = new Date()): boolean {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  const hours = isWeekend ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
  const [oh, om] = hours.open.split(":").map(Number);
  const [ch, cm] = hours.close.split(":").map(Number);
  const now = hour * 60 + minute;
  return now >= oh * 60 + om && now < ch * 60 + cm;
}

export function getTodayHours(): string {
  const day = new Date().getDay();
  const isWeekend = day === 0 || day === 6;
  const h = isWeekend ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
  return `${h.open} – ${h.close}`;
}

export function formatPhone(p: string): string {
  return p.replace(/(\+90)\s?\(?(\d{3})\)?\s?(\d{3})\s?(\d{2})\s?(\d{2})/, "$1 $2 $3 $4 $5");
}

export function generateBookingId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return `GOP-${id}`;
}

export function formatStat(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
  return `${n}`;
}

export function getTimeGreeting(): string {
  const h = new Date().getHours();
  if (h < 6) return "Gece";
  if (h < 12) return "Sabah";
  if (h < 18) return "Öğleden Sonra";
  return "Akşam";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function getServiceBySlug(slug: string) {
  return WORKSHOP.services.find((s) => s.slug === slug);
}

export function createICSFile(opts: {
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}): string {
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kurye Proje//GOP//TR",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@gop.kuryeproje.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(opts.start)}`,
    `DTEND:${fmt(opts.end)}`,
    `SUMMARY:${opts.title}`,
    `DESCRIPTION:${opts.description ?? ""}`,
    `LOCATION:${opts.location ?? WORKSHOP.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
