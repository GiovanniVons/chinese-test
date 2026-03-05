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
    <>
      <PageHeader
        title="News & Press"
        subtitle="The latest updates, milestones, and press releases from China Star Group."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
