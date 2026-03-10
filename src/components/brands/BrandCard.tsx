import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Brand } from "@/lib/types";

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/brands/${brand.slug}`} className="brand-card group block">
      <Card className="h-full bg-transparent border-none p-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
        <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-brand-charcoal mb-8 relative overflow-hidden flex items-center justify-center">
          {brand.imageUrl ? (
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          ) : (
            <span className="text-8xl font-cormorant font-light text-brand-gray/20 select-none z-0">
              {brand.name.charAt(0)}
            </span>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10" />

          {/* Overlay text on hover */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-black/40 backdrop-blur-[2px]">
            <span className="text-brand-gold border border-brand-gold px-6 py-3 font-montserrat uppercase tracking-[0.2em] text-xs">
              Explore Brand
            </span>
          </div>
        </div>

        <div className="px-2">
          <div className="flex items-baseline justify-between mb-3 gap-4">
            <h3 className="text-3xl font-cormorant font-medium text-brand-light group-hover:text-brand-gold transition-colors">
              {brand.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-brand-gold font-montserrat whitespace-nowrap">
              {brand.cuisineType}
            </p>
          </div>

          <p className="font-montserrat text-[10px] uppercase text-brand-gray/60 tracking-widest mb-4">
            Established {brand.established}
          </p>

          <p className="text-base text-brand-gray leading-relaxed mb-6 font-light">
            {brand.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {brand.features.slice(0, 3).map((feature) => (
              <Badge key={feature} label={feature} />
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
