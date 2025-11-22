// Mapeig de posts entre idiomes
// Clau: identificador únic del post
// Valor: objecte amb els slugs per a cada idioma
export const postMapping: Record<string, { ca: string; es: string }> = {
  'que-es-el-bullying': {
    ca: 'que-es-el-bullying-definicio-tips-i-com-afrontar-lo',
    es: 'que-es-el-bullying-definicion-tipos'
  },
  'como-ayudamos': {
    ca: 'com-ajudem-superar-bullying-mobbing',
    es: 'como-ayudamos-a-ninos-y-adultos-a-superar-el-bullying-o-mobbing'
  },
  'como-actuar-mobbing': {
    ca: 'com-actuar-si-pateixes-mobbing-laboral',
    es: 'como-actuar-mobbing-laboral'
  },
  'como-saber-mobbing': {
    ca: 'com-saber-si-pateixo-mobbing-a-la-feina',
    es: 'como-saber-si-sufro-mobbing-en-el-trabajo-7-senales-claras-de-acoso-laboral'
  },
  'como-saber-hijo-bullying': {
    ca: 'com-saber-si-el-meu-fill-pateix-bullying',
    es: 'como-saber-si-mi-hijo-sufre-bullying-senales-que-no-debes-ignorar'
  },
  'como-ayudar-hijo-bullying': {
    ca: 'com-ajudar-el-teu-fill-si-pateix-bullying-escolar',
    es: 'como-ayudar-a-tu-hijo-si-sufre-bullying-escolar'
  },
  'tecnicas-comunicacion': {
    ca: 'tecnicques-de-comunicacio-assertiva-per-afrontar-el-bullying',
    es: 'tecnicas-comunicacion-assertiva-para-afrontar-bullying'
  },
  'como-superar-bullying': {
    ca: 'com-superar-el-bullying-o-mobbing',
    es: 'como-superar-bullying-o-mobbing-estrategias-para-mejorar-habilidades-sociales'
  },
  'gestos-entrevista': {
    ca: 'avaluar-gestos-entrevista-feina-comunicacio',
    es: 'gestos-entrevistador-entrevista'
  },
  'mobbing-ayuntamiento': {
    ca: 'mobbing-laboral-ajuntament-terrassa',
    es: 'caso-real-funcionaria-afectada-mobbing-sutil-ayuntamiento'
  },
  'bullying-escolar-terrassa': {
    ca: 'bullying-escolar-terrassa-nena',
    es: 'caso-real-nena-8-anos-acoso-escolar'
  },
  'acoso-laboral-jefe': {
    ca: 'assetjament-laboral-per-part-del-cap',
    es: 'acoso-laboral-jefe'
  },
  'bullying-silencioso': {
    ca: 'bullying-silencios-identificar-i-aturar-lo',
    es: 'bullying-silencioso-identificar-y-acabarlo'
  },
  'es-mobbing': {
    ca: 'es-mobbing-el-que-estic-patint-a-la-feina-senyals-per-detectar-lo-a-temps',
    es: 'es-mobbing-lo-que-estoy-viviendo'
  },
  'bullying-verbal': {
    ca: 'bullying-verbal-exemples-com-detenir-lo',
    es: 'bullying-verbal-ejemplos'
  },
  'secuelas-bullying': {
    ca: 'sequeles-del-bullying-com-afecta-i-com-superar-les',
    es: 'secuelas-del-bullying'
  },
  'secuelas-bullying-largo-plazo': {
    ca: 'sequeles-del-bullying-com-afecta-a-curt-i-llarg-termini',
    es: 'secuelas-del-bullying-a-corto-y-largo-plazo'
  },
  'tipos-bullying': {
    ca: 'tipus-de-bullying-amb-exemples-reals-i-com-detectar-los',
    es: 'tipos-de-bullying-con-ejemplos-reales'
  },
  'ejemplos-bullying': {
    ca: 'exemples-bullying-10-situacions-reals-com-enfrontar-les',
    es: 'ejemplos-de-bullying'
  },
  'ejemplos-bullying-consecuencias': {
    ca: 'exemples-de-bullying-i-assetjament-laboral-consequencies',
    es: 'ejemplos-de-bullying-y-mobbing-consecuencias'
  },
  'bullying-mas-peligroso': {
    ca: 'quin-es-el-bullying-mes-perillos-quan-per-que',
    es: 'cual-es-el-bullying-mas-peligroso-cuando-por-que'
  },
  'por-que-hacen-bullying': {
    ca: 'per-que-fan-bullying',
    es: 'por-que-hacen-bullying'
  },
  '10-ejemplos-de-bullying-y-como-detenerlo': {
    ca: '10-exemples-assetjament-escolar-i-laboral',
    es: '10-ejemplos-de-bullying-y-como-detenerlo'
  },
  'bullying-psicologico-ejemplos-reales': {
    ca: 'bullying-psicologic-exemples-reals',
    es: 'bullying-psicologico-ejemplos-reales'
  }

};

