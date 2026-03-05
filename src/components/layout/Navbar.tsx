import Link from "next/link";
import Container from "@/components/ui/Container";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="font-heading text-xl font-bold text-brand-black">
              China Star <span className="text-brand-red">Group</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-red transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/locations"
              className="ml-2 px-5 py-2.5 text-sm font-semibold bg-brand-red text-white rounded-lg hover:bg-brand-red-dark transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile nav */}
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
