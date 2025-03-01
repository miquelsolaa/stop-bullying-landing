import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Inicio",
  },
  description: "Ayudamos a niños y adultos a desarrollar habilidades sociales para enfrentar el bullying y los retos interpersonales.",
}

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}