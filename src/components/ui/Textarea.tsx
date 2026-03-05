"use client";

import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || props.name;
  return (
    <div>
      <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {props.required && <span className="text-brand-red ml-1">*</span>}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
          error ? "border-red-500 bg-red-50" : "border-gray-300 bg-white",
          className
        )}
        rows={props.rows || 4}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
