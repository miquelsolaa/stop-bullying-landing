import { Metadata } from 'next'

export const siteConfig = {
  name: 'Stop Bullying Mobbing',
  url: 'https://stopbullyingmobbing.com',
  ogImage: '/og-image.jpg',
  description: 'Servei especialitzat en tractament psicològic per a víctimes de bullying i assetjament laboral a Barcelona. Ajuda professional per a nens i adults.',
  keywords: [
    'psicòleg bullying Barcelona',
    'assetjament escolar nens',
    'assetjament laboral adults',
    'bullying infantil Barcelona',
    'psicòloga assetjament escolar',
    'tractament bullying Barcelona',
    'ajuda bullying escola',
    'psicòloga Barcelona',
    'tractament assetjament psicològic',
    'consulta psicològica bullying',
    'teràpia assetjament laboral',
    'mobbing laboral Barcelona',
    'psicòleg infantil bullying',
    'ajuda assetjament escolar',
    'suport psicològic bullying',
    'psicòleg assetjament Barcelona',
    'teràpia bullying nens',
    'tractament mobbing Barcelona',
    'Terrassa',
    'Barcelona',
  ],
} as const

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Tractament Psicològic Bullying i Assetjament a Barcelona`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ca_ES',
    url: siteConfig.url,
    title: {
      default: 'Stop Bullying Mobbing | Psicòlegs Especialistes en Bullying i Assetjament',
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Stop Bullying Mobbing - Tractament Psicològic Professional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Bullying Mobbing | Psicòlegs Especialistes en Bullying i Assetjament',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'ca': siteConfig.url,
      'es': `${siteConfig.url}/es`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export function generateMetadata({ 
  title,
  description,
  path = '',
}: { 
  title?: string,
  description?: string,
  path?: string,
}): Metadata {
  const url = `${siteConfig.url}${path}`
  
  return {
    ...defaultMetadata,
    title: title,
    description: description,
    alternates: {
      canonical: url,
      languages: {
        'ca': url,
        'es': path ? `${siteConfig.url}/es${path}` : `${siteConfig.url}/es`,
      },
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title,
      description: description,
      url,
    },
  }
}