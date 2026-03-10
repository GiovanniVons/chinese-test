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
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative">
        <select
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="appearance-none w-full sm:w-48 rounded-none border border-brand-gray/20 bg-brand-charcoal px-6 py-4 text-sm font-montserrat tracking-wide text-brand-light focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold transition-colors cursor-pointer"
          aria-label="Filter by brand"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        {/* Custom arrow for luxury feel */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-brand-gold font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
          className="appearance-none w-full sm:w-40 rounded-none border border-brand-gray/20 bg-brand-charcoal px-6 py-4 text-sm font-montserrat tracking-wide text-brand-light focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold transition-colors cursor-pointer"
          aria-label="Filter by state"
        >
          <option value="">All States</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-brand-gold font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
