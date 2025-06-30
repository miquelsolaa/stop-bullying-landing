import { generateMetadata } from '../metadata';
import type { Metadata } from 'next';
import LandingClient from './LandingClient';

const titles = {
  ca: "Supera el bullying i el mobbing a Barcelona | Ajuda especialitzada",
  es: "Supera el bullying y el mobbing en Barcelona | Ayuda especializada"
};
const descriptions = {
  ca: "Resultats des de la primera sessió. Servei d'ajuda per a nens i adults que pateixen bullying o mobbing a Barcelona i Terrassa.",
  es: "Resultados desde la primera sesión. Servicio de ayuda para niños y adultos que sufren bullying o mobbing en Barcelona y Terrassa."
};

export function generateMetadataPage({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale === 'es' ? 'es' : 'ca';
  return generateMetadata({
    title: titles[locale],
    description: descriptions[locale],
    path: ''
  });
}

export { generateMetadataPage as generateMetadata };

export default function LandingPage() {
  return <LandingClient />;
}

