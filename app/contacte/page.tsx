import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Contacte",
}

export default function ContactePage() {
  // Your contact page content
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">Stop Bullying</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#inici" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Inici
            </Link>
            <Link href="/#sobre-nosaltres" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Sobre Nosaltres
            </Link>
            <Link href="/#beneficis" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Beneficis
            </Link>
            <Link href="/#testimonis" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Testimonis
            </Link>
            <Link href="/#com-funciona" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Com Funciona
            </Link>
          </nav>
          <Button className="bg-rose-500 hover:bg-rose-600">Contacta'ns</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Posa't en contacte amb nosaltres</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Reserva la teva primera sessió o fes-nos qualsevol consulta. Estem aquí per ajudar-te!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Envia'ns un missatge</h2>
                  <p className="text-gray-600">
                    Omple el formulari i ens posarem en contacte amb tu el més aviat possible.
                  </p>
                </div>

                <form 
                                  name="contact" 
                                  method="POST"
                                  data-netlify="true"
                                  netlify-honeypot="bot-field"
                                  className="space-y-6"
                                >
                                  <input type="hidden" name="form-name" value="contact" />
                                  <div hidden>
                                    <input name="bot-field" />
                                  </div>
                  
                                  <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                      Nom
                                    </label>
                                    <Input name="name" id="name" type="text" placeholder="El teu nom complet" required className="w-full" />
                                  </div>
                  
                                  <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                      Correu electrònic
                                    </label>
                                    <Input name="email" id="email" type="email" placeholder="El teu correu electrònic" required className="w-full" />
                                  </div>
                  
                                  <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                      Telèfon
                                    </label>
                                    <Input name="phone" id="phone" type="tel" placeholder="El teu número de telèfon" className="w-full" />
                                  </div>
                  
                                  <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                      Missatge
                                    </label>
                                    <Textarea
                                      name="message"
                                      id="message"
                                      placeholder="Explica'ns com podem ajudar-te"
                                      required
                                      className="w-full min-h-[150px]"
                                    />
                                  </div>

                  <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                    Envia la teva sol·licitud
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-rose-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">Informació de contacte</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Correu electrònic</h3>
                        <p className="text-gray-600">info@stopbullying.cat</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Telèfon</h3>
                        <p className="text-gray-600">+34 93 123 45 67</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Adreça</h3>
                        <p className="text-gray-600">
                          Carrer Principal, 123
                          <br />
                          08221 Terrassa, Barcelona
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Mapa de localització"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Fes el primer pas cap a una comunicació més efectiva</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Contacta'ns avui mateix i comença el teu camí cap a relacions més saludables i una millor autoestima.
            </p>
            <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100 text-lg">
              Reserva una consulta gratuïta
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
                Servei de coaching de comunicació basat a Terrassa que ajuda nens i adults a desenvolupar habilitats
                socials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacte</h3>
              <p className="text-gray-400">Terrassa, Barcelona</p>
              <p className="text-gray-400">info@stopbullying.cat</p>
              <p className="text-gray-400">+34 93 123 45 67</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Segueix-nos</h3>
              <div className="flex gap-4">
                {/* Social media icons remain the same */}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Stop Bullying / Mobbing. Tots els drets reservats.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

