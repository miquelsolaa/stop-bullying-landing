"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale } from 'next-intl'
import { routing } from '@/i18n/routing'

export function useLanguageSwitch() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const switchLanguage = () => {
    // Determine new locale
    const newLocale = locale === 'ca' ? 'es' : 'ca'
    
    // Get the path without the current locale prefix
    let pathWithoutLocale = pathname
    if (locale !== routing.defaultLocale && pathname.startsWith(`/${locale}`)) {
      pathWithoutLocale = pathname.slice(`/${locale}`.length) || '/'
    }
    
    // Build new path with target locale
    let newPath
    if (newLocale === routing.defaultLocale) {
      // Catalan (default locale) - no prefix
      newPath = pathWithoutLocale
    } else {
      // Spanish - add prefix
      newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    }
    
    router.push(newPath)
  }

  // Determine display text
  const displayText = locale === "es" ? "CAT" : "ESP"

  return {
    switchLanguage,
    currentLocale: locale,
    displayText
  }
} 