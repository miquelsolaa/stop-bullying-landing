import { NextRequest, NextResponse } from 'next/server'
import { getTranslatedSlug } from '@/utils/postMapping'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const slug = searchParams.get('slug')
    const currentLocale = searchParams.get('currentLocale')
    const targetLocale = searchParams.get('targetLocale')

    if (!slug || !currentLocale || !targetLocale) {
      return NextResponse.json(
        { error: 'Missing required parameters: slug, currentLocale, targetLocale' },
        { status: 400 }
      )
    }

    const translatedSlug = getTranslatedSlug(slug, currentLocale, targetLocale)

    return NextResponse.json({ translatedSlug })
  } catch (error) {
    console.error('Error translating slug:', error)
    return NextResponse.json(
      { error: 'Failed to translate slug' },
      { status: 500 }
    )
  }
}

