import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  vegetarian: "bg-green-100 text-green-800",
  spicy: "bg-red-100 text-red-800",
  "gluten-free": "bg-blue-100 text-blue-800",
  popular: "bg-amber-100 text-amber-800",
  new: "bg-purple-100 text-purple-800",
  default: "bg-gray-100 text-gray-800",
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
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colorMap[color || label.toLowerCase()] || colorMap.default
      )}
    >
      {label}
    </span>
  );
}
