"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WORKSHOP } from "@/lib/constants";

const icon = L.divIcon({
  className: "",
  html: '<div class="workshop-marker"></div>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

interface Props {
  height?: number | string;
  zoom?: number;
  mini?: boolean;
}

export default function WorkshopMap({ height = 400, zoom = 16, mini = false }: Props) {
  return (
    <div
      style={{ height: typeof height === "number" ? `${height}px` : height }}
      className="overflow-hidden rounded-xl border border-[#2A2A2A]"
    >
      <MapContainer
        center={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={!mini}
        dragging={!mini}
        doubleClickZoom={!mini}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker
          position={[WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng]}
          icon={icon}
        >
          <Popup>
            <div style={{ fontSize: 13 }}>
              <strong style={{ color: "#FF6B00" }}>
                Bağcılar Atölyesi — Kurye Araç Proje
              </strong>
              <br />
              {WORKSHOP.hours.weekday.open} – {WORKSHOP.hours.weekday.close}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
