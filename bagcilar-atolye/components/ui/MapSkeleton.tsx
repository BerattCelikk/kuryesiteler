interface Props {
  height?: number | string;
}

export function MapSkeleton({ height = 400 }: Props) {
  return (
    <div
      style={{ height: typeof height === "number" ? `${height}px` : height }}
      className="flex items-center justify-center rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] animate-pulse"
    >
      <span className="text-xs text-[#555]">Harita yükleniyor...</span>
    </div>
  );
}
