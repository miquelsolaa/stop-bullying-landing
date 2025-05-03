import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacte',
  description: 'Contacta amb nosaltres per reservar la teva primera sessió o fer-nos qualsevol consulta. Estem aquí per ajudar-te a superar el bullying o mobbing.',
  openGraph: {
    title: 'Contacte',
    description: 'Contacta amb nosaltres per reservar la teva primera sessió o fer-nos qualsevol consulta. Estem aquí per ajudar-te a superar el bullying o mobbing.',
    type: 'website',
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}