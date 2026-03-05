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
    <>
      <PageHeader
        title={brand.name}
        subtitle={brand.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {brand.features.map((feature) => (
                <Badge key={feature} label={feature} />
              ))}
              <Badge label={brand.cuisineType} color="new" />
              <Badge label={`Est. ${brand.established}`} />
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none text-brand-gray">
              {brand.description.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Location count + CTA */}
            <div className="mt-12 p-8 bg-brand-light rounded-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-3xl font-bold text-brand-red">
                    {locations.length}
                  </p>
                  <p className="text-brand-gray font-medium">
                    {brand.name} Locations Nationwide
                  </p>
                </div>
                <Button href={`/locations?brand=${brand.id}`}>
                  Find {brand.name} Near You
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
