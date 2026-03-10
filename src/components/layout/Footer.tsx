import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-gray border-t border-brand-gold/20">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand - Span 4 cols */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group mb-6">
              <span className="font-cormorant text-2xl md:text-3xl font-medium text-brand-light transition-colors group-hover:text-brand-gold">
                Yuan Dining
              </span>
              <span className="block font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-gray mt-1">
                China Star Group
              </span>
            </Link>
            <p className="font-light leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick Links - Span 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="font-montserrat text-xs font-semibold text-brand-gold uppercase tracking-widest mb-6">
              Portfolio
            </h3>
            <ul className="space-y-4 font-light text-sm">
              <li><Link href="/about" className="hover:text-brand-light transition-colors">Our Story</Link></li>
              <li><Link href="/brands" className="hover:text-brand-light transition-colors">Collections</Link></li>
              <li><Link href="/locations" className="hover:text-brand-light transition-colors">Reservations</Link></li>
              <li><Link href="/menu" className="hover:text-brand-light transition-colors">The Menu</Link></li>
            </ul>
          </div>

          {/* Company - Span 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="font-montserrat text-xs font-semibold text-brand-gold uppercase tracking-widest mb-6">
              Corporate
            </h3>
            <ul className="space-y-4 font-light text-sm">
              <li><Link href="/careers" className="hover:text-brand-light transition-colors">Career Atelier</Link></li>
              <li><Link href="/news" className="hover:text-brand-light transition-colors">Press & News</Link></li>
              <li><Link href="/contact" className="hover:text-brand-light transition-colors">Inquiries</Link></li>
            </ul>
          </div>

          {/* Contact - Span 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="font-montserrat text-xs font-semibold text-brand-gold uppercase tracking-widest mb-6">
              Connect
            </h3>
            <ul className="space-y-4 font-light text-sm">
              <li><a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-brand-light transition-colors">{SITE_CONFIG.email}</a></li>
              <li><a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-brand-light transition-colors">{SITE_CONFIG.phone}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-gray/10 flex flex-col md:flex-row items-center justify-between gap-4 font-montserrat text-[10px] uppercase tracking-widest text-brand-gray/60">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-light transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-brand-light transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
