"use client";

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = () => {
    const isSpanish = pathname.startsWith("/es")
    const basePath = isSpanish ? pathname.replace("/es", "") : pathname
    const newPathname = isSpanish 
      ? basePath.replace("/contacto", "/contacte")
      : `/es${basePath.replace("/contacte", "/contacto")}`

    // If switching to Catalan and we're at the root Spanish page
    if (isSpanish && basePath === "") {
      router.push("/")
    } else {
      router.push(newPathname)
    }
  }

  return (
    <Button onClick={switchLanguage} variant="outline" size="sm">
      {pathname.startsWith("/es") ? "CAT" : "ESP"}
    </Button>
  )
}

