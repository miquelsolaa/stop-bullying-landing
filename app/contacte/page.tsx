"use client";
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState } from "react";


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
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container px-4 text-center space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900">Posa't en contacte amb nosaltres</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Reserva la teva primera sessió o fes-nos qualsevol consulta. Estem aquí per ajudar-te!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-8 max-w-xl">
                <div>
                  <h2 className="text-2xl font-bold mb-4 break-words">Envia'ns un missatge</h2>
                  <p className="text-gray-600 break-words">
                    Omple el formulari i ens posarem en contacte amb tu el més aviat possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} name="contact" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input id="name" name="name" type="text" placeholder="El teu nom complet" required className="w-full" />
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
                    <Input name="telefon" id="phone" type="tel" placeholder="El teu número de telèfon" className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Missatge
                    </label>
                    <Textarea
                      name="missatge"
                      id="message"
                      placeholder="Explica'ns com podem ajudar-te"
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-rose-500 hover:bg-rose-600" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviant..." : "Envia la teva sol·licitud"}
                  </Button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">
                      Gràcies pel teu missatge! Et contactarem aviat.
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      Hi ha hagut un error. Si us plau, torna-ho a provar més tard.
                    </p>
                  )}
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-rose-50 p-6 md:p-8 rounded-xl max-w-xl">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 break-words">Informació de contacte</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium break-words">Correu electrònic</h3>
                        <p className="text-gray-600 break-all">contacte@stopbullyingmobbing.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium break-words">Telèfon</h3>
                        <p className="text-gray-600">+34 646 35 78 01</p>
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
          <div className="container px-4 text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">Fes el primer pas cap a una comunicació més efectiva</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Contacta'ns avui mateix i comença el teu camí cap a relacions més saludables i una millor autoestima.
            </p>
            <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100 text-base md:text-lg">
              Reserva una consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

