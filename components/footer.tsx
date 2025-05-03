import Link from "next/link"
import { Heart, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-bold">Stop Bullying</span>
            </div>
            <p className="text-gray-400">
            Servei de coaching de comunicació a Terrassa, especialitzat en ajudar nens i adults a superar el bullying, el mobbing i a desenvolupar habilitats socials per millorar les seves relacions personals i laborals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacte</h3>
            <p className="text-gray-400">Terrassa, Barcelona</p>
            <a 
              href="mailto:contacte@stopbullyingmobbing.com" 
              className="text-gray-400 hover:text-white transition-colors block"
            >
              contacte@stopbullyingmobbing.com
            </a>
            <a 
              href="tel:+34646357801" 
              className="text-gray-400 hover:text-white transition-colors block mt-2"
            >
              +34 646 35 78 01
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Segueix-nos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a 
                href="https://www.facebook.com/montserratespallargas"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Síguenos en Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Stop Bullying o Mobbing. Tots els drets reservats. Powered by{' '}
            <Link 
              href="https://codixperts.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-footer"
              aria-label="Visita la web de CodiXperts, nuestro desarrollador web"
            >
              CodiXperts
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}