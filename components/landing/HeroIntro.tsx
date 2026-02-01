"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface HeroIntroProps {
  contactPath: string;
}

export function HeroIntro({ contactPath }: HeroIntroProps) {
  const landing = useTranslations("landing");

  return (
    <section
      id="intro"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005A6E' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundPosition: "50% 10%",
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base text-life-primary font-medium mb-4">
            {landing("aboveTheFold.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-life-text leading-tight mb-6">
            {landing("aboveTheFold.headline")}
          </h2>
          <p className="text-lg md:text-xl text-life-text/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            {landing("aboveTheFold.subtitle")}
          </p>
          <Link href={contactPath}>
            <Button
              size="lg"
              className="bg-life-accent hover:opacity-90 text-life-text font-semibold px-8 py-6 text-base rounded-[40px] transition-opacity group"
            >
              {landing("aboveTheFold.cta")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
