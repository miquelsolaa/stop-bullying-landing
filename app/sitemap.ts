import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stopbullyingmobbing.com'

  const routes = [
    '',
    '/contacte',
    '/es',
    '/es/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' || route === '/es' ? 1 : 0.8,
  }))

  return routes
}