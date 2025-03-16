import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/utils/getBlogPosts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://stopbullyingmobbing.com'

  // Static routes
  const staticRoutes = [
    '',
    '/contacte',
    '/blog',
    '/es',
    '/es/blog',
    '/es/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' || route === '/es' ? 1 : 0.8,
  }))

  // Get blog posts
  const posts = await getBlogPosts()
  const blogRoutes = posts.map((post) => [
    {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]).flat()

  return [...staticRoutes, ...blogRoutes]
}