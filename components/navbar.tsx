"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState, useEffect } from "react"
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('navbar')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'ca' // Default to 'ca' if no locale

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [])

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
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
          <Link href={`/${locale}`} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('home')}
          </Link>
          <Link href={`/${locale}/blog`} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('blog')}
          </Link>
          <Link href={`/${locale}/#sobre-nosaltres`} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('about')}
          </Link>
          <Link href={`/${locale}/#beneficis`} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('benefits')}
          </Link>
          <Link href={`/${locale}/#testimonis`} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('testimonials')}
          </Link>
          <Link href={`/${locale}/#com-funciona`} className="text-sm font-medium hover:text-rose-500 transition-colors">
            {t('howItWorks')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href={`/${locale}/contacte`}>
            <Button className="bg-rose-500 hover:bg-rose-600">{t('contactUs')}</Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <nav className="container py-4 flex flex-col gap-4">
              <Link 
                href={`/${locale}`}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                href={`/${locale}/blog`}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('blog')}
              </Link>
              <Link 
                href={`/${locale}/#sobre-nosaltres`}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                href={`/${locale}/#beneficis`}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('benefits')}
              </Link>
              <Link 
                href={`/${locale}/#testimonis`}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('testimonials')}
              </Link>
              <Link 
                href={`/${locale}/#com-funciona`}
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('howItWorks')}
              </Link>
              <div className="flex items-center gap-4 pt-2">
                <LanguageSwitcher />
                <Link href={`/${locale}/contacte`} onClick={() => setIsOpen(false)}>
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