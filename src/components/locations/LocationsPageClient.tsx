"use client";

import { useState, useMemo } from "react";
import LocationSearch from "./LocationSearch";
import LocationFilters from "./LocationFilters";
import LocationMap from "./LocationMap";
import LocationList from "./LocationList";
import type { Location, Brand } from "@/lib/types";

export default function LocationsPageClient({
  locations,
  brands,
  states,
  initialBrand,
}: {
  locations: Location[];
  brands: Brand[];
  states: string[];
  initialBrand?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || "");
  const [selectedState, setSelectedState] = useState("");

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return locations.filter((loc) => {
      const matchesSearch =
        !q ||
        loc.city.toLowerCase().includes(q) ||
        loc.zip.startsWith(q) ||
        loc.mall.toLowerCase().includes(q) ||
        loc.state.toLowerCase() === q ||
        loc.name.toLowerCase().includes(q);
      const matchesBrand = !selectedBrand || loc.brandId === selectedBrand;
      const matchesState = !selectedState || loc.state === selectedState;
      return matchesSearch && matchesBrand && matchesState;
    });
  }, [locations, searchQuery, selectedBrand, selectedState]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <LocationSearch value={searchQuery} onChange={setSearchQuery} />
        </div>
        <LocationFilters
          brands={brands}
          states={states}
          selectedBrand={selectedBrand}
          selectedState={selectedState}
          onBrandChange={setSelectedBrand}
          onStateChange={setSelectedState}
        />
      </div>

      {/* Results count */}
      <p className="text-sm text-brand-gray" aria-live="polite">
        Showing <strong>{filtered.length}</strong> of{" "}
        <strong>{locations.length}</strong> locations
      </p>

      {/* Map */}
      <LocationMap locations={filtered} />

      {/* List */}
      <LocationList locations={filtered} />
    </div>
  );
}
