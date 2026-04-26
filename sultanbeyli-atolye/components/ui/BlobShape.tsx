import { cn } from "@/lib/utils";

export function BlobShape({
  color = "#F4CCBA",
  size = 400,
  opacity = 0.06,
  className,
  style,
}: {
  color?: string;
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("blob-bg", className)}
      style={{
        background: color,
        width: size,
        height: size,
        opacity,
        ...style,
      }}
    />
  );
}
