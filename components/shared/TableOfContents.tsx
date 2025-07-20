'use client'

import React from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

function extractHeadings(html: string): TocItem[] {
  // Utilitza DOMParser per parsejar el HTML i extreure headings
  if (typeof window === 'undefined') return []
  const parser = new window.DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const headings = Array.from(doc.querySelectorAll('h2, h3, h4'))
  return headings.map((el) => ({
    id: el.id || el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '',
    text: el.textContent || '',
    level: parseInt(el.tagName[1]),
  }))
}

export const TableOfContents: React.FC<{ html: string, locale?: string }> = ({ html, locale }) => {
  // Només funciona client-side
  const [toc, setToc] = React.useState<TocItem[]>([])
  React.useEffect(() => {
    setToc(extractHeadings(html))
  }, [html])

  if (!toc.length) return null

  const title = locale === 'es' ? 'Índice' : 'Índex'

  return (
    <nav className="hidden lg:block sticky top-32 bottom-16 max-h-[calc(100vh-6rem)] w-64 pr-8">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <div className="font-semibold mb-2 text-gray-900 text-base">{title}</div>
        <ul className="space-y-1">
          {toc.map((item) => (
            <li key={item.id} className={item.level === 2 ? 'ml-0' : item.level === 3 ? 'ml-4' : 'ml-8'}>
              <a href={`#${item.id}`} className="hover:text-rose-500 transition-colors">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 