import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getBrands } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import BrandCard from "@/components/brands/BrandCard";

export const metadata: Metadata = createMetadata({
  title: "Our Brands",
  description:
    "Discover the restaurant brands under China Star Group — from our flagship Chinese buffet to premium Asian grill concepts.",
  path: "/brands",
});

export default function BrandsPage() {
  const brands = getBrands();

  return (
    <>
      <PageHeader
        title="Our Brands"
        subtitle="Four unique dining concepts, one commitment to quality and flavor."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Brands" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
