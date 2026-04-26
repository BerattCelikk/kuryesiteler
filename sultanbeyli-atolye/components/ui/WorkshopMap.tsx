"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WORKSHOP } from "@/lib/constants";

export default function WorkshopMap() {
  const [icon, setIcon] = useState<L.DivIcon | null>(null);

  useEffect(() => {
    setIcon(
      L.divIcon({
        className: "",
        html: `<div style="width:28px;height:28px;background:#C05C28;border:3px solid #FDF8F0;border-radius:50%;box-shadow:0 6px 18px rgba(192,92,40,0.45);"></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
    );
  }, []);

  return (
    <MapContainer
      center={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: 24 }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap, &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {icon && (
        <Marker position={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]} icon={icon}>
          <Popup>
            <div style={{ fontFamily: "var(--font-body)" }}>
              <strong style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>
                {WORKSHOP.name}
              </strong>
              <br />
              <span style={{ color: "#5C3D28" }}>{WORKSHOP.address}</span>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
