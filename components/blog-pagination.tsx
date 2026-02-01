"use client"

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  locale: string
  prevPageLabel: string
  nextPageLabel: string
}

export function BlogPagination({
  currentPage,
  totalPages,
  locale,
  prevPageLabel,
  nextPageLabel,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const buildPageUrl = (page: number) => {
    if (page === 1) {
      return locale === 'ca' ? '/blog' : `/${locale}/blog`
    }
    return locale === 'ca' ? `/blog/page/${page}` : `/${locale}/blog/page/${page}`
  }

  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-4 font-sora"
      aria-label="Paginació del blog"
    >
      {currentPage > 1 ? (
        <Link
          href={buildPageUrl(currentPage - 1)}
          className="inline-flex items-center gap-2 text-life-text hover:text-life-primary transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>{prevPageLabel}</span>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-2 text-gray-400 cursor-not-allowed" aria-hidden>
          <ChevronLeft className="h-5 w-5" />
          <span>{prevPageLabel}</span>
        </span>
      )}

      {currentPage < totalPages ? (
        <Link
          href={buildPageUrl(currentPage + 1)}
          className="inline-flex items-center gap-2 text-life-text hover:text-life-primary transition-colors"
        >
          <span>{nextPageLabel}</span>
          <ChevronRight className="h-5 w-5" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-2 text-gray-400 cursor-not-allowed" aria-hidden>
          <span>{nextPageLabel}</span>
          <ChevronRight className="h-5 w-5" />
        </span>
      )}
    </nav>
  )
}
