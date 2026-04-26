import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WORKSHOP } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isWorkshopOpen(date: Date = new Date()) {
  const h = date.getHours();
  return h >= WORKSHOP.openHour && h < WORKSHOP.closeHour;
}

export function formatPhone(raw: string) {
  return raw.replace(/(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
}

export function generateBookingId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return `UMR-${out}`;
}

export function formatStat(v: number) {
  if (v >= 1000) return `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K+`;
  return String(v);
}

export function getTimeGreeting(d: Date = new Date()) {
  const h = d.getHours();
  if (h < 6) return "İyi geceler";
  if (h < 12) return "Günaydın";
  if (h < 18) return "İyi günler";
  return "İyi akşamlar";
}

export function getTodayHours(d: Date = new Date()) {
  const day = d.getDay();
  const set = day === 0 || day === 6 ? WORKSHOP.hours.weekend : WORKSHOP.hours.weekday;
  return `${set.open} – ${set.close}`;
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      weekday: "long",
    });
  } catch {
    return dateStr;
  }
}

export function getServiceBySlug(slug: string) {
  return WORKSHOP.services.find((s) => s.slug === slug);
}

export function createICSFile(booking: {
  bookingId: string;
  date: string;
  timeSlot: string;
  firstName: string;
  lastName: string;
}) {
  const [startHour] = booking.timeSlot.split(" ")[0].split(":");
  const endHour = booking.timeSlot.split("–")[1]?.trim().split(":")[0] ?? String(Number(startHour) + 2);
  const dateOnly = booking.date.replace(/-/g, "");
  const start = `${dateOnly}T${startHour.padStart(2, "0")}0000`;
  const end = `${dateOnly}T${endHour.padStart(2, "0")}0000`;
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kurye Proje//Umraniye//TR",
    "BEGIN:VEVENT",
    `UID:${booking.bookingId}@kuryeproje.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:Kurye Proje Randevusu — ${booking.bookingId}`,
    `DESCRIPTION:${booking.firstName} ${booking.lastName} için Ümraniye atölyesi randevusu.`,
    `LOCATION:${WORKSHOP.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Blob([ics], { type: "text/calendar;charset=utf-8" });
}
