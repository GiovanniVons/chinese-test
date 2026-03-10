import Link from "next/link";
import Card from "@/components/ui/Card";
import OrderButtons from "./OrderButtons";
import type { Location } from "@/lib/types";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <Card className="p-6 bg-brand-charcoal border-brand-gray/20 hover:border-brand-gold/50 transition-colors group">
      <Link href={`/locations/${location.id}`}>
        <h3 className="font-cormorant font-medium text-brand-light text-2xl mb-1 group-hover:text-brand-gold transition-colors">
          {location.name}
        </h3>
        <p className="font-montserrat text-[10px] uppercase tracking-widest text-brand-gold mb-4">
          {location.mall}
        </p>
      </Link>
      <div className="text-sm font-light text-brand-gray space-y-1.5 mb-6">
        <p>{location.address}</p>
        <p>
          {location.city}, {location.state} {location.zip}
        </p>
        <p className="text-brand-light mt-2">{location.phone}</p>
        <p className="text-xs mt-3 pt-3 border-t border-brand-gray/10">
          <span className="text-brand-gold">M-Th:</span> {location.hours.monday} <br />
          <span className="text-brand-gold">F-Sa:</span> {location.hours.friday} <br />
          <span className="text-brand-gold">Su:</span> {location.hours.sunday}
        </p>
      </div>
      <OrderButtons
        doordashUrl={location.doordashUrl}
        uberEatsUrl={location.uberEatsUrl}
      />
    </Card>
  );
}
