import Link from "next/link";
import Card from "@/components/ui/Card";
import OrderButtons from "./OrderButtons";
import type { Location } from "@/lib/types";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <Card className="p-5 hover:shadow-lg transition-shadow">
      <Link href={`/locations/${location.id}`}>
        <h3 className="font-bold text-brand-black text-base mb-0.5 hover:text-brand-red transition-colors">
          {location.name}
        </h3>
        <p className="text-sm text-brand-gold font-medium mb-2">
          {location.mall}
        </p>
      </Link>
      <div className="text-sm text-brand-gray space-y-1 mb-3">
        <p>{location.address}</p>
        <p>
          {location.city}, {location.state} {location.zip}
        </p>
        <p>{location.phone}</p>
        <p className="text-xs">
          Mon-Thu: {location.hours.monday} &middot; Fri-Sat:{" "}
          {location.hours.friday} &middot; Sun: {location.hours.sunday}
        </p>
      </div>
      <OrderButtons
        doordashUrl={location.doordashUrl}
        uberEatsUrl={location.uberEatsUrl}
      />
    </Card>
  );
}
