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
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title="Our Brands"
        subtitle="Four unique dining concepts, one unrelenting commitment to culinary excellence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Brands" }]}
      />
      <section className="py-20 md:py-32 relative z-10">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-24">
              {brands.map((brand, index) => (
                <div key={brand.id} className={index % 2 === 1 ? "md:mt-24" : ""}>
                  <BrandCard brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
