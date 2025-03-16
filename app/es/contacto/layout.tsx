import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stop Bullying y Mobbing | Ayuda y Soporte en Barcelona",
  description: "Ponte en contacto con nosotros para cualquier consulta o para reservar tu primera sesión. Servicio especializado en coaching de comunicación en Terrassa.",
  keywords: ["bullying", "mobbing", "coaching", "comunicación", "habilidades sociales", "Terrassa", "Barcelona"],
  alternates: {
    canonical: "https://stopbullyingmobbing.com/es/contacto",
    languages: {
      'es': 'https://stopbullyingmobbing.com/es/contacto',
      'ca': 'https://stopbullyingmobbing.com/contacte',
    },
  },
  openGraph: {
    title: "Contacto | Stop Bullying y Mobbing",
    description: "Ponte en contacto con nosotros para cualquier consulta o para reservar tu primera sesión.",
    url: "https://stopbullyingmobbing.com/es/contacto",
    locale: "es_ES",
    type: "website",
  }
}

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}