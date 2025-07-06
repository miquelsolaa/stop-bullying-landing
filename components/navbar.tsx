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

  // Generar el prefix correcte per als links
  const getLocalePath = (path: string = '') => {
    // Si és un anchor (comença amb #)
    if (path.startsWith('#')) {
      if (locale === routing.defaultLocale) {
        return path // només el anchor, ex: #sobre-nosaltres
      }
      return `/${locale}${path}` // ex: /es#sobre-nosaltres
    }
    
    // Per a paths normals
    if (locale === routing.defaultLocale) {
      // Català: sense prefix
      return path ? `/${path}` : '/'
    }
    // Espanyol: amb prefix
    return path ? `/${locale}/${path}` : `/${locale}`
  }

  // Obtenir el path de contacte segons l'idioma
  const getContactPath = () => {
    const contactPath = 'contacte' // Sempre utilitzar 'contacte' per ambdós idiomes
    return getLocalePath(contactPath)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [])

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href={getLocalePath()} className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">Stop Bullying</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          aria-label={t('openMenu')}
          aria-expanded="false"
          aria-controls="mobile-menu"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href={getLocalePath()} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('home')}
          </Link>
          <Link href={getLocalePath('blog')} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('blog')}
          </Link>
          <Link href={getLocalePath('#sobre-nosaltres')} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('about')}
          </Link>
          <Link href={getLocalePath('#beneficis')} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('benefits')}
          </Link>
          <Link href={getLocalePath('#testimonis')} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('testimonials')}
          </Link>
          <Link href={getLocalePath('#com-funciona')} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('howItWorks')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href={getContactPath()}>
            <Button className="bg-rose-500 hover:bg-rose-600">{t('contactUs')}</Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <nav className="container py-4 flex flex-col gap-4">
              <Link 
                href={getLocalePath()}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                href={getLocalePath('blog')}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('blog')}
              </Link>
              <Link 
                href={getLocalePath('#sobre-nosaltres')}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                href={getLocalePath('#beneficis')}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('benefits')}
              </Link>
              <Link 
                href={getLocalePath('#testimonis')}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('testimonials')}
              </Link>
              <Link 
                href={getLocalePath('#com-funciona')}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('howItWorks')}
              </Link>
              <div className="flex items-center gap-4 pt-2">
                <LanguageSwitcher />
                <Link href={getContactPath()} onClick={() => setIsOpen(false)}>
                  <Button className="bg-rose-500 hover:bg-rose-600">{t('contactUs')}</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}