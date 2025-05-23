import { getBlogPosts } from '@/utils/getBlogPosts'
import { NavbarES } from '@/components/navbar-es'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Stop Bullying y Mobbing',
  description: 'Artículos y recursos sobre bullying, mobbing y habilidades sociales',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarES />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Blog</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Artículos y recursos sobre bullying, mobbing y habilidades sociales
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
                      priority={post.thumbnail.includes('image.png') || post.thumbnail.includes('mobbing.png')}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={75}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </time>
                    <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <Link 
                      href={`/es/blog/${post.slug}`}
                      className="text-rose-500 font-medium hover:text-rose-600"
                    >
                      Leer más →
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