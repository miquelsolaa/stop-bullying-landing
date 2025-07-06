import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/utils/getBlogPosts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://stopbullyingmobbing.com'

  // Static routes amb localePrefix: 'as-needed' 
  // El català (locale per defecte) no té prefix, l'espanyol sí
  const staticRoutes = [
    '', // pàgina principal (català per defecte)
    '/contacte', // contacte català (sense prefix)
    '/blog', // blog català (sense prefix)
    '/es', // pàgina principal espanyol
    '/es/blog', // blog espanyol
    '/es/contacte', // contacte espanyol
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
    // Posts en català sense prefix (locale per defecte)
    ...postsCa.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Posts en espanyol amb prefix /es
    ...postsEs.map((post: any) => ({
      url: `${baseUrl}/es/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticRoutes, ...blogRoutes]
}