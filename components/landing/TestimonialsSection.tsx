"use client";

import TestimonialsCarousel from "@/components/testimonials-carousel";
import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonis" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-life-text text-center mb-12">
          {t("title")}
        </h2>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
