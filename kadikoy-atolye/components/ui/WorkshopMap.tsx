"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WORKSHOP } from "@/lib/constants";

const customIcon = L.divIcon({
  html: `<div style="width:18px;height:18px;border-radius:50%;background:#1E5C34;border:3px solid #D4B872;box-shadow:0 6px 32px rgba(26,26,20,0.10),0 2px 8px rgba(26,26,20,0.06);"></div>`,
  className: "",
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

export default function WorkshopMap({ height = 420 }: { height?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="w-full bg-ivory-mid border border-[var(--border-light)] rounded-lg" style={{ height }} />
    );
  }
  const { lat, lng } = WORKSHOP.coordinates;
  return (
    <div
      className="w-full overflow-hidden rounded-lg border border-[var(--border-light)] shadow-[var(--shadow-editorial)]"
      style={{ height }}
    >
      <MapContainer center={[lat, lng]} zoom={15} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a> · <a href="https://openstreetmap.org">OSM</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            <div className="font-body p-1">
              <div className="font-display text-[18px] font-medium text-ink">{WORKSHOP.name}</div>
              <div className="font-mono text-[11px] text-forest-500 uppercase tracking-wider mt-1">
                {WORKSHOP.edition}
              </div>
              <div className="text-[13px] text-text-secondary mt-2">{WORKSHOP.address}</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
