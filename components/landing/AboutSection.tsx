"use client";

import { useTranslations } from "next-intl";

export function AboutSection() {
  const landing = useTranslations("landing");
  const stats = landing.raw("aboutSection.stats") as { number: string; label: string }[];

  return (
    <section id="sobre-nosaltres" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-life-text text-center mb-6">
            {landing("aboutSection.headline")}
          </h2>
          <p className="text-lg text-life-text/85 leading-relaxed text-center mb-12">
            {landing("aboutSection.content")}
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-life-primary">
                  {stat.number}
                </p>
                <p className="text-sm font-medium text-life-text/80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
