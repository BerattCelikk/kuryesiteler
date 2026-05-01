import { ImageResponse } from "next/og";
import { WORKSHOP } from "@/lib/constants";

export const runtime = "edge";
export const alt = WORKSHOP.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#080B12",
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, rgba(232,67,90,0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(6,182,212,0.15) 0%, transparent 50%)",
          padding: "70px",
          fontFamily: "sans-serif",
          color: "#EDF2FF",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#E8435A",
            fontSize: "20px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div style={{ width: 12, height: 12, background: "#E8435A", borderRadius: 9999 }} />
          {`// ${WORKSHOP.name.toUpperCase()} · ${WORKSHOP.tagline.toUpperCase()}`}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          <div style={{ fontSize: 110, color: "#EDF2FF" }}>{WORKSHOP.copy.heroLine1}</div>
          <div style={{ fontSize: 110, color: "#E8435A", textShadow: "0 0 40px rgba(232,67,90,0.5)" }}>{WORKSHOP.copy.heroLine2}</div>
          <div style={{ fontSize: 110, color: "#EDF2FF" }}>{WORKSHOP.copy.heroLine3}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "42px",
            color: "#8899B4",
            fontSize: 22,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>{`${WORKSHOP.street} · ${WORKSHOP.district}`}</span>
          <span style={{ color: "#22D3EE" }}>kuryeproje.com / gop</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
