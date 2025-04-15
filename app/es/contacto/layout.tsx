import { Metadata } from "next"
import { generateMetadata } from "../../metadata"

export const metadata: Metadata = generateMetadata({
  title: "Contacto | Stop Bullying y Mobbing en Barcelona",
  description: "Ponte en contacto con nosotros para cualquier consulta o para reservar tu primera sesión. Servicio especializado en coaching de comunicación en Terrassa.",
  path: "/es/contacto"
})

export default function SpanishContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}