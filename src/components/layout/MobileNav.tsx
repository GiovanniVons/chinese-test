"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-brand-gold hover:text-brand-light transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          className="w-8 h-8 font-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>

      {/* Full screen mobile menu overlay for luxury feel */}
      {isOpen && (
        <div className="fixed inset-0 top-[80px] md:top-[96px] bg-brand-black/98 backdrop-blur-xl z-40 flex flex-col pt-12 pb-8 px-6 overflow-y-auto border-t border-brand-gray/10">
          <div className="flex flex-col gap-8 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-cormorant text-brand-gray hover:text-brand-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12 border-t border-brand-gray/20">
            <Button
              href="/locations"
              variant="outline"
              size="lg"
              className="w-full text-xs px-6 py-4 rounded-none border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-montserrat uppercase tracking-[0.2em]"
              onClick={() => setIsOpen(false)}
            >
              Reservations
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
