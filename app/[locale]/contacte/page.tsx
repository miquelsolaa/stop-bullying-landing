import { Metadata } from 'next';
import ContactClient from './ContactClient';

const titles = {
  ca: 'Contacta amb el servei d’ajuda per bullying i mobbing | Barcelona',
  es: 'Contacta con el servicio de ayuda para bullying y mobbing | Barcelona'
};
const descriptions = {
  ca: 'Demana informació o reserva la teva primera sessió d’orientació per superar el bullying o mobbing a Barcelona i Terrassa.',
  es: 'Solicita información o reserva tu primera sesión de orientación para superar el bullying o mobbing en Barcelona y Terrassa.'
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale === 'es' ? 'es' : 'ca';
  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      type: 'website',
    }
  };
}

export default function ContactPage() {
  return <ContactClient />;
}

