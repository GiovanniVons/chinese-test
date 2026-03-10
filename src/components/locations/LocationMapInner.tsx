"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import type { Location } from "@/lib/types";

// Custom luxury gold marker using SVG data URI
const goldIcon = new L.Icon({
  iconUrl: "data:image/svg+xml," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
      <path d="M12.5 0C5.6 0 0 5.6 0 12.5C0 21.9 12.5 41 12.5 41S25 21.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#CBA135"/>
      <circle cx="12.5" cy="12.5" r="5.5" fill="#1C1C1C"/>
    </svg>
  `),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function LocationMapInner({
  locations,
}: {
  locations: Location[];
}) {
  return (
    <MapContainer
      center={[39.8283, -98.5795]}
      zoom={4}
      className="h-full w-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={goldIcon}
        >
          <Popup>
            <div className="text-sm font-montserrat">
              <p className="font-cormorant font-medium text-lg text-brand-light mb-1 leading-none">{location.name}</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-2">{location.mall}</p>
              <p className="text-brand-gray text-xs font-light">
                {location.city}, {location.state}
              </p>
              <Link
                href={`/locations/${location.id}`}
                className="text-brand-gold hover:text-brand-light transition-colors text-xs mt-2 uppercase tracking-widest inline-block border-b border-brand-gold/30 pb-0.5"
              >
                View Details
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
