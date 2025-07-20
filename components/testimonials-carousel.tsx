"use client";
import { useState, Fragment } from "react";
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";
import classNames from "classnames";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Component per mostrar la puntuació amb estrelles
function Rating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={classNames("flex gap-0.5", className)}>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        if (index <= Math.floor(rating)) {
          return <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />;
        } else if (rating > i && rating < index + 1) {
          return <StarHalf key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />;
        } else {
          return <Star key={i} className="h-5 w-5 text-amber-200" />;
        }
      })}
    </div>
  );
}

// Component per a cada testimoni
function TestimonialItem({ item }: { item: any }) {
  const { text, image, name, role, rating } = item;
  return (
    <div className="bg-white shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6 flex flex-col justify-between border border-gray-100">
      <div>
        <div className="flex items-center mb-4 gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
            <Image src={image} alt={name} fill className="object-cover" unoptimized />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <p className="text-gray-700 italic mb-4">{text}</p>
      </div>
      <Rating rating={rating ?? 5} />
    </div>
  );
}

export default function TestimonialsCarousel() {
  const t = useTranslations("testimonials");
  // Afegim rating manualment perquè no està a la traducció
  const testimonials = t.raw("list").map((item: any) => ({ ...item, rating: 5 }));
  // Mostrem 2 testimonials per "slide"
  const [index, setIndex] = useState(0);
  const perSlide = 2;
  const maxIndex = Math.ceil(testimonials.length / perSlide) - 1;

  const handlePrev = () => setIndex(index <= 0 ? maxIndex : index - 1);
  const handleNext = () => setIndex(index >= maxIndex ? 0 : index + 1);

  const visible = testimonials.slice(index * perSlide, index * perSlide + perSlide);
  // Si només hi ha 2 testimonials, mostrem sempre els dos
  const show = visible.length < perSlide ? testimonials.slice(0, perSlide) : visible;

  return (
    <section id="testimonis" className="py-16 md:py-24 bg-white text-zinc-900">
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("title")}</h2>
          <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {show.map((item: any, i: number) => (
            <TestimonialItem item={item} key={i} />
          ))}
        </div>
        {testimonials.length > perSlide && (
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              className="text-lg bg-white shadow-2xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-200"
              onClick={handlePrev}
              aria-label="Anterior"
              type="button"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="text-lg bg-white shadow-2xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full border border-gray-200"
              onClick={handleNext}
              aria-label="Següent"
              type="button"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 