"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/lib/types";

export default function MenuNav({
  categories,
}: {
  categories: MenuCategory[];
}) {
  const [active, setActive] = useState(categories[0]?.id || "");

  const handleClick = (categoryId: string) => {
    setActive(categoryId);
    const el = document.getElementById(`menu-${categoryId}`);
    if (el) {
      // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-[72px] md:top-[88px] z-40 bg-brand-black/95 backdrop-blur-md border-b border-brand-charcoal py-4"
      aria-label="Menu categories"
    >
      <div className="flex gap-8 overflow-x-auto scrollbar-hide justify-start md:justify-center px-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            className={cn(
              "flex-shrink-0 py-2 text-[10px] md:text-xs font-montserrat uppercase tracking-[0.2em] transition-all duration-300 border-b border-transparent whitespace-nowrap",
              active === cat.id
                ? "text-brand-gold border-brand-gold"
                : "text-brand-gray hover:text-brand-light hover:border-brand-gray/50"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
