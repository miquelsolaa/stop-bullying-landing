import { getBlogPosts } from '@/utils/getBlogPosts'
import { Navbar } from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { generateMetadata } from '../../metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: "Blog",
  description: "Articles i recursos sobre bullying, mobbing i habilitats socials. Consells d'experts per superar l'assetjament escolar i laboral.",
  path: "/blog"
})

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Blog</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Articles i recursos sobre bullying, mobbing i habilitats socials
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('ca-ES')}
                    </time>
                    <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-rose-500 font-medium hover:text-rose-600"
                    >
                      Llegir més →
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