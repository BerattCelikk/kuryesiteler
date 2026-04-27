"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WORKSHOP } from "@/lib/constants";

const icon = L.divIcon({
  className: "",
  html: `<div style="width:18px;height:18px;background:#6CC024;border:2px solid #212529;border-radius:50%;box-shadow:0 0 0 8px rgba(108,192,36,0.18);"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

export default function WorkshopMap({ height = 320 }: { height?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ height }} className="bg-gray-100" />;

  return (
    <MapContainer
      center={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", minHeight: height }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]} icon={icon}>
        <Popup>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13 }}>
            <strong style={{ color: "#212529" }}>{WORKSHOP.name}</strong>
            <br />
            <span style={{ color: "#6C757D" }}>{WORKSHOP.address}</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
