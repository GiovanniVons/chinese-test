import type { MenuCategory as MenuCategoryType } from "@/lib/types";
import MenuItem from "./MenuItem";

export default function MenuCategory({
  category,
}: {
  category: MenuCategoryType;
}) {
  return (
    <section id={`menu-${category.id}`} className="scroll-mt-48 pt-12 first:pt-0">
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-cormorant font-medium text-brand-light mb-4">
          {category.name}
        </h3>
        <div className="w-16 h-px bg-brand-gold/50 mx-auto mb-6" />
        {category.description && (
          <p className="text-sm md:text-base font-light font-montserrat tracking-wide text-brand-gray max-w-2xl mx-auto uppercase">
            {category.description}
          </p>
        )}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {category.items
            .filter((item) => item.isAvailable)
            .map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
