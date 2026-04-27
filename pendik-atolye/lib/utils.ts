import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WORKSHOP } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isWorkshopOpen(date: Date = new Date()): boolean {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  const hours = isWeekend ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
  const [oh, om] = hours.open.split(":").map(Number);
  const [ch, cm] = hours.close.split(":").map(Number);
  const now = date.getHours() * 60 + date.getMinutes();
  return now >= oh * 60 + om && now < ch * 60 + cm;
}

export function getTodayHours(date: Date = new Date()): { open: string; close: string; label: string } {
  const day = date.getDay();
  return day === 0 || day === 6 ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
}

export function formatPhone(phone: string): string {
  return phone;
}

export function generateBookingId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "PDK-";
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

export function formatStat(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toLocaleString("tr-TR", { maximumFractionDigits: 1 }) + "K";
  return n.toString();
}

export function getTimeGreeting(date: Date = new Date()): string {
  const h = date.getHours();
  if (h < 6) return "Gece";
  if (h < 12) return "Günaydın";
  if (h < 18) return "İyi öğleden sonralar";
  return "İyi akşamlar";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function createICSFile(opts: {
  title: string;
  description: string;
  start: Date;
  end: Date;
  location: string;
  uid: string;
}): string {
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//KuryeProje//PendikAtolye//TR",
    "BEGIN:VEVENT",
    `UID:${opts.uid}@kuryeproje.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(opts.start)}`,
    `DTEND:${fmt(opts.end)}`,
    `SUMMARY:${opts.title}`,
    `DESCRIPTION:${opts.description}`,
    `LOCATION:${opts.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function getServiceBySlug(slug: string) {
  return WORKSHOP.services.find((s) => s.slug === slug);
}
