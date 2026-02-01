"use client";

import { useTranslations } from "next-intl";

export function FourFeatures() {
  const landing = useTranslations("landing");
  const features = landing.raw("fourFeatures") as { title: string; desc: string }[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-xl font-semibold text-life-text">
                {item.title}
              </h3>
              <p className="text-life-text/80 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
