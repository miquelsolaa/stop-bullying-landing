"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState, useEffect } from "react"

export function NavbarES() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [])

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/es" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">Stop Bullying</span>
        </Link>

        <button
          className="md:hidden p-2"
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

        <nav className="hidden md:flex gap-6">
          <Link href="/es" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Inicio
          </Link>
          <Link href="/es/blog" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Blog
          </Link>
          <Link href="/es#sobre-nosotros" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/es#beneficios" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Beneficios
          </Link>
          <Link href="/es#testimonios" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Testimonios
          </Link>
          <Link href="/es#como-funciona" className="text-sm font-medium hover:text-rose-500 transition-colors">
            Cómo Funciona
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/es/contacto">
            <Button className="bg-rose-500 hover:bg-rose-600">Contáctanos</Button>
          </Link>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <nav className="container py-4 flex flex-col gap-4">
              <Link 
                href="/es" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/es/blog" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/es#sobre-nosotros" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link 
                href="/es#beneficios" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beneficios
              </Link>
              <Link 
                href="/es#testimonios" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonios
              </Link>
              <Link 
                href="/es#como-funciona" 
                className="text-sm font-medium hover:text-rose-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cómo Funciona
              </Link>
              <div className="flex items-center gap-4 pt-2">
                <LanguageSwitcher />
                <Link href="/es/contacto" onClick={() => setIsOpen(false)}>
                  <Button className="bg-rose-500 hover:bg-rose-600">Contáctanos</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}