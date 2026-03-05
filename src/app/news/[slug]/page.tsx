import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getNews, getNewsBySlug } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getNews().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <PageHeader
        title={article.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
      />
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <article className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Badge label={article.category} />
              <span className="text-sm text-brand-gray">
                {formatDate(article.publishedAt)}
              </span>
              <span className="text-sm text-brand-gray">
                By {article.author}
              </span>
            </div>
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
              />
            )}
            <div className="prose prose-lg max-w-none text-brand-charcoal">
              {article.content.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>
            {article.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-brand-gray mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
              </div>
            )}
          </article>
        </Container>
      </section>
    </>
  );
}
