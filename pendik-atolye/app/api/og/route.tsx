import { ImageResponse } from "next/og";
import { WORKSHOP } from "@/lib/constants";

export const runtime = "edge";
export const alt = WORKSHOP.name;
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F8F9FA",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            background: "#6CC024",
          }}
        />
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#212529",
            letterSpacing: 2,
            display: "flex",
          }}
        >
          KURYE PROJE
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,
            color: "#212529",
            letterSpacing: -3,
            marginTop: 60,
            display: "flex",
          }}
        >
          Pendik Atölyesi
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#6C757D",
            marginTop: 12,
            display: "flex",
          }}
        >
          {WORKSHOP.tagline}
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: "auto",
            fontSize: 16,
            color: "#6C757D",
          }}
        >
          <span>{WORKSHOP.address}</span>
          <span>•</span>
          <span>{WORKSHOP.hours.weekday.open}-{WORKSHOP.hours.weekday.close}</span>
          <span>•</span>
          <span>pendik.kuryeproje.com</span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 3,
            background: "#6CC024",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
