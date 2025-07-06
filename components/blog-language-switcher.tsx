"use client"

import { Button } from "@/components/ui/button"
import { getTranslatedSlug } from "@/utils/postMapping"
import { usePathname, useRouter } from "next/navigation"
import { Languages } from "lucide-react"
import { routing } from '@/i18n/routing'

export function BlogLanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  
  // Detectar el locale actual correctament
  const getLocaleFromPathname = (path: string) => {
    const segments = path.split('/').filter(Boolean)
    const firstSegment = segments[0]
    
    // Si el primer segment és un locale suportat, el retornem
    if (routing.locales.includes(firstSegment as any)) {
      return firstSegment
    }
    
    // Si no, és el locale per defecte (català sense prefix)
    return routing.defaultLocale
  }

  // Obtenir el slug del path
  const getSlugFromPath = (path: string, locale: string) => {
    const segments = path.split('/').filter(Boolean)
    
    if (locale === routing.defaultLocale) {
      // Per al català: /blog/slug
      return segments[1] // blog és segments[0], slug és segments[1]
    } else {
      // Per altres idiomes: /es/blog/slug
      return segments[2] // es és segments[0], blog és segments[1], slug és segments[2]
    }
  }

  // Construir el nou path amb el locale correcte
  const buildLocalePath = (locale: string, slug: string) => {
    if (locale === routing.defaultLocale) {
      return `/blog/${slug}`
    }
    return `/${locale}/blog/${slug}`
  }
  
  const currentLocale = getLocaleFromPathname(pathname) as 'ca' | 'es'
  const slug = getSlugFromPath(pathname, currentLocale)
  
  // Check if there's a translation available
  const newLocale = currentLocale === 'ca' ? 'es' : 'ca'
  const translatedSlug = getTranslatedSlug(slug, currentLocale, newLocale)
  
  if (!translatedSlug) {
    return null // No translation available
  }

  const handleLanguageSwitch = () => {
    const newPath = buildLocalePath(newLocale, translatedSlug)
    router.push(newPath)
  }

  const localeNames = {
    ca: 'Català',
    es: 'Español'
  }

  return (
    <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg border">
      <Languages className="h-4 w-4 text-gray-600" />
      <span className="text-sm text-gray-600">
        {currentLocale === 'es' ? 'Disponible en:' : 'Disponible en:'}
      </span>
      <Button 
        onClick={handleLanguageSwitch} 
        variant="outline" 
        size="sm"
        className="text-xs"
      >
        {localeNames[newLocale]}
      </Button>
    </div>
  )
} 