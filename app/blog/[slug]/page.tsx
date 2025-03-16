import { getBlogPost } from '@/utils/getBlogPost'
import { getBlogPosts } from '@/utils/getBlogPosts'
import Image from 'next/image'

// Generate static pages for all blog posts
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
      <main className="flex-1">
        <article>
          <div className="relative h-[400px] w-full">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container max-w-3xl py-12">
            <time className="text-gray-500">
              {new Date(post.date).toLocaleDateString('ca-ES')}
            </time>
            <h1 className="text-4xl font-bold mt-4 mb-6">{post.title}</h1>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </main>
    </div>
  )
}