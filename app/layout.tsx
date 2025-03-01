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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
