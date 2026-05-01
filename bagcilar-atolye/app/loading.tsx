export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0A0A0A]">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#FF6B00]/20 border-t-[#FF6B00]" />
      <p className="text-sm text-zinc-400">Yükleniyor...</p>
    </div>
  );
}
