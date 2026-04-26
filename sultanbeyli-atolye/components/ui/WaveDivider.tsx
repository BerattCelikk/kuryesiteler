import { cn } from "@/lib/utils";

export function WaveDivider({
  fill = "#F7EFE0",
  inverted = false,
  height = 80,
  className,
}: {
  fill?: string;
  inverted?: boolean;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("wave-divider", className)}
      style={{ height, transform: inverted ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
          stroke="rgba(192,92,40,0.10)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
