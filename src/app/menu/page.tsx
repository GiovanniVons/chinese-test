import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getMenu } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import MenuNav from "@/components/menu/MenuNav";
import MenuCategory from "@/components/menu/MenuCategory";

export const metadata: Metadata = createMetadata({
  title: "Tasting Menu",
  description:
    "Explore the culinary offerings of China Star Group. From hand-crafted dim sum to signature wok creations and premium sushi.",
  path: "/menu",
});

export default function MenuPage() {
  const menu = getMenu();

  return (
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title="Tasting Menu"
        subtitle="A curated selection of our finest culinary creations, where traditional techniques meet modern execution."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Menu" }]}
      />

      {/* Sticky categories nav */}
      <MenuNav categories={menu.categories} />

      <section className="py-20 md:py-32 relative z-10 bg-brand-charcoal">
        {/* Subtle texture/border wrapper for the 'physical menu' feel */}
        <Container>
          <div className="max-w-6xl mx-auto bg-brand-black border border-brand-gold/20 p-8 md:p-16 lg:p-24 shadow-2xl relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold opacity-50 m-4" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-gold opacity-50 m-4" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-gold opacity-50 m-4" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-gold opacity-50 m-4" />

            <div className="space-y-24">
              {menu.categories.map((category) => (
                <MenuCategory key={category.id} category={category} />
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-brand-gray/10 flex flex-col items-center justify-center">
              <span className="text-3xl text-brand-gold font-cormorant font-light mb-4">CSG</span>
              <p className="text-[10px] uppercase tracking-widest text-brand-gray font-montserrat text-center">
                Menu Last Updated: {new Date(menu.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} <br className="hidden md:block" />
                <span className="opacity-50 mt-1 block">Prices and availability subject to change by location.</span>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
