import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
