import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { NewsArticle } from "@/lib/types";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`} className="block group">
      <div className="bg-brand-charcoal border border-brand-gray/10 overflow-hidden hover:border-brand-gold/30 transition-all duration-500 h-full flex flex-col">
        <div className="relative h-64 md:h-80 overflow-hidden">
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-brand-black flex items-center justify-center">
              <span className="font-cormorant text-2xl text-brand-gold/30 italic">Press Release</span>
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-8 md:p-10 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-6">
            <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold">
              {article.category}
            </span>
            <span className="font-montserrat text-[10px] tracking-widest text-brand-gray">
              {formatDate(article.publishedAt)}
            </span>
          </div>

          <h3 className="font-cormorant font-medium text-2xl md:text-3xl text-brand-light mb-4 line-clamp-3 group-hover:text-brand-gold transition-colors leading-tight">
            {article.title}
          </h3>

          <p className="font-light text-sm text-brand-gray line-clamp-3 leading-relaxed mt-auto">
            {article.excerpt}
          </p>

          <div className="mt-8 pt-6 border-t border-brand-gray/10">
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-brand-light group-hover:text-brand-gold transition-colors flex items-center gap-2">
              Read Article <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
