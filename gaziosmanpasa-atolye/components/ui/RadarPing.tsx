import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  color?: "coral" | "cyan";
  className?: string;
  children?: React.ReactNode;
}

export default function RadarPing({ size = 24, color = "coral", className, children }: Props) {
  return (
    <span
      className={cn("radar-rings inline-flex items-center justify-center relative", color === "cyan" && "cyan", className)}
      style={{ width: size, height: size }}
    >
      <span />
      <span />
      <span />
      {children}
    </span>
  );
}
