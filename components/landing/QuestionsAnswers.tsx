"use client";

import { FAQ } from "@/components/faq";
import { useTranslations } from "next-intl";

export function QuestionsAnswers() {
  const landing = useTranslations("landing");

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-life-text text-center mb-12">
          {landing("faqs.headline")}
        </h2>
        <div className="max-w-3xl mx-auto">
          <FAQ />
        </div>
      </div>
    </section>
  );
}
