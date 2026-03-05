import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { NewsArticle } from "@/lib/types";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <div className="h-40 bg-gradient-to-br from-brand-charcoal to-brand-black flex items-center justify-center">
          <span className="text-4xl font-bold text-white/10">NEWS</span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Badge label={article.category} />
            <span className="text-xs text-brand-gray">
              {formatDate(article.publishedAt)}
            </span>
          </div>
          <h3 className="font-bold text-brand-black text-base mb-2 line-clamp-2 hover:text-brand-red transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-brand-gray line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </Card>
    </Link>
  );
}
