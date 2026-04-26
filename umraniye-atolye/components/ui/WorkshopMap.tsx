"use client";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours, isWorkshopOpen } from "@/lib/utils";

const blueIcon = L.divIcon({
  className: "",
  html: `
    <div style="position:relative;width:32px;height:32px;">
      <div style="position:absolute;inset:0;background:#2563EB;border-radius:50%;box-shadow:0 4px 12px rgba(37,99,235,.4);display:flex;align-items:center;justify-content:center;border:3px solid white;">
        <div style="width:10px;height:10px;background:white;border-radius:50%;"></div>
      </div>
      <div style="position:absolute;inset:-8px;border:2px solid #2563EB;border-radius:50%;opacity:.4;animation:pulse-soft 2s ease-in-out infinite;"></div>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

interface Props {
  height?: number | string;
  className?: string;
}

export function WorkshopMap({ height = 400, className }: Props) {
  useEffect(() => {
    // nothing
  }, []);

  const open = isWorkshopOpen();

  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", borderRadius: 14 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]} icon={blueIcon}>
          <Popup>
            <div style={{ minWidth: 180 }}>
              <strong style={{ fontSize: 14, color: "#0F172A" }}>{WORKSHOP.name}</strong>
              <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>
                {WORKSHOP.address}
              </div>
              <div style={{ marginTop: 8, fontSize: 12 }}>
                <span
                  style={{
                    color: open ? "#047857" : "#B91C1C",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  {open ? "● AÇIK" : "● KAPALI"}
                </span>
                <span style={{ color: "#64748B", marginLeft: 6 }}>
                  Bugün {getTodayHours()}
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default WorkshopMap;
