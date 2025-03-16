import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-bold">Stop Bullying</span>
            </div>
            <p className="text-gray-400">
              Servei de coaching de comunicació basat a Terrassa que ajuda nens i adults a desenvolupar habilitats
              socials.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacte</h3>
            <p className="text-gray-400">Terrassa, Barcelona</p>
            <a 
              href="mailto:contacte@stopbullyingmobbing.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              contacte@stopbullyingmobbing.com
            </a>
            <br></br>
            <a 
              href="tel:+34646357801" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              +34 646 35 78 01
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Segueix-nos</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/montserratespallargas" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Stop Bullying o Mobbing. Tots els drets reservats. Powered by{' '}
            <Link href="https://codixperts.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">CodiXperts</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}