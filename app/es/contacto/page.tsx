"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState } from "react"
import { NavbarES } from "@/components/navbar-es"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(event.currentTarget);
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitStatus('success');
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarES />

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

                <form onSubmit={handleSubmit} name="contact" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input name="name" id="name" type="text" placeholder="Tu nombre completo" required className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <Input name="email" id="email" type="email" placeholder="Tu correo electrónico" required className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <Input name="telefon" id="phone" type="tel" placeholder="Tu número de teléfono" className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="missatge"
                      placeholder="Cuéntanos cómo podemos ayudarte"
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-rose-500 hover:bg-rose-600" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Envia tu solicitud"}
                  </Button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">
                      Gracias por tu mensaje! Te contactaremos en breve.
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      Ha habido un error. Por favor, vuelve a intentarlo más tarde.
                    </p>
                  )}
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
                        <p className="text-gray-600">contacte@stopbullyingmobbing.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Teléfono</h3>
                        <p className="text-gray-600">+34 646 35 78 01</p>
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
            <Link href="/contacto">
            <Button
              size="lg"
              className="bg-white text-rose-500 hover:bg-gray-100 text-lg"
              onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
            >
              Reserva una consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
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
              <p className="text-gray-400">hcomunicativesisocials@gmail.com</p>
              <p className="text-gray-400">+34 646 35 78 01</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/montserratespallargas" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
            &copy; {new Date().getFullYear()} Stop Bullying o Mobbing. Todos los derechos reservados. Powered by{' '}
            <Link href="https://codixperts.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">CodiXperts</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

