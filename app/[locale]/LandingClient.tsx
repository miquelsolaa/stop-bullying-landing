"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import {
  HeroIntro,
  FourFeatures,
  AboutSection,
  WhoIHelp,
  DiplomasCertificates,
  CoachingProcess,
  TestimonialsSection,
  ServicesPackages,
  QuestionsAnswers,
  ScheduleCTA,
  InsightsToInspire,
} from "@/components/landing";
import type { BlogPostItem } from "@/components/landing/InsightsToInspire";

function getLocalePath(locale: string, path: string) {
  if (locale === routing.defaultLocale) return path ? `/${path}` : "/";
  return path ? `/${locale}/${path}` : `/${locale}`;
}

interface LandingClientProps {
  recentPosts?: BlogPostItem[];
}

export default function LandingClient({ recentPosts = [] }: LandingClientProps) {
  const locale = useLocale();
  const contactPath = getLocalePath(locale, "contacte");
  const blogPath = getLocalePath(locale, "blog");

  return (
    <div className="flex flex-col min-h-screen font-sora">
      <main className="flex-1">
        {/* 1. Intro / Hero - By Sarah Roberts..., headline, CTA */}
        <HeroIntro contactPath={contactPath} />

        {/* 2. Four feature cards - Building resilience, Work-life balance, Finding purpose, Managing stress */}
        <FourFeatures />

        {/* 3. Hi, I'm Sarah Roberts - About + stats */}
        <AboutSection />

        {/* 4. Who I Help? - 3 columns + CTA */}
        <WhoIHelp contactPath={contactPath} />

        {/* 5. Diplomas & Certificates */}
        <DiplomasCertificates />

        {/* 6. The Coaching Process - 5 steps */}
        <CoachingProcess />

        {/* 7. What My Clients Say - Testimonials */}
        <TestimonialsSection />

        {/* 8. Services & Packages - 3 tiers + CTA */}
        <ServicesPackages contactPath={contactPath} />

        {/* 9. Questions & Answers - FAQ */}
        <QuestionsAnswers />

        {/* 10. Schedule Your Free Discovery Call Now - Final CTA */}
        <ScheduleCTA contactPath={contactPath} />

        {/* 11. Insights to Inspire - Blog (3 most recent posts) */}
        <InsightsToInspire blogPath={blogPath} posts={recentPosts} locale={locale} />
      </main>
    </div>
  );
}
