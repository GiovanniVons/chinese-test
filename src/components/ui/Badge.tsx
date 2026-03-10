import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  vegetarian: "border-green-800 text-green-500",
  spicy: "border-brand-red text-brand-red",
  "gluten-free": "border-blue-900 text-blue-400",
  popular: "border-brand-gold text-brand-gold",
  new: "border-purple-900 text-purple-400",
  default: "border-brand-gray/50 text-brand-gray",
};

export default function Badge({
  label,
  color,
}: {
  label: string;
  color?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none border px-2.5 py-0.5 text-[10px] tracking-widest uppercase font-medium bg-transparent",
        colorMap[color || label.toLowerCase()] || colorMap.default
      )}
    >
      {label}
    </span>
  );
}
