interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kurye Proje"
    >
      <rect width="32" height="32" rx="8" fill="#FF6B00" />
      <path
        d="M7 7h4v7.5L16.5 7H22l-6 8 6.5 10H17l-4.5-7-1.5 2v5H7V7z"
        fill="#0A0A0A"
        fillRule="evenodd"
      />
    </svg>
  );
}
