import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getNews } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import NewsCard from "@/components/news/NewsCard";

export const metadata: Metadata = createMetadata({
  title: "News & Press",
  description:
    "The latest news, press releases, and updates from China Star Group.",
  path: "/news",
});

export default function NewsPage() {
  const articles = getNews();

  return (
    <div className="bg-brand-black min-h-screen text-brand-light">
      <PageHeader
        title="News & Press"
        subtitle="The latest updates, milestones, and press releases from China Star Group."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className="py-20 md:py-32 relative z-10">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
              {articles.map((article, index) => (
                <div key={article.id} className={index % 3 === 1 ? "md:mt-12" : ""}>
                  <NewsCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
