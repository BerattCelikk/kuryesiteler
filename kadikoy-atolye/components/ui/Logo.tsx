export default function Logo({ size = 36, color = "#1E5C34" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={(size * 28) / 36} viewBox="0 0 36 28" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="14" height="22" rx="1" transform="rotate(-4 2 3)" stroke={color} strokeWidth="1.5" />
      <rect x="20" y="3" width="14" height="22" rx="1" transform="rotate(4 20 3)" stroke={color} strokeWidth="1.5" />
      <line x1="18" y1="2" x2="18" y2="26" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}
