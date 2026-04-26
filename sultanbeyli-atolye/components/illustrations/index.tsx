import * as React from "react";

type Props = { size?: number; className?: string };

const wrap = (size: number, children: React.ReactNode, className?: string) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export function RegistrationIllustration({ size = 120, className }: Props) {
  return wrap(
    size,
    <>
      <ellipse cx="60" cy="106" rx="38" ry="4" fill="#F4CCBA" opacity="0.5" />
      <path
        d="M30 42 H82 A6 6 0 0 1 88 48 V94 A6 6 0 0 1 82 100 H38 A6 6 0 0 1 32 94 V48 A6 6 0 0 1 38 42 Z"
        fill="#E8A888"
        stroke="#A34A1E"
        strokeWidth="2"
      />
      <path
        d="M48 42 V32 A12 12 0 0 1 60 20 A12 12 0 0 1 72 32 V42"
        stroke="#A34A1E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="86" cy="44" r="14" fill="#4E8A4E" stroke="#FDF8F0" strokeWidth="2" />
      <path
        d="M80 44 L84 48 L92 40"
        stroke="#FDF8F0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>,
    className,
  );
}

export function SwapIllustration({ size = 120, className }: Props) {
  return wrap(
    size,
    <>
      <ellipse cx="60" cy="108" rx="42" ry="4" fill="#F4CCBA" opacity="0.5" />
      <rect x="10" y="48" width="40" height="50" rx="6" fill="#F4CCBA" opacity="0.6" stroke="#A34A1E" strokeWidth="1.5" />
      <path d="M22 48 V40 A8 8 0 0 1 30 32 A8 8 0 0 1 38 40 V48" stroke="#A34A1E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="70" y="48" width="40" height="50" rx="6" fill="#E8A888" stroke="#A34A1E" strokeWidth="2" />
      <path d="M82 48 V40 A8 8 0 0 1 90 32 A8 8 0 0 1 98 40 V48" stroke="#A34A1E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M48 30 Q60 18 72 30" stroke="#C05C28" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M70 26 L72 30 L68 32" stroke="#C05C28" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 84 Q60 96 48 84" stroke="#C05C28" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 88 L48 84 L52 82" stroke="#C05C28" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    className,
  );
}

export function ServiceIllustration({ size = 120, className }: Props) {
  return wrap(
    size,
    <>
      <ellipse cx="60" cy="108" rx="38" ry="4" fill="#F4CCBA" opacity="0.5" />
      <path
        d="M40 80 L78 42 A4 4 0 0 1 84 42 L88 46 A4 4 0 0 1 88 52 L50 90 L34 96 L40 80 Z"
        fill="#E8A888"
        stroke="#A34A1E"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="86" r="3" fill="#A34A1E" />
      <path
        d="M22 30 L26 32 L22 36 L24 32 L18 32 Z M28 22 L30 26 L34 24 L30 28 L34 30 L30 28 L26 32"
        stroke="#4E8A4E"
        strokeWidth="2"
        fill="#A8C9A8"
        strokeLinejoin="round"
      />
      <path d="M20 26 L24 30 M28 22 L24 26" stroke="#4E8A4E" strokeWidth="1.5" strokeLinecap="round" />
    </>,
    className,
  );
}

export function ConsultingIllustration({ size = 120, className }: Props) {
  return wrap(
    size,
    <>
      <ellipse cx="60" cy="108" rx="38" ry="4" fill="#F4CCBA" opacity="0.5" />
      <line x1="20" y1="98" x2="100" y2="98" stroke="#A34A1E" strokeWidth="2" strokeLinecap="round" />
      <rect x="28" y="78" width="14" height="20" rx="2" fill="#A8C9A8" stroke="#3A6E3A" strokeWidth="1.5" />
      <rect x="48" y="62" width="14" height="36" rx="2" fill="#7AAB7A" stroke="#3A6E3A" strokeWidth="1.5" />
      <rect x="68" y="48" width="14" height="50" rx="2" fill="#4E8A4E" stroke="#3A6E3A" strokeWidth="1.5" />
      <path d="M22 60 L40 50 L60 38 L82 26" stroke="#C05C28" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 22 L82 26 L78 32" stroke="#C05C28" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>,
    className,
  );
}

export function B2BIllustration({ size = 120, className }: Props) {
  return wrap(
    size,
    <>
      <ellipse cx="60" cy="108" rx="44" ry="4" fill="#F4CCBA" opacity="0.5" />
      {[
        { x: 18, h: 46, head: 8 },
        { x: 38, h: 52, head: 10 },
        { x: 60, h: 60, head: 11 },
        { x: 82, h: 50, head: 9 },
        { x: 100, h: 44, head: 8 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={104 - p.h - p.head} r={p.head} fill="#E8A888" stroke="#A34A1E" strokeWidth="1.5" />
          <path
            d={`M${p.x - p.head - 2} ${104 - p.h + p.head} Q${p.x} ${104 - p.h - 2} ${p.x + p.head + 2} ${104 - p.h + p.head} L${p.x + p.head} 104 L${p.x - p.head} 104 Z`}
            fill="#C05C28"
            stroke="#A34A1E"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </>,
    className,
  );
}

export const ILLUSTRATIONS = {
  registration: RegistrationIllustration,
  swap: SwapIllustration,
  service: ServiceIllustration,
  consulting: ConsultingIllustration,
  b2b: B2BIllustration,
} as const;
