import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export async function getBlogPost(slug: string, locale: string = 'ca') {
  try {
    // Use only the content/blog directory which is more reliable
    const blogDir = path.join(process.cwd(), 'content/blog', locale)
    
    if (!fs.existsSync(blogDir)) {
      throw new Error(`Blog directory for locale ${locale} not found`)
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
      throw new Error(`Blog post ${decodedSlug} not found in locale ${locale}`)
    }

    const filePath = path.join(blogDir, file)
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`Blog post file ${filePath} not found`)
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    const { data, content } = matter(fileContent)
    
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      date: data.date,
      thumbnail: data.thumbnail,
      description: data.description,
      content: contentHtml,
    }
  } catch (error) {
    console.error(`Error loading blog post ${slug} for locale ${locale}:`, error)
    throw new Error(`Failed to load blog post: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}