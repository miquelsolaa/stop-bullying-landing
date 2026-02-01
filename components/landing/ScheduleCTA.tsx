"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ScheduleCTAProps {
  contactPath: string;
}

export function ScheduleCTA({ contactPath }: ScheduleCTAProps) {
  const landing = useTranslations("landing");

  return (
    <section className="py-16 md:py-24 bg-life-primary text-white">
      <div className="container px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {landing("fullStop.headline")}
        </h2>
        <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg">
          {landing("aboveTheFold.subtitle")}
        </p>
        <Link href={contactPath}>
          <Button
            size="lg"
            className="bg-life-accent text-life-text hover:opacity-90 font-semibold px-8 py-6 text-base rounded-[40px] transition-opacity group"
          >
            {landing("fullStop.cta")}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
        <p className="text-white/80 text-sm mt-4">
          {landing("fullStop.frictionRemover")}
        </p>
      </div>
    </section>
  );
}
