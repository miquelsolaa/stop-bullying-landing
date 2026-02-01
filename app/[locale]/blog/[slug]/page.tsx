import { getBlogPost } from '@/utils/getBlogPost'
import { getBlogPosts } from '@/utils/getBlogPosts'
import { BlogLanguageSwitcher } from '@/components/blog-language-switcher'
import { getTranslatedSlug } from '@/utils/postMapping'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { generateMetadata as generateSiteMetadata } from '../../../metadata'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string }
}): Promise<Metadata> {
  try {
    const post = await getBlogPost(params.slug, params.locale)
    return generateSiteMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${params.slug}`,
    })
  } catch {
    return generateSiteMetadata({
      title: 'Blog Post',
      description: 'Blog post',
      path: `/blog/${params.slug}`,
    })
  }
}

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  try {
    const posts = await getBlogPosts(params.locale)
    const list = Array.isArray(posts) ? posts : (posts as { posts: unknown[] }).posts ?? []
    return list.map((post: { slug: string }) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params
  const dateLocale = locale === 'es' ? 'es-ES' : 'ca-ES'

  try {
    const post = await getBlogPost(slug, locale)
    if (!post) throw new Error('Post not found')

    const targetLocale = locale === 'ca' ? 'es' : 'ca'
    const translatedSlug = getTranslatedSlug(slug, locale, targetLocale)

    const t = await getTranslations('blogPost')

    const result = await getBlogPosts(locale, 1, 20)
    const allPosts = result && typeof result === 'object' && 'posts' in result ? result.posts : Array.isArray(result) ? result : []
    const featuredPosts = allPosts
      .filter((p: { slug: string }) => p.slug !== post.slug)
      .slice(0, 4)

    const blogPath = locale === 'ca' ? '/blog' : `/${locale}/blog`
    const contactPath = locale === 'ca' ? '/contacte' : `/${locale}/contacte`

    return (
      <div className="flex flex-col min-h-screen font-sora">
        <main className="flex-1">
          {/* Hero: fons fosc, categoria + data, títol, imatge destacada */}
          <section
            className="w-full bg-life-text text-white"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-12 md:pt-16 pb-12 md:pb-16">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
                <div className="flex-1 min-w-0 order-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {post.category && (
                      <span className="inline-flex items-center rounded-full bg-life-primary/90 px-3 py-1 text-sm font-medium text-white">
                        {post.category}
                      </span>
                    )}
                    <time
                      dateTime={new Date(post.date).toISOString().split('T')[0]}
                      className="text-life-accent/90 text-sm md:text-base"
                    >
                      {new Date(post.date).toLocaleDateString(dateLocale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                    {post.title}
                  </h1>
                </div>
                {post.image && (
                  <figure className="flex-shrink-0 w-full lg:w-[min(100%,480px)] aspect-[4/3] overflow-hidden rounded-lg order-2">
                    <Image
                      src={post.image}
                      alt=""
                      width={480}
                      height={360}
                      className="h-full w-full object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                  </figure>
                )}
              </div>
            </div>
          </section>

          {/* Contingut: columna esquerra = article; columna dreta = articles destacats + CTA + newsletter */}
          <section
            className="w-full py-12 md:py-20 bg-white"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005A6E' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
                {/* Columna esquerra: article */}
                <div className="flex-1 min-w-0 lg:max-w-[65%]">
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
                    <Link
                      href={blogPath}
                      className="inline-flex items-center gap-2 text-life-text hover:text-life-primary transition-colors"
                    >
                      <ArrowLeft className="h-5 w-5" />
                      {t('backToBlog')}
                    </Link>
                    <BlogLanguageSwitcher translatedSlug={translatedSlug} />
                  </div>

                  <article>
                    <div
                      className="prose prose-lg max-w-none prose-headings:text-life-text prose-p:text-life-text/90 prose-strong:text-life-text prose-blockquote:border-life-accent prose-blockquote:bg-life-primary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-img:rounded-xl prose-a:text-life-primary prose-a:no-underline hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <footer className="mt-12 pt-8 border-t border-life-primary/10 text-sm text-life-text/80 flex flex-wrap gap-x-6 gap-y-2">
                      <span className="flex items-center gap-2">
                        <span>{t('publishedOn')}</span>
                        <time dateTime={new Date(post.date).toISOString().split('T')[0]}>
                          {new Date(post.date).toLocaleDateString(dateLocale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </span>
                      {post.author && (
                        <span className="flex items-center gap-2">
                          <span>{t('by')}</span>
                          <span>{post.author}</span>
                        </span>
                      )}
                      {post.category && (
                        <span>
                          {t('categories')}: <span className="text-life-primary font-medium">{post.category}</span>
                        </span>
                      )}
                      {post.tags && post.tags.length > 0 && (
                        <span>
                          {t('tags')}:{' '}
                          {post.tags.map((tag: string, i: number) => (
                            <span key={tag}>
                              {i > 0 && ', '}
                              <span className="text-life-primary/90">{tag}</span>
                            </span>
                          ))}
                        </span>
                      )}
                    </footer>
                  </article>
                </div>

                {/* Columna dreta: articles destacats + CTA + newsletter */}
                <aside className="w-full lg:w-[min(100%,340px)] lg:flex-shrink-0 lg:sticky lg:top-28 space-y-8 mt-12 lg:mt-0">
                  {/* Articles destacats */}
                  {featuredPosts.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-life-text mb-4">{t('featuredArticles')}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 list-none p-0 m-0">
                        {featuredPosts.map((p: { slug: string; title: string; date: string; image?: string; thumbnail?: string; category?: string }) => (
                          <li key={p.slug}>
                            <Link
                              href={locale === 'ca' ? `/blog/${p.slug}` : `/${locale}/blog/${p.slug}`}
                              className="group flex gap-4 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-life-primary focus:ring-offset-2"
                            >
                              <span className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg bg-life-primary/10">
                                {(p.image || p.thumbnail) && (
                                  <Image
                                    src={p.image || p.thumbnail || ''}
                                    alt=""
                                    width={80}
                                    height={80}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                    sizes="80px"
                                  />
                                )}
                              </span>
                              <span className="flex flex-col min-w-0 flex-1">
                                <span className="font-semibold text-life-text group-hover:text-life-primary transition-colors line-clamp-2 text-sm">
                                  {p.title}
                                </span>
                                <span className="flex flex-wrap items-center gap-2 mt-0.5 text-xs text-life-text/70">
                                  {p.category && (
                                    <span className="text-life-primary">{p.category}</span>
                                  )}
                                  <time>
                                    {new Date(p.date).toLocaleDateString(dateLocale, {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                    })}
                                  </time>
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA: Reserva consulta */}
                  <div className="rounded-2xl overflow-hidden relative">
                    <div className="relative py-10 px-6 bg-life-text text-white">
                      <div
                        className="absolute inset-0 opacity-60"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      />
                      <div className="relative z-10 text-center">
                        <h3 className="text-lg font-bold mb-2">{t('bookDiscoveryTitle')}</h3>
                        <p className="text-life-accent/95 text-sm mb-6">{t('bookDiscoverySubtitle')}</p>
                        <Link
                          href={contactPath}
                          className="inline-flex items-center justify-center rounded-[40px] bg-life-accent text-life-text font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
                        >
                          {t('scheduleCall')}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="py-8 px-6 rounded-2xl bg-gradient-to-b from-life-primary/10 to-life-accent/10 text-center">
                    <h2 className="text-lg font-bold text-life-text mb-2">{t('newsletterTitle')}</h2>
                    <p className="text-life-text/85 text-sm mb-4">{t('newsletterSubtitle')}</p>
                    <Link
                      href={contactPath}
                      className="inline-flex items-center justify-center rounded-[40px] bg-life-primary text-white font-semibold px-6 py-2.5 text-sm hover:opacity-90 transition-opacity"
                    >
                      {t('subscribeNow')}
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    return (
      <div className="flex flex-col min-h-screen font-sora">
        <main className="flex-1">
          <div className="container max-w-3xl py-12 px-4">
            <h1 className="text-2xl font-bold text-red-600">
              {locale === 'es' ? 'Error al cargar el artículo' : "Error en carregar l'article"}
            </h1>
            <p className="text-life-text/80 mt-4">
              {locale === 'es'
                ? 'No se pudo cargar el artículo solicitado.'
                : "No s'ha pogut carregar l'article sol·licitat."}
            </p>
            <Link
              href={locale === 'ca' ? '/blog' : `/${locale}/blog`}
              className="inline-flex items-center gap-2 text-life-primary font-medium mt-4 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {locale === 'es' ? 'Volver al blog' : 'Tornar al blog'}
            </Link>
          </div>
        </main>
      </div>
    )
  }
}
