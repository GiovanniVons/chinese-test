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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="sticky top-16 md:top-20 z-10 bg-white border-b border-gray-200 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      aria-label="Menu categories"
    >
      <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            className={cn(
              "flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors",
              active === cat.id
                ? "bg-brand-red text-white"
                : "text-brand-gray hover:bg-brand-red-light hover:text-brand-red"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
