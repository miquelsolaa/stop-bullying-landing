import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(
  request: NextRequest,
  { params }: { params: { locale: string } }
) {
  try {
    const { locale } = params
    
    // Use only the content/blog directory which is more reliable
    const blogDir = path.join(process.cwd(), 'content/blog', locale)
    
    if (!fs.existsSync(blogDir)) {
      return NextResponse.json(
        { error: `Blog directory for locale ${locale} not found` },
        { status: 404 }
      )
    }
    
    const files = fs.readdirSync(blogDir)
    
    const posts = files
      .filter((filename: string) => filename.endsWith('.md'))
      .map((filename: string) => {
        try {
          const filePath = path.join(blogDir, filename)
          const fileContent = fs.readFileSync(filePath, 'utf8')
          const { data } = matter(fileContent)
          
          return {
            ...data,
            slug: filename.replace('.md', ''),
          }
        } catch (error) {
          console.error(`Error processing blog post ${filename}:`, error)
          return null
        }
      })
      .filter((post: any) => post !== null)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json(posts)
  } catch (error) {
    console.error(`Error loading blog posts for locale ${params.locale}:`, error)
    return NextResponse.json(
      { error: `Failed to load blog posts: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
} 