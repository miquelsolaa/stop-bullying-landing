import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Stop Bullying i Mobbing | Ajuda i Suport a Barcelona',
    template: '%s | Stop Bullying i Mobbing a Barcelona'
  },
  description: "T'ajudem a superar el bullying o mobbing amb sessions personalitzades a Barcelona. Consulta amb una coach experta.",
  keywords: [
    'bullying a Barcelona',
    'mobbing a Barcelona',
    'coach bullying Barcelona',
    'ajuda bullying adults Barcelona',
    'sessions coaching mobbing',
    'com superar el bullying',
    'teràpia per bullying Barcelona',
    'tractament mobbing laboral Barcelona',
    'superar el bullying escolar',
    'coach per a víctimes de mobbing laboral',
    'ajuda psicològica bullying i mobbing',
    'teràpia especialitzada per bullying infantil',
    'sessions individuals bullying',
    'suport emocional mobbing feina',
    'especialista bullying nens adolescents',
    'Terrassa',
    'Barcelona',
  ],
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
    url: 'https://stopbullyingmobbing.com',
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
