"use client"

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getTranslatedSlug } from '@/utils/postMapping'

export function useLanguageSwitch() {
  const locale = useLocale() as 'ca' | 'es'
  const pathname = usePathname()
  const router = useRouter()

  // Detectar si estàs en una pàgina d'article
  const isInBlogPost = () => {
    const segments = pathname.split('/').filter(Boolean)
    
    if (locale === routing.defaultLocale) {
      // Per al català: /blog/slug
      return segments.length === 2 && segments[0] === 'blog' && segments[1]
    } else {
      // Per altres idiomes: /es/blog/slug  
      return segments.length === 3 && segments[0] === locale && segments[1] === 'blog' && segments[2]
    }
  }

  // Detectar si estàs a la pàgina de llista del blog
  const isInBlogList = () => {
    const segments = pathname.split('/').filter(Boolean)
    
    if (locale === routing.defaultLocale) {
      // Per al català: /blog
      return segments.length === 1 && segments[0] === 'blog'
    } else {
      // Per altres idiomes: /es/blog
      return segments.length === 2 && segments[0] === locale && segments[1] === 'blog'
    }
  }

  // Obtenir el slug del path actual
  const getCurrentSlug = () => {
    const segments = pathname.split('/').filter(Boolean)
    
    if (locale === routing.defaultLocale) {
      // Per al català: /blog/slug
      return segments[1] // blog és segments[0], slug és segments[1]
    } else {
      // Per altres idiomes: /es/blog/slug
      return segments[2] // es és segments[0], blog és segments[1], slug és segments[2]
    }
  }

  // Construir el path per un article traduït
  const buildBlogPath = (targetLocale: string, slug: string) => {
    if (targetLocale === routing.defaultLocale) {
      return `/blog/${slug}`
    }
    return `/${targetLocale}/blog/${slug}`
  }

  const switchLanguage = () => {
    const newLocale = locale === 'ca' ? 'es' : 'ca'
    
    // Si estàs en un article del blog, intentar trobar la traducció
    if (isInBlogPost()) {
      const currentSlug = getCurrentSlug()
      if (currentSlug) {
        const translatedSlug = getTranslatedSlug(currentSlug, locale, newLocale)
        
        if (translatedSlug) {
          // Hi ha traducció - navegar a l'article traduït
          const newPath = buildBlogPath(newLocale, translatedSlug)
          router.push(newPath)
          return
        } else {
          // No hi ha traducció - navegar al blog general
          const blogPath = newLocale === routing.defaultLocale ? '/blog' : `/${newLocale}/blog`
          router.push(blogPath)
          return
        }
      }
    }

    // Per totes les altres pàgines, utilitzar la lògica genèrica
    let targetPath = ''
    
    if (newLocale === routing.defaultLocale) {
      // Canviant a català (sense prefix)
      if (pathname.startsWith(`/${locale}`)) {
        targetPath = pathname.replace(`/${locale}`, '') || '/'
      } else {
        targetPath = '/'
      }
    } else {
      // Canviant a espanyol (amb prefix)
      if (pathname === '/') {
        targetPath = `/${newLocale}`
      } else if (pathname.startsWith('/')) {
        targetPath = `/${newLocale}${pathname}`
      } else {
        targetPath = `/${newLocale}/${pathname}`
      }
    }
    
    router.push(targetPath)
  }

  // Determine display text
  const displayText = locale === "es" ? "CAT" : "ESP"

  return {
    switchLanguage,
    currentLocale: locale,
    displayText
  }
} 