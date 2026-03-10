import Container from "@/components/ui/Container";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="bg-brand-charcoal py-20 md:py-32 relative overflow-hidden border-b border-brand-gray/10">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <Container className="relative z-10 text-center">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
            <ol className="flex items-center gap-3 text-[10px] md:text-xs font-montserrat uppercase tracking-[0.2em] text-brand-gray">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-3">
                  {i > 0 && <span className="text-brand-gold/50">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-brand-light transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-brand-gold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-cormorant font-medium text-brand-light mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-brand-gray font-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
