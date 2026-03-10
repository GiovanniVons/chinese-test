import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getBrands, getBrandBySlug, getLocationsByBrand } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return getBrands().map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return createMetadata({
    title: brand.name,
    description: brand.shortDescription,
    path: `/brands/${brand.slug}`,
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const locations = getLocationsByBrand(brand.id);

  return (
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title={brand.name}
        subtitle={brand.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/brands" },
          { label: brand.name },
        ]}
      />

      {/* Hero Visual for the specific brand */}
      <section className="h-[40vh] md:h-[60vh] bg-brand-charcoal relative overflow-hidden flex items-center justify-center border-b border-brand-gray/10">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10" />

        {brand.imageUrl ? (
          <img
            src={brand.imageUrl}
            alt={brand.name}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          />
        ) : (
          <span className="text-[200px] md:text-[400px] font-cormorant font-light text-brand-gray/5 select-none z-0 tracking-tighter mix-blend-overlay">
            {brand.name.charAt(0)}
          </span>
        )}
      </section>

      <section className="py-20 md:py-32 relative z-20 -mt-24 md:-mt-48">
        <Container>
          <div className="max-w-4xl mx-auto bg-brand-charcoal/90 backdrop-blur-xl p-8 md:p-16 border border-brand-gray/10 shadow-2xl">
            {/* Meta tags */}
            <div className="flex flex-wrap gap-3 mb-12 border-b border-brand-gray/20 pb-8">
              <Badge label={brand.cuisineType} />
              <Badge label={`Est. ${brand.established}`} />
              {brand.features.map((feature) => (
                <Badge key={feature} label={feature} />
              ))}
            </div>

            {/* Editorial Description */}
            <div className="prose prose-lg prose-invert max-w-none">
              {brand.description.split("\n\n").map((para, i) => (
                <p key={i} className={`font-light leading-relaxed mb-8 ${i === 0 ? 'text-2xl md:text-3xl font-cormorant text-brand-light' : 'text-brand-gray'}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* Location count + CTA */}
            <div className="mt-20 p-10 bg-brand-black border border-brand-gold/20 relative group overflow-hidden">
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-brand-gold/5 scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                <div>
                  <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-brand-gold mb-2">
                    Current Footprint
                  </p>
                  <p className="text-3xl md:text-4xl font-cormorant font-medium text-brand-light">
                    <span className="text-brand-gold">{locations.length}</span> Locations Nationwide
                  </p>
                </div>
                <Button
                  href={`/locations?brand=${brand.id}`}
                  variant="outline"
                  className="whitespace-nowrap rounded-none border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-montserrat uppercase tracking-[0.2em] text-[10px] px-8 py-4"
                >
                  Find Reservations
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
