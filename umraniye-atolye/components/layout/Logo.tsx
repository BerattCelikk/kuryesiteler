export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="3" y="3" width="14" height="14" rx="3" fill="#2563EB" />
      <rect
        x="15"
        y="15"
        width="14"
        height="14"
        rx="3"
        fill="#14B8A6"
      />
      <rect
        x="15"
        y="15"
        width="2"
        height="2"
        rx="0.5"
        fill="white"
      />
    </svg>
  );
}

export default Logo;
