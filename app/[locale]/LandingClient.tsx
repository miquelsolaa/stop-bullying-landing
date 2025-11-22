"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Award, ArrowRight, Calendar, CheckCircle, Users, Star, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { FAQ } from "@/components/faq";
import TestimonialsCarousel from "@/components/testimonials-carousel";

export default function LandingClient() {
  const [currentImage, setCurrentImage] = useState(0);
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
  ];

  const t = useTranslations();
  const landing = useTranslations('landing');
  const hero = useTranslations('hero');
  const about = useTranslations('about');
  const benefits = useTranslations('benefits');
  const testimonials = useTranslations('testimonials');
  const howItWorks = useTranslations('howItWorks');
  const cta = useTranslations('cta');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Above the Fold (Hero Section) */}
        <section id="inici" className="relative py-20 md:py-32 bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center relative z-10">
            <div className="space-y-8 text-center md:text-left animate-fade-in">
              <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200 border-rose-200">
                {landing('aboveTheFold.eyebrow')}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                  {landing('aboveTheFold.headline')}
                </span>
              </h1>
              <ul className="space-y-4 text-left">
                {landing.raw('aboveTheFold.valueBullets').map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 group animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                        <CheckCircle className="h-4 w-4 text-rose-600" />
                      </div>
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 pt-4">
                <Link href="/contacte" className="flex justify-center md:justify-start">
                  <Button size="lg" className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {landing('aboveTheFold.cta')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {landing('aboveTheFold.frictionRemover')}
                  </p>
                  <p className="text-sm font-medium text-gray-700 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    {landing('aboveTheFold.socialProof')}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
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
                  unoptimized
                  className={`object-cover transition-opacity duration-500 ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 2. Lead Section */}
        <section className="py-16 md:py-24 bg-white relative">
          <Separator className="mb-8" />
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="flex flex-wrap justify-center gap-2">
                {landing('leadSection.usps').split('. ').filter((s: string) => s.trim().length > 0).map((usp: string, i: number) => (
                  <Badge key={i} variant="outline" className="bg-rose-50 border-rose-200 text-rose-700 text-sm py-1.5 px-4">
                    {usp.replace(/\.$/, '').trim()}
                  </Badge>
                ))}
              </div>
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                  {landing('leadSection.painPoint')}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
                  {landing('leadSection.solutionTeaser')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Proof Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
                  Testimonials
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {testimonials('title')}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {landing.raw('proofSection.reviews').map((review: any, i: number) => (
                  <Card key={i} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{review.quote}"</p>
                      <Separator className="mb-4" />
                      <div className="flex items-center gap-3">
                        {review.image ? (
                          <div className="h-12 w-12 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-rose-200">
                            <Image 
                              src={review.image} 
                              alt={review.author}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                            {review.author.charAt(0)}
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900">{review.author}</p>
                          <p className="text-sm text-gray-600">{review.context}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Benefits Section */}
        <section id="beneficis" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{landing('benefitsSection.headline')}</h2>
              <Separator className="w-20 mx-auto bg-rose-500" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {landing.raw('benefitsSection.bullets').map((bullet: string, i: number) => (
                <Card key={i} className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <p className="text-base text-gray-700 font-medium leading-relaxed pt-2">{bullet}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Power Differentiators */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-rose-100 text-rose-700 border-rose-200">
                Per què nosaltres?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{landing('powerDifferentiators.headline')}</h2>
              <Separator className="w-20 mx-auto bg-rose-500" />
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {landing.raw('powerDifferentiators.bullets').map((bullet: string, i: number) => (
                  <Card key={i} className="border-2 border-rose-100 shadow-md hover:shadow-xl hover:border-rose-300 transition-all duration-300 bg-white animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed pt-1">{bullet}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="com-funciona" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
                Procés Simple
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{landing('howItWorks.headline')}</h2>
              <Separator className="w-20 mx-auto bg-rose-500" />
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-200 via-amber-200 to-rose-200"></div>
              <div className="grid md:grid-cols-3 gap-8 relative">
                {landing.raw('howItWorks.steps').map((step: any, i: number) => (
                  <Card key={i} className="border-2 border-rose-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center animate-slide-up" style={{ animationDelay: `${i * 150}ms` }}>
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <div className="mx-auto bg-gradient-to-br from-rose-500 to-amber-500 p-6 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                          {i === 0 && <Calendar className="h-12 w-12 text-white" />}
                          {i === 1 && <Users className="h-12 w-12 text-white" />}
                          {i === 2 && <CheckCircle className="h-12 w-12 text-white" />}
                        </div>
                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-md">
                          {i + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Offer Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-rose-300 shadow-2xl bg-white">
                <CardHeader className="text-center pb-4">
                  <Badge variant="default" className="mb-4 bg-rose-500 text-white">
                    Oferta Especial
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
                    {landing('offerSection.headline')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    {landing.raw('offerSection.bullets').map((bullet: string, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <span className="text-lg text-gray-700 font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 items-center">
                    <Link href="/contacte" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                        {landing('offerSection.cta')}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {landing('offerSection.frictionRemover')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. About the Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border border-gray-200 shadow-lg bg-gradient-to-br from-white to-rose-50">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center shadow-lg">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{landing('aboutTeam.headline')}</h2>
                    <Separator className="w-20 mx-auto bg-rose-500" />
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                      {landing('aboutTeam.content')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 9. Social Proof with Intent */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-rose-100 text-rose-700 border-rose-200">
                Per a qui?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{landing('socialProofIntent.headline')}</h2>
              <Separator className="w-20 mx-auto bg-rose-500" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {landing.raw('socialProofIntent.archetypes').map((archetype: any, i: number) => (
                <Card key={i} className="border-2 border-rose-100 shadow-lg hover:shadow-xl hover:border-rose-300 transition-all duration-300 bg-white animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {i === 0 && <Heart className="h-6 w-6 text-rose-500" />}
                      {i === 1 && <Users className="h-6 w-6 text-rose-500" />}
                      {i === 2 && <MessageCircle className="h-6 w-6 text-rose-500" />}
                      <Badge variant="outline" className="bg-rose-50 border-rose-200 text-rose-700">
                        {archetype.title.split(' ')[0]}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{archetype.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{archetype.description}</p>
                    <Separator />
                    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <p className="text-sm italic text-gray-700">"{archetype.testimonial}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FAQs */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
                  Preguntes Freqüents
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{landing('faqs.headline')}</h2>
                <Separator className="w-20 mx-auto bg-rose-500" />
              </div>
              <FAQ />
            </div>
          </div>
        </section>

        {/* 11. Full Stop (Final Recap) */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-rose-500 via-rose-600 to-amber-500 text-white relative overflow-hidden" style={{ isolation: 'isolate', zIndex: 1 }}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="container text-center space-y-10 relative z-10">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Última Oportunitat
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                {landing('fullStop.headline')}
              </h2>
            </div>
            <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8 text-left">
                  {landing.raw('fullStop.bullets').map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="h-7 w-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <span className="text-lg md:text-xl font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <Link href="/contacte" className="w-full sm:w-auto mx-auto">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto text-lg bg-white text-rose-700 hover:bg-gray-100 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-bold group"
                    >
                      {landing('fullStop.cta')}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-sm opacity-90 flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    {landing('fullStop.frictionRemover')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

    </div>
  );
} 