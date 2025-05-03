import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { defaultMetadata } from './metadata'
import { Footer } from '@/components/footer'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

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
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
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