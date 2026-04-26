import { cn } from "@/lib/utils";

export default function Logo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("inline-block", className)}
      style={{ filter: "drop-shadow(0 0 6px rgba(232,67,90,0.6))" }}
    >
      <path d="M5 22 V8 L12 3 L19 8" stroke="#E8435A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.4" fill="#E8435A" />
      <circle cx="12" cy="12" r="5.5" stroke="#E8435A" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}
