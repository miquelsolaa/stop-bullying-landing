import { Metadata } from "next"
import { generateMetadata } from "../metadata"

export const metadata: Metadata = generateMetadata({
  title: "Stop Bullying y Mobbing | Ayuda y Soporte en Barcelona",
  description: "Ayudamos a niños y adultos a desarrollar habilidades sociales para enfrentar el bullying y los retos interpersonales.",
  path: "/es"
})

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}