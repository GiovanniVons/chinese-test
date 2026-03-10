"use client";

import dynamic from "next/dynamic";
import type { Location } from "@/lib/types";

const LocationMapInner = dynamic(() => import("./LocationMapInner"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-brand-charcoal animate-pulse flex items-center justify-center border border-brand-gray/20">
      <p className="font-montserrat text-[10px] uppercase tracking-widest text-brand-gold">Initializing Map...</p>
    </div>
  ),
});

export default function LocationMap({
  locations,
}: {
  locations: Location[];
}) {
  return (
    <div className="h-[400px] md:h-[600px] w-full border border-brand-gray/20 shadow-2xl relative z-0">
      <LocationMapInner locations={locations} />
    </div>
  );
}
