import { ImageResponse } from "next/og";
import { WORKSHOP } from "@/lib/constants";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FEFCF5",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 32, height: 4, background: "#B8953A" }} />
          <div style={{ fontSize: 18, color: "#1E5C34", letterSpacing: 4, textTransform: "uppercase" }}>
            Kurye Proje · Kadıköy · {WORKSHOP.edition}
          </div>
        </div>
        <div style={{ marginTop: 80, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, lineHeight: 1, color: "#1A1A14", fontWeight: 300 }}>
            {WORKSHOP.copy.heroLine1}
          </div>
          <div style={{ fontSize: 120, lineHeight: 1, color: "#1E5C34", fontStyle: "italic", marginTop: 8, fontWeight: 300 }}>
            {WORKSHOP.copy.heroLine2}
          </div>
        </div>
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", color: "#6B6B55", fontSize: 22 }}>
          <span>{WORKSHOP.address}</span>
          <span style={{ color: "#9A7A26" }}>kuryeproje.com / kadıköy</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
