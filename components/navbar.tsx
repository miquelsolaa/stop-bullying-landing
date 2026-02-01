"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState, useEffect } from "react"
import { useTranslations, useLocale } from 'next-intl'
import { routing } from '@/i18n/routing'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('navbar')
  const locale = useLocale()

  const getLocalePath = (path: string = '') => {
    if (path.startsWith('#')) {
      if (locale === routing.defaultLocale) {
        return `/${path}`
      }
      return `/${locale}${path}`
    }
    if (locale === routing.defaultLocale) {
      return path ? `/${path}` : '/'
    }
    return path ? `/${locale}/${path}` : `/${locale}`
  }

  const getContactPath = () => {
    return getLocalePath('contacte')
  }

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-life-text/10 font-sora">
      <div className="container flex h-16 items-center justify-between">
        <Link href={getLocalePath()} className="flex items-center gap-2 text-life-text hover:opacity-80 transition-opacity">
          <Heart className="h-6 w-6 text-life-primary" />
          <span className="text-lg font-semibold tracking-tight">Stop Bullying</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-md hover:bg-life-text/5 transition-colors"
          aria-label={t('openMenu')}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-life-text" />
          ) : (
            <Menu className="h-6 w-6 text-life-text" />
          )}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <Link href={getLocalePath('#sobre-nosaltres')} className="text-sm font-medium text-life-text/80 hover:text-life-primary transition-colors">
            {t('about')}
          </Link>
          <Link href={getLocalePath('#a-qui-ajudem')} className="text-sm font-medium text-life-text/80 hover:text-life-primary transition-colors">
            {t('whoWeHelp')}
          </Link>
          <Link href={getLocalePath('#proces')} className="text-sm font-medium text-life-text/80 hover:text-life-primary transition-colors">
            {t('process')}
          </Link>
          <Link href={getLocalePath('#serveis')} className="text-sm font-medium text-life-text/80 hover:text-life-primary transition-colors">
            {t('services')}
          </Link>
          <Link href={getLocalePath('#faq')} className="text-sm font-medium text-life-text/80 hover:text-life-primary transition-colors">
            {t('faq')}
          </Link>
          <Link href={getLocalePath('blog')} className="text-sm font-medium text-life-text/80 hover:text-life-primary transition-colors">
            {t('blog')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href={getContactPath()}>
            <Button className="bg-life-accent text-life-text hover:opacity-90 font-semibold rounded-[40px] px-5">
              {t('bookSession')}
            </Button>
          </Link>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="absolute top-16 left-0 right-0 bg-white border-b border-life-text/10 shadow-lg md:hidden">
            <nav className="container py-6 flex flex-col gap-4">
              <Link href={getLocalePath('#sobre-nosaltres')} className="text-sm font-medium text-life-text hover:text-life-primary" onClick={() => setIsOpen(false)}>
                {t('about')}
              </Link>
              <Link href={getLocalePath('#a-qui-ajudem')} className="text-sm font-medium text-life-text hover:text-life-primary" onClick={() => setIsOpen(false)}>
                {t('whoWeHelp')}
              </Link>
              <Link href={getLocalePath('#proces')} className="text-sm font-medium text-life-text hover:text-life-primary" onClick={() => setIsOpen(false)}>
                {t('process')}
              </Link>
              <Link href={getLocalePath('#serveis')} className="text-sm font-medium text-life-text hover:text-life-primary" onClick={() => setIsOpen(false)}>
                {t('services')}
              </Link>
              <Link href={getLocalePath('#faq')} className="text-sm font-medium text-life-text hover:text-life-primary" onClick={() => setIsOpen(false)}>
                {t('faq')}
              </Link>
              <Link href={getLocalePath('blog')} className="text-sm font-medium text-life-text hover:text-life-primary" onClick={() => setIsOpen(false)}>
                {t('blog')}
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-life-text/10">
                <LanguageSwitcher />
                <Link href={getContactPath()} onClick={() => setIsOpen(false)} className="w-full">
                  <Button className="w-full bg-life-accent text-life-text hover:opacity-90 font-semibold rounded-[40px]">{t('bookSession')}</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
