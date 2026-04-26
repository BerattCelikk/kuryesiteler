"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WORKSHOP } from "@/lib/constants";

export default function WorkshopMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const map = L.map(ref.current, {
      center: [WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng],
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 19,
    }).addTo(map);

    const icon = L.divIcon({
      className: "",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      html: `
        <div style="position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center;">
          <span style="position:absolute;width:40px;height:40px;border:1px solid rgba(232,67,90,0.5);border-radius:50%;animation:radarRing 2s ease-out infinite;"></span>
          <span style="position:absolute;width:40px;height:40px;border:1px solid rgba(232,67,90,0.5);border-radius:50%;animation:radarRing 2s ease-out 0.7s infinite;"></span>
          <span style="position:absolute;width:40px;height:40px;border:1px solid rgba(232,67,90,0.5);border-radius:50%;animation:radarRing 2s ease-out 1.4s infinite;"></span>
          <span style="width:14px;height:14px;border-radius:50%;background:#E8435A;box-shadow:0 0 12px rgba(232,67,90,0.8),0 0 24px rgba(232,67,90,0.4);"></span>
        </div>
      `,
    });

    L.marker([WORKSHOP.coordinates.lat, WORKSHOP.coordinates.lng], { icon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family:'Plus Jakarta Sans',sans-serif;padding:6px 4px;">
          <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:0.14em;color:#E8435A;text-transform:uppercase;">GOP ATÖLYESİ</div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;color:#EDF2FF;font-size:15px;margin-top:4px;">${WORKSHOP.name}</div>
          <div style="color:#8899B4;font-size:12px;margin-top:4px;">${WORKSHOP.address}</div>
        </div>`
      );

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={ref} className="w-full h-full rounded-xl border border-white/10" />;
}
