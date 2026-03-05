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
    <section className="bg-brand-black py-16 md:py-20">
      <Container>
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-300">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
