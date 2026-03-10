import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getNews, getNewsBySlug } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
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
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title="Press Room"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: "Article" },
        ]}
      />
      <article className="py-16 md:py-24 relative z-10">
        <Container>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                {article.category}
              </span>
              <span className="w-1 h-1 bg-brand-gray/50 rounded-full" />
              <span className="font-montserrat text-[10px] tracking-widest text-brand-gray">
                {formatDate(article.publishedAt)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-brand-light leading-tight mb-8">
              {article.title}
            </h1>

            <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-brand-gray">
              Words by <span className="text-brand-light">{article.author}</span>
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16 md:mb-24">
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full aspect-[21/9] object-cover border border-brand-gray/10 shadow-2xl"
              />
            )}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none text-brand-gray/90 prose-p:font-light prose-p:leading-relaxed prose-p:mb-8 prose-headings:font-cormorant prose-headings:font-medium prose-headings:text-brand-light prose-a:text-brand-gold hover:prose-a:text-brand-light prose-strong:text-brand-light">
              {article.content.split("\n\n").map((para, i) => {
                // Style the very first paragraph uniquely if it's not a heading
                const isFirst = i === 0 && !para.startsWith('#');
                return (
                  <p key={i} className={isFirst ? "text-xl md:text-2xl font-cormorant font-light text-brand-light leading-relaxed mb-12" : "leading-loose"}>
                    {para}
                  </p>
                );
              })}
            </div>

            {article.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-brand-gray/20 text-center">
                <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gray block mb-6">Tagged</span>
                <div className="flex flex-wrap justify-center gap-3">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 border border-brand-gray/20 text-brand-gray text-xs font-montserrat uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </article>
    </div>
  );
}
