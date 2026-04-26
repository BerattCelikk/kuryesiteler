import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CursorDot } from "@/components/layout/CursorDot";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Preloader } from "@/components/layout/Preloader";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <CursorDot />
      <CommandPalette />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#FFFFFF",
            color: "#0F172A",
            border: "1px solid #E2E8F0",
            borderRadius: 12,
            boxShadow: "0 4px 16px rgba(15,23,42,.10)",
            fontFamily: "var(--font-inter)",
            fontSize: 14,
          },
          success: { iconTheme: { primary: "#10B981", secondary: "#FFFFFF" } },
          error: { iconTheme: { primary: "#EF4444", secondary: "#FFFFFF" } },
        }}
      />
    </>
  );
}
