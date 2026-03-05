import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Brand } from "@/lib/types";

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/brands/${brand.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <div className="h-48 bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center">
          <span className="text-6xl font-bold text-white/20">
            {brand.name.charAt(0)}
          </span>
        </div>
        <div className="p-6">
          <p className="text-sm font-medium text-brand-gold mb-1">
            {brand.cuisineType} &middot; Est. {brand.established}
          </p>
          <h3 className="text-xl font-bold text-brand-black mb-2">
            {brand.name}
          </h3>
          <p className="text-sm text-brand-gray leading-relaxed mb-4">
            {brand.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {brand.features.map((feature) => (
              <Badge key={feature} label={feature} />
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
