import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ca', 'es'],

  // Used when no locale matches
  defaultLocale: 'ca',

  // Only add locale prefix when needed (not for default locale)
  localePrefix: 'as-needed',

  // Define pathnames that work the same in both locales
  pathnames: {
    '/': '/',
    '/blog': '/blog',
    '/contacte': '/contacte',
    '/blog/[slug]': '/blog/[slug]'
  }
}); 