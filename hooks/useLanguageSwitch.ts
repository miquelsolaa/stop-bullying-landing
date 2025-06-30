"use client"

import { usePathname, useRouter } from "next/navigation"
import { getTranslatedSlug } from "@/utils/postMapping"

export function useLanguageSwitch() {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = () => {
    // Extract locale and path from current URL
    const pathSegments = pathname.split('/')
    const currentLocale = pathSegments[1] // 'ca' or 'es'
    const remainingPath = pathSegments.slice(2).join('/') // rest of the path
    
    // Determine new locale
    const newLocale = currentLocale === 'ca' ? 'es' : 'ca'
    
    // Check if we're on a blog post page
    if (remainingPath.startsWith('blog/')) {
      const slug = remainingPath.replace('blog/', '')
      
      // Try to get the translated slug
      const translatedSlug = getTranslatedSlug(slug, currentLocale, newLocale)
      
      if (translatedSlug) {
        // If we have a translation, go to the translated post
        const newPath = `/${newLocale}/blog/${translatedSlug}`
        router.push(newPath)
        return
      }
      // If no translation exists, fall back to the blog index
      const newPath = `/${newLocale}/blog`
      router.push(newPath)
      return
    }
    
    // For non-blog pages, use the standard approach
    const newPath = `/${newLocale}${remainingPath ? `/${remainingPath}` : ''}`
    router.push(newPath)
  }

  // Determine current locale and display text
  const currentLocale = pathname.startsWith("/es") ? "es" : "ca"
  const displayText = currentLocale === "es" ? "CAT" : "ESP"

  return {
    switchLanguage,
    currentLocale,
    displayText
  }
} 