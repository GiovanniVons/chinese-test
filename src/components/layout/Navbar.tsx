import Link from "next/link";
import Container from "@/components/ui/Container";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-brand-gray/10">
      <Container>
        <nav className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-4 group">
            {/* Minimalist luxury logo icon */}
            <div className="w-10 h-10 border border-brand-gold flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-gold scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />
              <span className="text-brand-gold group-hover:text-brand-black font-cormorant font-medium text-lg relative z-10 transition-colors duration-500">
                CS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-cormorant text-2xl font-medium text-brand-light leading-none tracking-wide">
                Yuan Dining
              </span>
              <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-brand-gray mt-1">
                China Star Group
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-montserrat uppercase tracking-[0.2em] text-brand-gray hover:text-brand-light transition-colors relative group py-2"
              >
                {link.label}
                {/* Subtle underline hover effect */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            <div className="w-px h-6 bg-brand-gray/20 mx-2" />

            <Button
              href="/locations"
              variant="outline"
              size="sm"
              className="text-[11px] px-6 py-2.5 rounded-none border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-montserrat uppercase tracking-[0.2em]"
            >
              Reservations
            </Button>
          </div>

          {/* Mobile nav */}
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
