import { ImageResponse } from "next/og";
import { WORKSHOP } from "@/lib/constants";

export const runtime = "edge";
export const alt = "Ümraniye Kurye Atölyesi";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg,#3B82F6 0%,#2563EB 100%)",
          padding: 80,
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: 4,
            color: "#DBEAFE",
            textTransform: "uppercase",
          }}
        >
          KURYE PROJE · ANADOLU YAKASI
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -3,
          }}
        >
          {WORKSHOP.name}
        </div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#BFDBFE", maxWidth: 900 }}>
          {WORKSHOP.tagline}
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 48,
            fontSize: 20,
            color: "#EFF6FF",
            fontFamily: "monospace",
          }}
        >
          <div>◆ {WORKSHOP.address}</div>
          <div>◆ 08:00 – 23:00</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
