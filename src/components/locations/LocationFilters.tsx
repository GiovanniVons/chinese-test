"use client";

import type { Brand } from "@/lib/types";

export default function LocationFilters({
  brands,
  states,
  selectedBrand,
  selectedState,
  onBrandChange,
  onStateChange,
}: {
  brands: Brand[];
  states: string[];
  selectedBrand: string;
  selectedState: string;
  onBrandChange: (brand: string) => void;
  onStateChange: (state: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <select
        value={selectedBrand}
        onChange={(e) => onBrandChange(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red bg-white"
        aria-label="Filter by brand"
      >
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <select
        value={selectedState}
        onChange={(e) => onStateChange(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red bg-white"
        aria-label="Filter by state"
      >
        <option value="">All States</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}
