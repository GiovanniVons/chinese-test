import Badge from "@/components/ui/Badge";
import type { MenuItem as MenuItemType } from "@/lib/types";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className="py-4 group">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h4 className="font-cormorant font-medium text-brand-light text-xl md:text-2xl whitespace-nowrap group-hover:text-brand-gold transition-colors">
          {item.name}
        </h4>

        {/* Dotted leader */}
        <div className="flex-1 border-b-[1.5px] border-dotted border-brand-gray/30 mb-2 md:mb-3 mix-blend-overlay" />

        <div className="flex-shrink-0 text-right whitespace-nowrap">
          <span className="font-montserrat font-medium text-brand-gold text-sm md:text-base tracking-widest">
            {item.priceLabel || item.price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="pr-12 md:pr-24">
        {item.description && (
          <p className="text-sm font-light text-brand-gray leading-relaxed mb-3">
            {item.description}
          </p>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
