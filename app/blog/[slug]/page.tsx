import { getBlogPost } from '@/utils/getBlogPost'
import { getBlogPosts } from '@/utils/getBlogPosts'
import { Navbar } from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { generateMetadata as generateSiteMetadata } from '../../metadata'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  return generateSiteMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${params.slug}`
  })
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <article>
          <div className="relative h-[500px] w-full bg-gradient-to-b from-gray-900/90 to-gray-900/90">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
            <div className="container relative h-full flex items-end pb-20">
              <div className="text-white space-y-4 max-w-3xl">
                <time className="text-gray-200 font-medium">
                  {new Date(post.date).toLocaleDateString('ca-ES')}
                </time>
                <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
                <p className="text-xl text-gray-200">{post.description}</p>
              </div>
            </div>
          </div>

          <div className="container max-w-3xl py-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tornar al blog
            </Link>

            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-img:rounded-xl">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <hr className="my-12 border-gray-200" />

            <div className="flex justify-between items-center">
              <Link 
                href="/blog"
                className="text-rose-500 hover:text-rose-600 font-medium"
              >
                ← Articles recents
              </Link>
              <Link 
                href="/contacte"
                className="text-rose-500 hover:text-rose-600 font-medium"
              >
                Contacta'ns →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}