"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServicesPackagesProps {
  contactPath: string;
}

interface Tier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
}

export function ServicesPackages({ contactPath }: ServicesPackagesProps) {
  const landing = useTranslations("landing");
  const tiers = landing.raw("packages.tiers") as Tier[];

  return (
    <section id="serveis" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-life-text mb-4">
            {landing("packages.headline")}
          </h2>
          <p className="text-lg text-life-text/80 max-w-2xl mx-auto leading-relaxed">
            {landing("packages.intro")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-md border p-6 flex flex-col ${
                i === 1
                  ? "border-life-accent ring-2 ring-life-accent/30 bg-life-accent/5"
                  : "border-life-text/20 bg-white"
              }`}
            >
              <p className="text-2xl font-bold text-life-text mb-1">
                {tier.price}
              </p>
              <p className="text-sm text-life-text/70 mb-4">{tier.period}</p>
              <h3 className="text-xl font-semibold text-life-text mb-4">
                {tier.name}
              </h3>
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-life-text/80">
                    <CheckCircle className="h-4 w-4 text-life-accent flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={contactPath} className="block">
                <Button
                  className={`w-full rounded-[40px] font-semibold ${
                    i === 1
                      ? "bg-life-accent text-life-text hover:opacity-90"
                      : "bg-life-button-secondary text-white hover:opacity-90"
                  }`}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-life-text/70">
          {landing("offerSection.frictionRemover")}
        </p>
        <div className="text-center mt-6">
          <Link href={contactPath}>
            <Button
              variant="outline"
              className="border-life-primary text-life-primary hover:bg-life-primary hover:text-white rounded-[40px] font-semibold"
            >
              {landing("aboveTheFold.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
