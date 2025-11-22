"use client"

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  locale: string
}

export function BlogPagination({ currentPage, totalPages, locale }: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const buildPageUrl = (page: number) => {
    if (page === 1) {
      return locale === 'ca' ? '/blog' : `/${locale}/blog`
    }
    return locale === 'ca' ? `/blog/page/${page}` : `/${locale}/blog/page/${page}`
  }

  const getVisiblePages = () => {
    const delta = 2 // Nombre de pàgines a mostrar a cada costat de la pàgina actual
    
    // Si hi ha poques pàgines, mostrar-les totes
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const range = []
    const rangeWithDots = []

    // Calcular el rang de pàgines al voltant de la pàgina actual
    const start = Math.max(2, currentPage - delta)
    const end = Math.min(totalPages - 1, currentPage + delta)

    for (let i = start; i <= end; i++) {
      range.push(i)
    }

    // Afegir la primera pàgina
    if (start > 2) {
      rangeWithDots.push(1, 'ellipsis-start')
    } else {
      rangeWithDots.push(1)
    }

    // Afegir el rang de pàgines
    rangeWithDots.push(...range)

    // Afegir l'última pàgina
    if (end < totalPages - 1) {
      rangeWithDots.push('ellipsis-end', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const visiblePages = getVisiblePages()

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink asChild size="default" className="gap-2 px-4 py-2 min-w-[120px] flex items-center justify-center">
              <Link href={buildPageUrl(currentPage - 1)} className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                <span>{locale === 'es' ? 'Anterior' : 'Anterior'}</span>
              </Link>
            </PaginationLink>
          </PaginationItem>
        )}

        {visiblePages.map((page, index) => {
          if (page === 'ellipsis-start' || page === 'ellipsis-end') {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }

          const pageNumber = page as number
          const isActive = pageNumber === currentPage

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink asChild isActive={isActive}>
                <Link href={buildPageUrl(pageNumber)}>{pageNumber}</Link>
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink asChild size="default" className="gap-2 px-4 py-2 min-w-[120px] flex items-center justify-center">
              <Link href={buildPageUrl(currentPage + 1)} className="flex items-center gap-2">
                <span>{locale === 'es' ? 'Siguiente' : 'Següent'}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

