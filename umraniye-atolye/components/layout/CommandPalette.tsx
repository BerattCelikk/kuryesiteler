"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Search,
  Calendar,
  MessageCircle,
  Map,
  FileText,
  Package,
  HelpCircle,
  Building2,
  Home,
} from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Action = { label: string; hint?: string; run: () => void; icon: React.ReactNode };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const router = useRouter();

  const actions: Action[] = useMemo(
    () => [
      { label: "Ana Sayfa", run: () => router.push("/"), icon: <Home className="w-4 h-4" /> },
      {
        label: "Randevu Al",
        hint: "R",
        run: () => router.push("/randevu"),
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        label: "WhatsApp",
        hint: "W",
        run: () => window.open(WORKSHOP.waLink, "_blank"),
        icon: <MessageCircle className="w-4 h-4" />,
      },
      {
        label: "Harita",
        run: () => window.open(WORKSHOP.googleMapsUrl, "_blank"),
        icon: <Map className="w-4 h-4" />,
      },
      {
        label: "Nasıl Çalışır",
        run: () => router.push("/nasil-calisir"),
        icon: <FileText className="w-4 h-4" />,
      },
      {
        label: "Hizmetler",
        run: () => router.push("/hizmetler"),
        icon: <Package className="w-4 h-4" />,
      },
      { label: "B2B", run: () => router.push("/hizmetler/b2b"), icon: <Building2 className="w-4 h-4" /> },
      { label: "SSS", run: () => router.push("/sss"), icon: <HelpCircle className="w-4 h-4" /> },
    ],
    [router]
  );

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setCursor(0);
    }
  }, [open]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const action = filtered[cursor];
      if (action) {
        action.run();
        setOpen(false);
      }
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-text-primary/30 backdrop-blur-sm z-[80]" />
        <Dialog.Content className="fixed top-[18%] left-1/2 -translate-x-1/2 w-[90vw] max-w-xl z-[81] bg-white border border-border-light rounded-[16px] shadow-card-lg overflow-hidden">
          <Dialog.Title className="sr-only">Komut paleti</Dialog.Title>
          <div className="flex items-center gap-3 px-5 h-14 border-b border-border-light">
            <Search className="w-4 h-4 text-text-muted" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setCursor(0);
              }}
              onKeyDown={handleKey}
              placeholder="Ara..."
              className="flex-1 bg-transparent outline-none font-display text-lg placeholder:text-text-subtle"
              autoFocus
            />
            <kbd className="pill pill-neutral">ESC</kbd>
          </div>
          <div className="max-h-80 overflow-y-auto py-2">
            {filtered.length === 0 ? (
              <div className="px-5 py-6 text-sm text-text-muted">Sonuç bulunamadı</div>
            ) : (
              filtered.map((a, i) => (
                <button
                  key={a.label}
                  type="button"
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => {
                    a.run();
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-5 py-2.5 text-left text-sm transition-colors",
                    cursor === i ? "bg-blue-50 text-blue-700" : "text-text-secondary"
                  )}
                >
                  <span
                    className={cn(
                      "w-7 h-7 rounded-[8px] flex items-center justify-center",
                      cursor === i ? "bg-blue-600 text-white" : "bg-bg-muted text-text-muted"
                    )}
                  >
                    {a.icon}
                  </span>
                  <span className="flex-1 font-display font-medium">{a.label}</span>
                  {a.hint && <kbd className="pill pill-neutral">{a.hint}</kbd>}
                </button>
              ))
            )}
          </div>
          <div className="border-t border-border-light bg-bg-soft px-5 py-2 flex items-center justify-between text-[11px] text-text-subtle font-mono">
            <span>↑↓ gez · ↵ seç</span>
            <span>⌘K</span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CommandPalette;
