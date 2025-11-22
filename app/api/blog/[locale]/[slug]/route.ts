import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string; locale: string } }
) {
  try {
    const { slug, locale } = params
    
    // Try multiple possible locations for the blog files
    const possiblePaths = [
      path.join(process.cwd(), 'public/blog', locale),
      path.join(process.cwd(), 'content/blog', locale)
    ]
    
    let blogDir = null
    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        blogDir = possiblePath
        break
      }
    }
    
    if (!blogDir) {
      return NextResponse.json(
        { error: `Blog directory for locale ${locale} not found` },
        { status: 404 }
      )
    }
    
    // Decode the URL-encoded slug
    const decodedSlug = decodeURIComponent(slug)
    
    // Get all files in the blog directory
    const files = fs.readdirSync(blogDir)
    
    // Find the file that matches the slug when normalized
    const file = files.find((filename: string) => {
      const normalizedFilename = filename.toLowerCase().replace(/['']/g, '').replace(/\.md$/, '')
      const normalizedSlug = decodedSlug.toLowerCase().replace(/['']/g, '')
      return normalizedFilename === normalizedSlug
    })

    if (!file) {
      return NextResponse.json(
        { error: `Blog post ${decodedSlug} not found in locale ${locale}` },
        { status: 404 }
      )
    }

    const filePath = path.join(blogDir, file)
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `Blog post file ${filePath} not found` },
        { status: 404 }
      )
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    const { data, content } = matter(fileContent)
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkSlug)
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    const post = {
      slug,
      title: data.title,
      date: data.date,
      image: data.image || data.thumbnail, // Suporta 'image' i retrocompatibilitat amb 'thumbnail'
      description: data.description,
      content: contentHtml,
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error(`Error loading blog post ${params.slug} for locale ${params.locale}:`, error)
    return NextResponse.json(
      { error: `Failed to load blog post: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
} 