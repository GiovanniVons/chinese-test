"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import type { Location } from "@/lib/types";

// Custom red marker using SVG data URI
const redIcon = new L.Icon({
  iconUrl: "data:image/svg+xml," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
      <path d="M12.5 0C5.6 0 0 5.6 0 12.5C0 21.9 12.5 41 12.5 41S25 21.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#B91C1C"/>
      <circle cx="12.5" cy="12.5" r="5.5" fill="white"/>
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
      className="h-full w-full rounded-xl"
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
          icon={redIcon}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-bold">{location.name}</p>
              <p className="text-gray-600">{location.mall}</p>
              <p className="text-gray-600">
                {location.city}, {location.state}
              </p>
              <Link
                href={`/locations/${location.id}`}
                className="text-brand-red hover:underline text-xs mt-1 inline-block"
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
