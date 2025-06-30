import Link from "next/link"
import { Heart, Facebook } from "lucide-react"
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-bold">{t('brand')}</span>
            </div>
            <p className="text-gray-400">
              {t('desc')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <p className="text-gray-400">{t('location')}</p>
            <a 
              href="mailto:contacte@stopbullyingmobbing.com" 
              className="text-gray-400 hover:text-white transition-colors block"
            >
              {t('email')}
            </a>
            <a 
              href="tel:+34646357801" 
              className="text-gray-400 hover:text-white transition-colors block mt-2"
            >
              {t('phone')}
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('follow')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a 
                href="https://www.facebook.com/montserratespallargas"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={t('facebook')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">{t('facebook')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t('brand')}. {t('copyright')} {t('powered')} <Link 
              href="https://codixperts.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-footer"
              aria-label="Visita la web de CodiXperts, nuestro desarrollador web"
            >
              {t('developer')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}