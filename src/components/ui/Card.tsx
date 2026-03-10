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
        "bg-brand-charcoal border border-brand-gray/20 overflow-hidden text-brand-light",
        className
      )}
    >
      {children}
    </div>
  );
}
