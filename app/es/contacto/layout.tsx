import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Contacto",
  },
  description: "Ponte en contacto con nosotros para cualquier consulta o para reservar tu primera sesión.",
}

export default function ContacteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}