import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { generateMetadata, siteConfig } from '../metadata';

function getAlternateLinks(locale: string, path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  return routing.locales.map((loc) => (
    <link
      key={loc}
      rel="alternate"
      href={`${baseUrl}/${loc}${path ? `/${path}` : ''}`}
      hrefLang={loc}
    />
  ));
}

export const metadata = generateMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: '',
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: any;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Obtenim el path sense el locale
  const path = typeof window !== 'undefined'
    ? window.location.pathname.split('/').slice(2).join('/')
    : '';

  return (
    <html lang={locale}>
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content={metadata.keywords?.join(', ')} />
        <link rel="canonical" href={metadata.alternates?.canonical as string} />
        {getAlternateLinks(locale, path)}
        {/* OpenGraph */}
        <meta property="og:title" content={metadata.openGraph?.title as string} />
        <meta property="og:description" content={metadata.openGraph?.description as string} />
        <meta property="og:url" content={metadata.openGraph?.url as string} />
        <meta property="og:image" content={siteConfig.ogImage} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter?.title as string} />
        <meta name="twitter:description" content={metadata.twitter?.description as string} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
      </head>
      <body>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}