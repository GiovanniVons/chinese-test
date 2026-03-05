import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getMenu } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import MenuNav from "@/components/menu/MenuNav";
import MenuCategory from "@/components/menu/MenuCategory";

export const metadata: Metadata = createMetadata({
  title: "Menu",
  description:
    "Browse the China Star Buffet menu — appetizers, chicken, beef, seafood, sushi, noodles, and more. All prices and items listed.",
  path: "/menu",
});

export default function MenuPage() {
  const menu = getMenu();

  return (
    <>
      <PageHeader
        title="Our Menu"
        subtitle="Explore the full menu from our flagship China Star Buffet. Prices may vary by location."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Menu" }]}
      />
      <section className="py-8 md:py-12 bg-brand-light">
        <Container>
          <MenuNav categories={menu.categories} />
          <div className="mt-8 space-y-10">
            {menu.categories.map((category) => (
              <MenuCategory key={category.id} category={category} />
            ))}
          </div>
          <p className="mt-8 text-xs text-brand-gray text-center">
            Menu last updated: {new Date(menu.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}. Prices and availability may vary by location.
          </p>
        </Container>
      </section>
    </>
  );
}
