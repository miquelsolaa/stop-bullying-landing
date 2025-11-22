import { getBlogPosts } from '@/utils/getBlogPosts'
import { Navbar } from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { generateMetadata as baseGenerateMetadata } from '../../metadata'
import type { Metadata } from 'next'

// Forçar render dinàmic per evitar problemes amb SSG
export const dynamic = 'force-dynamic'
export const revalidate = 0

const titles = {
  ca: "Blog sobre bullying i mobbing | Consells i recursos útils",
  es: "Blog sobre bullying y mobbing | Consejos y recursos útiles"
};
const descriptions = {
  ca: "Descobreix articles, guies i testimonis per superar el bullying i el mobbing a Barcelona. Consells pràctics i experiències reals.",
  es: "Descubre artículos, guías y testimonios para superar el bullying y el mobbing en Barcelona. Consejos prácticos y experiencias reales."
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale === 'es' ? 'es' : 'ca';
  return baseGenerateMetadata({
    title: titles[locale],
    description: descriptions[locale],
    path: '/blog'
  });
}

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const posts = await getBlogPosts(params.locale)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Blog</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {params.locale === 'es' ? 'Artículos y recursos sobre bullying, mobbing y habilidades sociales' : 'Articles i recursos sobre bullying, mobbing i habilitats socials'}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.image || post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString(params.locale === 'es' ? 'es-ES' : 'ca-ES')}
                    </time>
                    <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <Link 
                      href={`/${params.locale}/blog/${post.slug}`}
                      className="text-rose-500 font-medium hover:text-rose-600"
                    >
                      {params.locale === 'es' ? 'Leer más →' : 'Llegir més →'}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}