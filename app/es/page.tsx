"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Award, ArrowRight, Calendar, CheckCircle, Users, Star } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">Stop Bullying</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Inicio
            </Link>
            <Link href="#sobre-nosotros" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Beneficios
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Testimonios
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Cómo Funciona
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/es/contacto">
              <Button className="bg-rose-500 hover:bg-rose-600">Contáctanos</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative py-20 md:py-28 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Supera el bullying o mobbing y mejora tus habilidades sociales
              </h1>
              <p className="text-xl text-gray-700">
                Resultados desde la primera sesión. Programa personalizado en 6-8 sesiones.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/contacte">
                  <Button size="lg" className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-lg">
                    Reserva una consulta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/image.png?height=800&width=600"
                alt="Coaching de comunicación"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-nosotros" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sobre Nosotros</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto"></div>
              <p className="text-lg text-gray-700 mt-6">
                En <span className="font-semibold">Stop Bullying o Mobbing</span>, nos dedicamos a ayudar a niños y
                adultos a desarrollar habilidades sociales para enfrentar el bullying o mobbing y los desafíos interpersonales.
                Nuestra coach, con más de 10 años de experiencia, ha ayudado a cientos de personas a superar situaciones
                difíciles y a construir relaciones saludables.
              </p>
              <p className="text-lg text-gray-700">
                Nuestro enfoque personalizado garantiza resultados efectivos en pocas sesiones, proporcionando
                herramientas prácticas que se pueden aplicar inmediatamente en situaciones reales.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-16 md:py-24 bg-amber-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Beneficios</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold">Mejora tu confianza y comunicación</h3>
                  <p className="text-gray-600">
                    Aprende a expresarte con seguridad y claridad en cualquier situación social, construyendo una
                    autoestima sólida.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold">Aprende a enfrentar situaciones difíciles</h3>
                  <p className="text-gray-600">
                    Desarrolla estrategias efectivas para gestionar conflictos y responder adecuadamente ante el
                    bullying o mobbing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Resultados efectivos en pocos pasos</h3>
                  <p className="text-gray-600">
                    Nuestro método probado proporciona herramientas prácticas que puedes aplicar inmediatamente para ver
                    cambios reales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Lo Que Dicen Nuestros Clientes</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "Mi hijo ha experimentado un cambio increíble después de solo 6 sesiones. Ahora tiene las
                    herramientas para enfrentar situaciones difíciles en la escuela y su confianza ha aumentado
                    enormemente."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src="/maria.jpg?height=100&width=100"
                        alt="Testimonio"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">María G.</p>
                      <p className="text-sm text-gray-500">Madre de un niño de 10 años</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "Como adulto que ha sufrido mobbing en el trabajo, este programa me ha dado la confianza y las
                    habilidades para establecer límites saludables y comunicarme asertivamente. Ha cambiado mi vida
                    profesional."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src="/jordi.jpg?height=100&width=100"
                        alt="Testimonio"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Jorge P.</p>
                      <p className="text-sm text-gray-500">Profesional de 35 años</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cómo Funciona</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <Calendar className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">1. Reserva</h3>
                <p className="text-gray-600">
                  Programa una consulta para evaluar tus necesidades específicas.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <Users className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">2. Evaluación</h3>
                <p className="text-gray-600">Creamos un plan personalizado basado en tu situación y objetivos.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <MessageCircle className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">3. Sesiones</h3>
                <p className="text-gray-600">
                  Participa en 6-8 sesiones prácticas para desarrollar nuevas habilidades.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <CheckCircle className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">4. Resultados</h3>
                <p className="text-gray-600">
                  Aplica las nuevas habilidades en la vida real y ve los cambios positivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">¡Reserva tu sesión hoy mismo!</h2>
            <p className="text-xl max-w-2xl mx-auto">
              No esperes más para mejorar tus habilidades sociales y superar el bullying o mobbing. El cambio comienza con un
              primer paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100 text-lg">
                Reserva una consulta
              </Button>
              <Button size="lg" className="border-white text-white hover:bg-white/10 text-lg">
                Más información
              </Button>
            </div>
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

