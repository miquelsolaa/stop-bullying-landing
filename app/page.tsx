"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Award, ArrowRight, Calendar, CheckCircle, Users, Star } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState, useEffect } from "react"

// Replace the existing header with the Navbar component
import { Navbar } from '@/components/navbar'
import { FAQ } from "@/components/faq"

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    {
      src: "/image.png",
      alt: "Coaching de comunicació",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT1NbWl5eYWJhSl9yX2JhYVv/2wBDARUXFx4aHR4eHVtTU1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    },
    {
      src: "/mobbing.png",
      alt: "Sessions de coaching",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT1NbWl5eYWJhSl9yX2JhYVv/2wBDARUXFx4aHR4eHVtTU1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Switch every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="inici" className="relative py-20 md:py-28 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Supera el bullying o mobbing i millora les teves habilitats socials per millorar el teu benestar
              </h1>
              <p className="text-xl text-gray-700">
              Supera el bullying o mobbing i millora les teves habilitats socials en només 6-8 sessions personalitzades, amb resultats visibles des de la primera sessió.
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
            {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                  className={`object-cover transition-opacity duration-500 ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-nosaltres" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sobre Nosaltres</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto"></div>
              <p className="text-lg text-gray-700 mt-6">
                A <span className="font-semibold">Stop Bullying o Mobbing</span>, ens dediquem a ajudar nens i adults a
                desenvolupar habilitats socials per afrontar el bullying o mobbing i els reptes interpersonals. La nostra coach,
                amb més de 10 anys d'experiència, ha ajudat a centenars de persones a superar situacions difícils i a
                construir relacions saludables.
              </p>
              <p className="text-lg text-gray-700">
                El nostre enfocament personalitzat garanteix resultats efectius en poques sessions, proporcionant eines
                pràctiques que es poden aplicar immediatament en situacions reals.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficis" className="py-16 md:py-24 bg-amber-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Els Nostres Beneficis</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold">Millora la teva confiança i comunicació</h3>
                  <p className="text-gray-600">
                    Aprèn a expressar-te amb seguretat i claredat en qualsevol situació social, construint una
                    autoestima sòlida.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold">Aprèn a afrontar situacions difícils</h3>
                  <p className="text-gray-600">
                    Desenvolupa estratègies efectives per gestionar conflictes i respondre adequadament davant del
                    bullying o mobbing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Resultats efectius en pocs passos</h3>
                  <p className="text-gray-600">
                    El nostre mètode provat proporciona eines pràctiques que pots aplicar immediatament per veure canvis
                    reals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonis" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">El Que Diuen Els Nostres Clients</h2>
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
                    "El meu fill ha experimentat un canvi increïble després de només 6 sessions. Ara té les eines per
                    afrontar situacions difícils a l'escola i la seva confiança ha augmentat enormement."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src="/maria.jpg?height=100&width=100"
                        alt="Testimoni"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Maria G.</p>
                      <p className="text-sm text-gray-500">Mare d'un nen de 10 anys</p>
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
                    "Com a adult que ha patit mobbing a la feina, aquest programa m'ha donat la confiança i les
                    habilitats per establir límits saludables i comunicar-me assertivament. Ha canviat la meva vida
                    professional."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src="/jordi.jpg?height=100&width=100"
                        alt="Testimoni"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Jordi P.</p>
                      <p className="text-sm text-gray-500">Professional de 35 anys</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="com-funciona" className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Com Funciona</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <Calendar className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">1. Reserva</h3>
                <p className="text-gray-600">
                  Programa una consulta per avaluar les teves necessitats específiques.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <Users className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">2. Avaluació</h3>
                <p className="text-gray-600">Creem un pla personalitzat basat en la teva situació i objectius.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <MessageCircle className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">3. Sessions</h3>
                <p className="text-gray-600">Participa en 6-8 sessions pràctiques per desenvolupar noves habilitats.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <CheckCircle className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">4. Resultats</h3>
                <p className="text-gray-600">Aplica les noves habilitats a la vida real i veu els canvis positius.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Reserva la teva sessió avui mateix!</h2>
            <p className="text-xl max-w-2xl mx-auto">
              No esperis més per millorar les teves habilitats socials i superar el bullying o mobbing. El canvi comença amb un
              primer pas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacte">
              <Button 
                size="lg" 
                className="button-primary text-lg"
                aria-label="Reserva una consulta ara"
              >
                Reserva una consulta
              </Button>
            </Link>
            <Link href="/contacte">
              <Button 
                size="lg" 
                className="button-secondary text-lg font-semibold"
                aria-label="Obtén más información sobre nuestros servicios"
              >
                Més informació
              </Button>
            </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

