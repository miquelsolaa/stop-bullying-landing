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

  // Get blog posts per idioma
  const postsCa = await getBlogPosts('ca')
  const postsEs = await getBlogPosts('es')
  const blogRoutes = [
    ...postsCa.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...postsEs.map((post: any) => ({
      url: `${baseUrl}/es/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticRoutes, ...blogRoutes]
}