import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getLocations, getBrands, getUniqueStates } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import LocationsPageClient from "@/components/locations/LocationsPageClient";

export const metadata: Metadata = createMetadata({
  title: "Find a Location",
  description:
    "Find a China Star Group restaurant near you. Search 60+ locations by city or ZIP code, and order through DoorDash or Uber Eats.",
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
    <>
      <PageHeader
        title="Find a Location"
        subtitle="Search our 60+ locations across the U.S. and order through DoorDash or Uber Eats."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />
      <section className="py-8 md:py-12 bg-white">
        <Container>
          <LocationsPageClient
            locations={locations}
            brands={brands}
            states={states}
            initialBrand={brand}
          />
        </Container>
      </section>
    </>
  );
}
