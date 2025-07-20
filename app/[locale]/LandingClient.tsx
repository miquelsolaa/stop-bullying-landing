"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Award, ArrowRight, Calendar, CheckCircle, Users, Star } from "lucide-react";
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
        {/* Hero Section */}
        <section id="inici" className="relative py-20 md:py-28 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                {hero('title')}
              </h1>
              <p className="text-xl text-gray-700">
                {hero('subtitle')}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/contacte">
                  <Button size="lg" className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-lg">
                    {hero('cta')}
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
                  unoptimized
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {about('title')}
              </h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto"></div>
              <p className="text-lg text-gray-700 mt-6">
                {about('text')}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficis" className="py-16 md:py-24 bg-amber-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{benefits('title')}</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.raw('list').map((item: any, i: number) => (
                <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                      {i === 0 && <Heart className="h-8 w-8 text-rose-500" />}
                      {i === 1 && <MessageCircle className="h-8 w-8 text-amber-500" />}
                      {i === 2 && <Award className="h-8 w-8 text-blue-500" />}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        {/* How It Works Section */}
        <section id="com-funciona" className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{howItWorks('title')}</h2>
              <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.raw('steps').map((item: any, i: number) => (
                <div key={i} className="text-center space-y-4">
                  <div className="mx-auto bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                    {i === 0 && <Calendar className="h-10 w-10 text-rose-500" />}
                    {i === 1 && <Users className="h-10 w-10 text-rose-500" />}
                    {i === 2 && <MessageCircle className="h-10 w-10 text-rose-500" />}
                    {i === 3 && <CheckCircle className="h-10 w-10 text-rose-500" />}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">{cta('title')}</h2>
            <p className="text-xl max-w-2xl mx-auto">
              {cta('desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacte">
              <Button 
                size="lg" 
                className="button-primary text-lg"
                aria-label={cta('primary')}
              >
                {cta('primary')}
              </Button>
            </Link>
            <Link href="/contacte">
              <Button 
                size="lg" 
                className="button-secondary text-lg font-semibold"
                aria-label={cta('secondary')}
              >
                {cta('secondary')}
              </Button>
            </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
} 