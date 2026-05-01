"use client";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SiteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 py-16">
      <div className="panel holo-card p-8 md:p-12 max-w-[560px] w-full text-center border-l-2 border-l-coral-500">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coral-500/15 border border-coral-500/40 mb-6">
          <AlertTriangle className="w-8 h-8 text-coral-400" />
        </div>
        <div className="font-mono text-mono-label text-coral-400 mb-3">// HATA</div>
        <h1 className="font-display font-extrabold text-section-lg text-text-bright mb-3">
          Bir şeyler ters gitti.
        </h1>
        <p className="font-body text-text-secondary mb-2">
          Beklenmeyen bir hata oluştu. Tekrar denemeyi ya da ana sayfaya dönmeyi tercih edebilirsin.
        </p>
        {error.digest && (
          <p className="font-mono text-[11px] text-text-muted mt-4 mb-2 uppercase tracking-widest">
            Ref: {error.digest}
          </p>
        )}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="primary">
            <RotateCcw className="w-4 h-4" /> Tekrar Dene
          </Button>
          <Link href="/" className="inline-flex">
            <Button variant="ghost">
              <Home className="w-4 h-4" /> Ana Sayfa
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
