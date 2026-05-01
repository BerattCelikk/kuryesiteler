"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[app/error]", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0A0A0A] px-6 text-center">
      <h2 className="text-2xl font-black tracking-tight text-white">
        Bir şeyler ters gitti
      </h2>
      <p className="max-w-md text-sm text-[#FF6B00]">
        {error.message || "Beklenmeyen bir hata oluştu."}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-[#FF6B00] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#FF8C00]"
      >
        Tekrar Dene
      </button>
    </div>
  );
}
