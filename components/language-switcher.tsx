"use client";

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = () => {
    // Extract locale and path from current URL
    const pathSegments = pathname.split('/')
    const currentLocale = pathSegments[1] // 'ca' or 'es'
    const remainingPath = pathSegments.slice(2).join('/') // rest of the path
    
    // Determine new locale
    const newLocale = currentLocale === 'ca' ? 'es' : 'ca'
    
    // Build new path
    const newPath = `/${newLocale}${remainingPath ? `/${remainingPath}` : ''}`
    
    router.push(newPath)
  }

  // Determine current locale and display text
  const currentLocale = pathname.startsWith("/es") ? "es" : "ca"
  const displayText = currentLocale === "es" ? "CAT" : "ESP"

  return (
    <Button onClick={switchLanguage} variant="outline" size="sm">
      {displayText}
    </Button>
  )
}

