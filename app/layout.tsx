import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { defaultMetadata } from './metadata'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  ...defaultMetadata,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = currentPath.startsWith('/es') ? 'es' : 'ca'

  return (
    <html lang={lang}>
      <head />
      <body>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </body>
    </html>
  )
}