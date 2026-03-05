import LocationCard from "./LocationCard";
import type { Location } from "@/lib/types";

export default function LocationList({
  locations,
}: {
  locations: Location[];
}) {
  if (locations.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-brand-gray text-lg">
          No locations found matching your search.
        </p>
        <p className="text-brand-gray text-sm mt-2">
          Try a different city, ZIP code, or clear your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
