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
import { Footer } from "@/components/footer";

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
          <div className="container px-4 text-center space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900">Ponte en contacto con nosotros</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Reserva tu primera sesión o haznos cualquier consulta. ¡Estamos aquí para ayudarte!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-8 max-w-xl">
                <div>
                  <h2 className="text-2xl font-bold mb-4 break-words">Envíanos un mensaje</h2>
                  <p className="text-gray-600 break-words">
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
                <div className="bg-rose-50 p-6 md:p-8 rounded-xl max-w-xl">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 break-words">Información de contacto</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium break-words">Correo electrónico</h3>
                        <a 
                          href="mailto:contacte@stopbullyingmobbing.com" 
                          className="text-gray-600 break-all hover:text-rose-500 transition-colors"
                        >
                          contacte@stopbullyingmobbing.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium break-words">Teléfono</h3>
                        <a 
                          href="tel:+34646357801" 
                          className="text-gray-600 hover:text-rose-500 transition-colors"
                        >
                          +34 646 35 78 01
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">Da el primer paso hacia una comunicación más efectiva</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Contáctanos hoy mismo y comienza tu camino hacia relaciones más saludables y una mejor autoestima.
            </p>
            <Link href="/es/contacto">
              <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100 text-base md:text-lg">
                Reserva una consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

