"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Rating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating) ? "text-life-accent fill-life-accent" : "text-life-text/20"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialItem({
  item,
}: {
  item: { text: string; name: string; role: string; image: string; rating?: number };
}) {
  return (
    <div className="bg-white border border-life-text/10 rounded-md p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden relative bg-life-text/5 flex-shrink-0">
          <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
        </div>
        <div>
          <p className="font-semibold text-life-text">{item.name}</p>
          <p className="text-sm text-life-text/70">{item.role}</p>
        </div>
      </div>
      <p className="text-life-text/80 italic text-sm leading-relaxed flex-1">"{item.text}"</p>
      <Rating rating={item.rating ?? 5} />
    </div>
  );
}

export default function TestimonialsCarousel() {
  const t = useTranslations("testimonials");
  const testimonials = (
    t.raw("list") as { text: string; name: string; role: string; image: string }[]
  ).map((item) => ({ ...item, rating: 5 }));
  const [index, setIndex] = useState(0);
  const perSlide = 2;
  const maxIndex = Math.max(0, Math.ceil(testimonials.length / perSlide) - 1);
  const visible = testimonials.slice(index * perSlide, index * perSlide + perSlide);
  const show = visible.length < perSlide ? testimonials.slice(0, perSlide) : visible;

  const handlePrev = () => setIndex(index <= 0 ? maxIndex : index - 1);
  const handleNext = () => setIndex(index >= maxIndex ? 0 : index + 1);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {show.map((item: (typeof testimonials)[0], i: number) => (
          <TestimonialItem item={item} key={i} />
        ))}
      </div>
      {testimonials.length > perSlide && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            type="button"
            className="w-12 h-12 flex justify-center items-center rounded-full border border-life-text/20 bg-white text-life-text hover:border-life-accent hover:text-life-accent transition-colors"
            onClick={handlePrev}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="w-12 h-12 flex justify-center items-center rounded-full border border-life-text/20 bg-white text-life-text hover:border-life-accent hover:text-life-accent transition-colors"
            onClick={handleNext}
            aria-label="Següent"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
