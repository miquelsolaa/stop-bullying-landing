import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacte | Stop Bullying i Mobbing a Barcelona",
  description: "Posa't en contacte amb nosaltres per a qualsevol consulta o per reservar la teva primera sessió.",
}

export default function ContacteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}