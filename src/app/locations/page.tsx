import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getLocations, getBrands, getUniqueStates } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import LocationsPageClient from "@/components/locations/LocationsPageClient";

export const metadata: Metadata = createMetadata({
  title: "Reservations & Locations",
  description:
    "Find a China Star Group restaurant near you. Search 60+ locations by city or ZIP code, and secure your dining experience.",
  path: "/locations",
});

export default async function LocationsPage({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string }>;
}) {
  const { brand } = await searchParams;
  const locations = getLocations();
  const brands = getBrands();
  const states = getUniqueStates();

  return (
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title="Find a Location"
        subtitle="Search our collections across the U.S. and secure your reservation or premium delivery."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reservations" }]}
      />
      <section className="py-12 md:py-20 relative z-10">
        <Container>
          <LocationsPageClient
            locations={locations}
            brands={brands}
            states={states}
            initialBrand={brand}
          />
        </Container>
      </section>
    </div>
  );
}
