"use client";

import { Button } from "@/components/ui/button"
import { useLanguageSwitch } from "@/hooks/useLanguageSwitch"

export function LanguageSwitcher() {
  const { switchLanguage, displayText } = useLanguageSwitch()

  return (
    <Button onClick={switchLanguage} variant="outline" size="sm">
      {displayText}
    </Button>
  )
}

