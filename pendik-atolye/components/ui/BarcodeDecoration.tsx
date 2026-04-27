import { cn } from "@/lib/utils";

interface Props {
  bars?: number;
  className?: string;
  height?: number;
}

const HEIGHTS = [16, 22, 10, 18, 24, 12, 20, 14, 22, 8, 18, 24, 12, 20, 16];

export function BarcodeDecoration({ bars = 14, className, height = 24 }: Props) {
  return (
    <div
      className={cn("barcode-deco", className)}
      style={{ height }}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          style={{
            height: `${HEIGHTS[i % HEIGHTS.length]}px`,
            width: i % 3 === 0 ? "3px" : "2px",
          }}
        />
      ))}
    </div>
  );
}
