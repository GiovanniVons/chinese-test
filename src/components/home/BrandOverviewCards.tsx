import Link from "next/link";
import { getBrands } from "@/lib/data";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function BrandOverviewCards() {
  const brands = getBrands();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
            Our Restaurant Brands
          </h2>
          <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
            Four unique dining concepts under one group, each offering a distinct
            experience and flavor profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link key={brand.id} href={`/brands/${brand.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 bg-brand-red-light rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-red font-bold text-lg">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-1">
                  {brand.name}
                </h3>
                <p className="text-sm text-brand-gold font-medium mb-3">
                  {brand.cuisineType}
                </p>
                <p className="text-sm text-brand-gray leading-relaxed mb-4">
                  {brand.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {brand.features.slice(0, 3).map((feature) => (
                    <Badge key={feature} label={feature} />
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
