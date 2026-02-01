"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface WhoIHelpProps {
  contactPath: string;
}

export function WhoIHelp({ contactPath }: WhoIHelpProps) {
  const landing = useTranslations("landing");
  const archetypes = landing.raw("socialProofIntent.archetypes") as {
    title: string;
    description: string;
  }[];

  return (
    <section id="a-qui-ajudem" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-life-text mb-4">
            {landing("socialProofIntent.headline")}
          </h2>
          <p className="text-lg text-life-text/80 leading-relaxed mb-4">
            {landing("leadSection.solutionTeaser")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {archetypes.map((archetype, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-xl font-semibold text-life-text">
                {archetype.title}
              </h3>
              <p className="text-life-text/80 leading-relaxed text-sm">
                {archetype.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href={contactPath}>
            <Button
              variant="outline"
              className="border-life-primary text-life-primary hover:bg-life-primary hover:text-white font-semibold rounded-[40px] px-6"
            >
              {landing("aboveTheFold.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
