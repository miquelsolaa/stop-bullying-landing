import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Stop Bullying i Mobbing | Terrassa',
  },
  description: 'Servei especialitzat en coaching de comunicació per superar el bullying i mobbing. Sessions personalitzades a Terrassa amb resultats des de la primera sessió.',
  keywords: ['bullying', 'mobbing', 'habilitats comunicatives', 'comunicació', 'habilitats socials', 'Terrassa', 'Barcelona'],
  authors: [{ name: 'Stop Bullying i Mobbing' }],
  creator: 'Stop Bullying i Mobbing',
  publisher: 'Stop Bullying i Mobbing',
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png' },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Stop Bullying i Mobbing | Coaching de Comunicació',
    description: 'Supera el bullying i mobbing amb sessions personalitzades de coaching. Millora les teves habilitats socials i autoestima.',
    url: 'https://stopbullying.com',
    siteName: 'Stop Bullying i Mobbing',
    locale: 'ca_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: 'Stop Bullying i Mobbing',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the current path to determine language
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
  const lang = currentPath.startsWith('/es') ? 'es' : 'ca'

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}