// Funció per obtenir el slug traduït (versió servidor amb detecció automàtica)
export function getTranslatedSlug(currentSlug: string, currentLocale: string, targetLocale: string): string | null {
  // Primer, buscar al mapeig manual
  const postKey = Object.keys(postMapping).find(key => 
    postMapping[key][currentLocale as 'ca' | 'es'] === currentSlug
  );
  
  if (postKey) {
    return postMapping[postKey][targetLocale as 'ca' | 'es'] || null;
  }
  
  // Si no es troba al mapeig manual, comprovar si existeix un fitxer amb el mateix nom
  // Això només funciona al servidor (amb fs)
  try {
    const fs = require('fs');
    const path = require('path');
    
    const targetBlogDir = path.join(process.cwd(), 'public/blog', targetLocale);
    
    if (!fs.existsSync(targetBlogDir)) {
      return null;
    }
    
    // Normalitzar el slug per comparar (sense accents, minúscules)
    // Utilitza normalització Unicode per eliminar accents de forma més robusta
    const normalizeSlug = (slug: string) => {
      return slug
        .toLowerCase()
        .normalize('NFD') // Descomposa caràcters amb accents
        .replace(/[\u0300-\u036f]/g, '') // Elimina marques diacrítiques
        .replace(/['']/g, '') // Elimina apostrofs especials
        .replace(/[ñ]/g, 'n') // Mantenir la ñ com a n
        .replace(/[ç]/g, 'c'); // Mantenir la ç com a c
    };
    
    const normalizedCurrentSlug = normalizeSlug(currentSlug);
    
    // Buscar tots els fitxers a la carpeta de l'idioma destí
    const files = fs.readdirSync(targetBlogDir);
    
    // Buscar un fitxer que coincideixi quan es normalitza
    const matchingFile = files.find((filename: string) => {
      const fileSlug = filename.replace('.md', '');
      const normalizedFileSlug = normalizeSlug(fileSlug);
      return normalizedFileSlug === normalizedCurrentSlug;
    });
    
    if (matchingFile) {
      // Retornar el slug real del fitxer trobat (sense l'extensió .md)
      return matchingFile.replace('.md', '');
    }
    
    // Si no es troba cap fitxer normalitzat, comprovar si el slug exacte existeix
    const exactFile = `${currentSlug}.md`;
    if (files.includes(exactFile)) {
      return currentSlug;
    }
    
    return null;
  } catch (error) {
    // Si hi ha un error (per exemple, si s'executa al client), retornar null
    // El client haurà de cridar a l'API route
    return null;
  }
}

// Funció per obtenir l'identificador únic del post
export function getPostId(slug: string, locale: string): string | null {
  const postKey = Object.keys(postMapping).find(key => 
    postMapping[key][locale as 'ca' | 'es'] === slug
  );
  
  return postKey || null;
} 