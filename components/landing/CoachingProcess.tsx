"use client";

import { useTranslations } from "next-intl";
import {
  Globe,
  LayoutGrid,
  Target,
  HandHeart,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

const STEP_ICONS: LucideIcon[] = [
  Globe,
  LayoutGrid,
  Target,
  HandHeart,
  PartyPopper,
];

export function CoachingProcess() {
  const landing = useTranslations("landing");
  const steps = landing.raw("howItWorks.steps") as { title: string; desc: string }[];

  return (
    <section id="proces" className="py-16 md:py-24 bg-white font-sora">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-life-text text-center mb-14">
          {landing("howItWorks.headline")}
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Globe;
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 min-h-[160px] sm:min-h-[180px] py-8 sm:py-10 px-6 sm:px-10 rounded-xl bg-gradient-to-r from-life-primary/10 via-life-primary/5 to-life-accent/5 border border-life-primary/10"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-life-primary/15 text-life-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-life-text mb-1">
                      {step.title}
                    </h3>
                    <p className="text-life-text/80 leading-relaxed text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span
                    className="text-6xl sm:text-7xl font-semibold text-life-text/15 leading-none tabular-nums"
                    aria-hidden
                  >
                    {i + 1}.
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
