import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: "Stop Bullying - %s",
    default: "Stop Bullying - Inici",
  },
  description: "Ajudem a nens i adults a desenvolupar habilitats socials per afrontar el bullying i els reptes interpersonals.",
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
