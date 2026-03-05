import Badge from "@/components/ui/Badge";
import type { MenuItem as MenuItemType } from "@/lib/types";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-semibold text-brand-black text-sm">
            {item.name}
          </h4>
          {item.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
        <p className="text-xs text-brand-gray mt-0.5 leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="flex-shrink-0 text-right">
        <span className="font-bold text-brand-black text-sm">
          {item.priceLabel || `$${item.price.toFixed(2)}`}
        </span>
      </div>
    </div>
  );
}
