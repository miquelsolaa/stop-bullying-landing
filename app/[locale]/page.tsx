import { generateMetadata as generateSiteMetadata } from '../metadata';
import type { Metadata } from 'next';
import LandingClient from './LandingClient';
import { getBlogPosts } from '@/utils/getBlogPosts';

const titles = {
  ca: "Supera el bullying i el mobbing a Barcelona | Ajuda especialitzada",
  es: "Supera el bullying y el mobbing en Barcelona | Ayuda especializada"
};
const descriptions = {
  ca: "Resultats des de la primera sessió. Servei d'ajuda per a nens i adults que pateixen bullying o mobbing a Barcelona i Terrassa.",
  es: "Resultados desde la primera sesión. Servicio de ayuda para niños y adultos que sufren bullying o mobbing en Barcelona y Terrassa."
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale === 'es' ? 'es' : 'ca';
  return generateSiteMetadata({
    title: titles[locale],
    description: descriptions[locale],
    path: ''
  });
}

export default async function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = locale === 'es' ? 'es' : 'ca';
  const result = await getBlogPosts(resolvedLocale, 1, 3);
  const recentPosts = result && typeof result === 'object' && 'posts' in result ? result.posts : [];
  return <LandingClient recentPosts={recentPosts} />;
}

