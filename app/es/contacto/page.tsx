"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/es" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">Stop Bullying</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/es#inicio" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Inicio
            </Link>
            <Link href="/es#sobre-nosotros" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/es#beneficios" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Beneficios
            </Link>
            <Link href="/es#testimonios" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Testimonios
            </Link>
            <Link href="/es#como-funciona" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Cómo Funciona
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="bg-rose-500 hover:bg-rose-600" aria-current="page">
              Contáctanos
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Ponte en contacto con nosotros</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Reserva tu primera sesión o haznos cualquier consulta. ¡Estamos aquí para ayudarte!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-12 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Envíanos un mensaje</h2>
                  <p className="text-gray-600">
                    Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="name" type="text" placeholder="Tu nombre completo" required className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" placeholder="Tu correo electrónico" required className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <Input id="phone" type="tel" placeholder="Tu número de teléfono" className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos cómo podemos ayudarte"
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                    Envía tu solicitud
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-rose-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Correo electrónico</h3>
                        <p className="text-gray-600">info@stopbullying.cat</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Teléfono</h3>
                        <p className="text-gray-600">+34 93 123 45 67</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Dirección</h3>
                        <p className="text-gray-600">
                          Calle Principal, 123
                          <br />
                          08221 Terrassa, Barcelona
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*<div className="relative h-[300px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Mapa de localización"
                    fill
                    className="object-cover"
                  />
                </div>*/}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Da el primer paso hacia una comunicación más efectiva</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Contáctanos hoy mismo y comienza tu camino hacia relaciones más saludables y una mejor autoestima.
            </p>
            <Button
              size="lg"
              className="bg-white text-rose-500 hover:bg-gray-100 text-lg"
              onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
            >
              Reserva una consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-rose-400" />
                <span className="text-xl font-bold">Stop Bullying</span>
              </div>
              <p className="text-gray-400">
                Servicio de coaching de comunicación basado en Terrassa que ayuda a niños y adultos a desarrollar
                habilidades sociales.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">Terrassa, Barcelona</p>
              <p className="text-gray-400">info@stopbullying.cat</p>
              <p className="text-gray-400">+34 93 123 45 67</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

