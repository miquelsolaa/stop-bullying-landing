import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">Stop Bullying</span>
        </Link>
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
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contacte">
            <Button className="bg-rose-500 hover:bg-rose-600">Contacta'ns</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}