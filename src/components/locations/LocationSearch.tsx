"use client";

import SearchInput from "@/components/ui/SearchInput";

export default function LocationSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <SearchInput
      value={value}
      onChange={onChange}
      onClear={() => onChange("")}
      placeholder="Search by city, ZIP code, or mall name..."
      className="w-full"
    />
  );
}
