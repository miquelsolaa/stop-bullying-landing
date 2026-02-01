import { getBlogPosts } from '@/utils/getBlogPosts'
import Image from 'next/image'
import Link from 'next/link'
import { generateMetadata as baseGenerateMetadata } from '../../metadata'
import type { Metadata } from 'next'
import { BlogPagination } from '@/components/blog-pagination'
import { BlogHero } from '@/components/blog/BlogHero'
import { getTranslations } from 'next-intl/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const titles = {
  ca: "Blog sobre bullying i mobbing | Consells i recursos útils",
  es: "Blog sobre bullying y mobbing | Consejos y recursos útiles"
}
const descriptions = {
  ca: "Descobreix articles, guies i testimonis per superar el bullying i el mobbing a Barcelona. Consells pràctics i experiències reals.",
  es: "Descubre artículos, guías y testimonios para superar el bullying y el mobbing en Barcelona. Consejos prácticos y experiencias reales."
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale === 'es' ? 'es' : 'ca'
  return baseGenerateMetadata({
    title: titles[locale],
    description: descriptions[locale],
    path: '/blog'
  })
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const result = await getBlogPosts(locale, 1, 8)

  const isPaginated = result && typeof result === 'object' && 'posts' in result
  const posts = isPaginated ? result.posts : result
  const pagination = isPaginated
    ? {
        totalPosts: result.totalPosts,
        totalPages: result.totalPages,
        currentPage: result.currentPage
      }
    : null

  const t = await getTranslations('blog')
  const dateLocale = locale === 'es' ? 'es-ES' : 'ca-ES'

  return (
    <div className="flex flex-col min-h-screen font-sora">
      <main className="flex-1">
        <BlogHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
        />

        <section
          className="w-full py-12 md:py-20 bg-white"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005A6E' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <ul className="space-y-10 md:space-y-12 list-none p-0 m-0">
              {posts.map((post: { slug: string; title: string; description?: string; date: string; image?: string; thumbnail?: string; category?: string }) => (
                <li key={post.slug}>
                  <article className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8">
                    <Link
                      href={locale === 'ca' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`}
                      className="block flex-shrink-0 w-full md:w-[min(100%,380px)] aspect-[3/2] overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-life-primary focus:ring-offset-2"
                    >
                      <Image
                        src={post.image || post.thumbnail || ''}
                        alt=""
                        width={380}
                        height={253}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                    </Link>
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {post.category && (
                          <span className="inline-flex items-center rounded-full bg-life-primary/10 px-3 py-1 text-sm font-medium text-life-primary">
                            {post.category}
                          </span>
                        )}
                        <time
                          dateTime={new Date(post.date).toISOString().split('T')[0]}
                          className="text-sm text-life-text/70"
                        >
                          {new Date(post.date).toLocaleDateString(dateLocale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-life-text mt-1 mb-3 leading-tight">
                        <Link
                          href={locale === 'ca' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`}
                          className="hover:text-life-primary transition-colors focus:outline-none focus:ring-2 focus:ring-life-primary focus:ring-offset-2 rounded"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      {post.description && (
                        <p className="text-life-text/85 leading-relaxed mb-4 flex-1">
                          {post.description}
                        </p>
                      )}
                      <Link
                        href={locale === 'ca' ? `/blog/${post.slug}` : `/${locale}/blog/${post.slug}`}
                        className="text-life-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-life-primary focus:ring-offset-2 rounded inline-flex items-center gap-1"
                        aria-label={t('readArticleA11y', { title: post.title })}
                      >
                        {t('readArticle')}: {post.title}
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            {pagination && pagination.totalPages > 1 && (
              <BlogPagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                locale={locale}
                prevPageLabel={t('prevPage')}
                nextPageLabel={t('nextPage')}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
