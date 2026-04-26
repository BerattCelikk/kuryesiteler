import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WORKSHOP } from "./constants";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("0")) {
    return `+90 (${digits.slice(1, 4)}) ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
  }
  if (digits.length === 12 && digits.startsWith("90")) {
    return `+90 (${digits.slice(2, 5)}) ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10, 12)}`;
  }
  return raw;
}

export interface WorkshopStatus {
  isOpen: boolean;
  label: string;
}

export function isWorkshopOpen(date: Date = new Date()): WorkshopStatus {
  const hour = date.getHours() + date.getMinutes() / 60;
  const { openHour, closeHour } = WORKSHOP;
  const effective = closeHour > 24 ? closeHour - 24 : closeHour;
  const isOpen =
    closeHour > 24
      ? hour >= openHour || hour < effective
      : hour >= openHour && hour < effective;
  return { isOpen, label: isOpen ? "AÇIK" : "KAPALI" };
}

export function generateBookingId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return `KP-${out}`;
}

export function todayIsoDate(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
