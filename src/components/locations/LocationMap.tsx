"use client";

import dynamic from "next/dynamic";
import type { Location } from "@/lib/types";

const LocationMapInner = dynamic(() => import("./LocationMapInner"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-xl bg-gray-200 animate-pulse flex items-center justify-center">
      <p className="text-brand-gray text-sm">Loading map...</p>
    </div>
  ),
});

export default function LocationMap({
  locations,
}: {
  locations: Location[];
}) {
  return (
    <div className="h-[400px] md:h-[500px] w-full">
      <LocationMapInner locations={locations} />
    </div>
  );
}
