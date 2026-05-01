import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0A0A0A] px-6 text-center">
      <h1 className="text-7xl font-black tracking-tight text-[#FF6B00]">404</h1>
      <p className="max-w-md text-base text-zinc-400">
        Aradığınız sayfa bulunamadı. Belki adres değişti ya da sayfa kaldırıldı.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-[#FF6B00] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#FF8C00]"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
