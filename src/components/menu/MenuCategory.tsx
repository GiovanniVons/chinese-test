import type { MenuCategory as MenuCategoryType } from "@/lib/types";
import MenuItem from "./MenuItem";

export default function MenuCategory({
  category,
}: {
  category: MenuCategoryType;
}) {
  return (
    <section id={`menu-${category.id}`} className="scroll-mt-32">
      <h3 className="text-2xl font-bold text-brand-black mb-1">
        {category.name}
      </h3>
      {category.description && (
        <p className="text-sm text-brand-gray mb-4">{category.description}</p>
      )}
      <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6">
        {category.items
          .filter((item) => item.isAvailable)
          .map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
}
