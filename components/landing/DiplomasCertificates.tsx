"use client";

import { useTranslations } from "next-intl";

export function DiplomasCertificates() {
  const landing = useTranslations("landing");
  const items = landing.raw("diplomas.items") as string[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-life-text text-center mb-12">
          {landing("diplomas.headline")}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="px-5 py-3 rounded-md bg-life-text/5 border border-life-text/10 text-life-text font-medium text-sm text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
