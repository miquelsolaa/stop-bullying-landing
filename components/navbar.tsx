"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [])

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">Stop Bullying</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
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
          <Link href="/" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Inici
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Blog
          </Link>
          <Link href="/#sobre-nosaltres" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Sobre Nosaltres
          </Link>
          <Link href="/#beneficis" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Beneficis
          </Link>
          <Link href="/#testimonis" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Testimonis
          </Link>
          <Link href="/#com-funciona" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Com Funciona
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contacte">
            <Button className="bg-rose-500 hover:bg-rose-600">Contacta'ns</Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <nav className="container py-4 flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inici
              </Link>
              <Link 
                href="/blog" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/#sobre-nosaltres" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosaltres
              </Link>
              <Link 
                href="/#beneficis" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beneficis
              </Link>
              <Link 
                href="/#testimonis" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonis
              </Link>
              <Link 
                href="/#com-funciona" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Com Funciona
              </Link>
              <div className="flex items-center gap-4 pt-2">
                <LanguageSwitcher />
                <Link href="/contacte" onClick={() => setIsOpen(false)}>
                  <Button className="bg-rose-500 hover:bg-rose-600">Contacta'ns</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}