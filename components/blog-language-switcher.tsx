"use client"

import { Button } from "@/components/ui/button"
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch"
import { getTranslatedSlug } from "@/utils/postMapping"
import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"

export function BlogLanguageSwitcher() {
  const pathname = usePathname()
  const { switchLanguage } = useLanguageSwitch()
  
  // Extract current slug and locale
  const pathSegments = pathname.split('/')
  const currentLocale = pathSegments[1] as 'ca' | 'es'
  const slug = pathSegments[3] // blog/[locale]/[slug]
  
  // Check if there's a translation available
  const newLocale = currentLocale === 'ca' ? 'es' : 'ca'
  const translatedSlug = getTranslatedSlug(slug, currentLocale, newLocale)
  
  if (!translatedSlug) {
    return null // No translation available
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
        onClick={switchLanguage} 
        variant="outline" 
        size="sm"
        className="text-xs"
      >
        {localeNames[newLocale]}
      </Button>
    </div>
  )
} 