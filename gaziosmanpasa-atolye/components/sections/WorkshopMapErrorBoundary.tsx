"use client";
import { Component, type ReactNode } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";

// Class boundary because React error boundaries are still class-only;
// kept outside the dynamic() so a Suspense-fallback render can't throw past it.
export class WorkshopMapErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      console.error("WorkshopMap failed to load:", error);
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="h-[480px] md:h-[580px] panel flex items-center justify-center text-center px-6">
        <div>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-coral-500/15 border border-coral-500/40 mb-4">
            <MapPin className="w-7 h-7 text-coral-400" />
          </div>
          <h3 className="font-display font-bold text-text-bright text-xl mb-2">Harita yüklenemedi</h3>
          <p className="font-body text-sm text-text-secondary mb-5 max-w-xs mx-auto">
            Konumumuzu doğrudan Google Maps üzerinden açabilirsin.
          </p>
          <a
            href={WORKSHOP.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-semibold text-coral-300 hover:text-coral-200 transition-colors"
          >
            Konumu Google Maps'te aç <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }
}
