"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export interface BlogPostItem {
  slug: string;
  title: string;
  date: string;
  image?: string;
  thumbnail?: string;
  description?: string;
  category?: string;
  categories?: string[];
}

interface InsightsToInspireProps {
  blogPath: string;
  posts?: BlogPostItem[];
  locale: string;
}

function formatDate(dateStr: string, locale: string): string {
  try {
    return new Date(dateStr).toLocaleDateString(locale === "es" ? "es-ES" : "ca-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function InsightsToInspire({ blogPath, posts = [], locale }: InsightsToInspireProps) {
  const landing = useTranslations("landing");

  return (
    <section
      id="blog-recent"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-life-primary/5 to-white"
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header row: title + subtitle (left), button (right) */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:flex-nowrap gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-life-text text-left mb-4">
              {landing("insightsToInspire.title")}
            </h2>
            <p className="text-lg text-life-text/80 text-left max-w-xl">
              {landing("insightsToInspire.subtitle")}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={blogPath}
              className="inline-block text-lg font-medium text-life-primary border-b border-life-primary/40 hover:border-life-primary hover:text-life-primary/90 transition-colors pb-0.5"
            >
              {landing("insightsToInspire.ctaText")}
            </Link>
          </div>
        </div>

        {/* 3-column grid of post cards */}
        {posts.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
            {posts.map((post) => {
              const imageSrc = post.image || post.thumbnail;
              const postHref = `${blogPath}/${post.slug}`;
              const categories = post.categories?.length
                ? post.categories
                : post.category
                  ? [post.category]
                  : [];

              return (
                <li key={post.slug} className="bg-white rounded-md overflow-hidden shadow-md">
                  <div className="flex flex-col h-full">
                    <figure className="relative w-full h-[250px] flex-shrink-0 m-0 overflow-hidden">
                      <Link href={postHref} className="block w-full h-full">
                        {imageSrc ? (
                          <Image
                            src={imageSrc}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div
                            className="w-full h-full bg-life-text/10 flex items-center justify-center text-life-text/50 text-sm"
                            aria-hidden
                          >
                            {post.title.slice(0, 30)}…
                          </div>
                        )}
                      </Link>
                    </figure>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-life-text mb-3 min-h-[2.8rem] line-clamp-2">
                        <Link
                          href={postHref}
                          className="text-life-text hover:text-life-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex items-center justify-between gap-2 mt-auto flex-wrap">
                        <time
                          dateTime={post.date}
                          className="text-sm text-life-primary font-normal"
                        >
                          {formatDate(post.date, locale)}
                        </time>
                        {categories.length > 0 && (
                          <span className="flex flex-wrap gap-1 justify-end">
                            {categories.slice(0, 2).map((cat, i) => (
                              <Link
                                key={i}
                                href={`${blogPath}?category=${encodeURIComponent(cat)}`}
                                className="text-xs font-normal text-life-primary bg-life-primary/10 rounded-full px-2.5 py-1 hover:bg-life-primary/20 transition-colors"
                              >
                                {cat}
                              </Link>
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
