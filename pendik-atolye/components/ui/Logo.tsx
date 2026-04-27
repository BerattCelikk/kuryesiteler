export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kurye Proje Pendik"
    >
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#212529" />
      <path
        d="M10 8 H18 a5 5 0 0 1 5 5 v0 a5 5 0 0 1 -5 5 H14 v6 H10 Z"
        fill="#6CC024"
      />
      <circle cx="22" cy="24" r="2.5" fill="#6CC024" />
      <rect x="6" y="22" width="2" height="2" fill="#94E04A" />
    </svg>
  );
}
