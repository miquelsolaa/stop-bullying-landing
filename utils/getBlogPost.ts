import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export async function getBlogPost(slug: string, locale: string = 'ca') {
  try {
    console.log(`[getBlogPost] Loading post: ${slug} for locale: ${locale}`)
    
    // Try multiple possible locations for the blog files
    const possiblePaths = [
      path.join(process.cwd(), 'public/blog', locale),
      path.join(process.cwd(), 'public/content/blog', locale),
      path.join(process.cwd(), 'content/blog', locale)
    ]
    
    console.log(`[getBlogPost] Trying paths:`, possiblePaths)
    
    let blogDir = null
    for (const possiblePath of possiblePaths) {
      console.log(`[getBlogPost] Checking path: ${possiblePath}`)
      if (fs.existsSync(possiblePath)) {
        blogDir = possiblePath
        console.log(`[getBlogPost] Found blog directory: ${blogDir}`)
        break
      }
    }
    
    if (!blogDir) {
      console.error(`[getBlogPost] No blog directory found for locale ${locale}`)
      throw new Error(`Blog directory for locale ${locale} not found. Tried: ${possiblePaths.join(', ')}`)
    }
    
    // Decode the URL-encoded slug
    const decodedSlug = decodeURIComponent(slug)
    console.log(`[getBlogPost] Decoded slug: ${decodedSlug}`)
    
    // Get all files in the blog directory
    const files = fs.readdirSync(blogDir)
    console.log(`[getBlogPost] Available files:`, files)
    
    // Find the file that matches the slug when normalized
    const file = files.find((filename: string) => {
      const normalizedFilename = filename.toLowerCase().replace(/['']/g, '').replace(/\.md$/, '')
      const normalizedSlug = decodedSlug.toLowerCase().replace(/['']/g, '')
      const matches = normalizedFilename === normalizedSlug
      console.log(`[getBlogPost] Comparing: "${normalizedFilename}" with "${normalizedSlug}" = ${matches}`)
      return matches
    })

    if (!file) {
      console.error(`[getBlogPost] File not found for slug: ${decodedSlug}`)
      throw new Error(`Blog post ${decodedSlug} not found in locale ${locale}. Available files: ${files.join(', ')}`)
    }

    console.log(`[getBlogPost] Found file: ${file}`)
    const filePath = path.join(blogDir, file)
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`[getBlogPost] File path does not exist: ${filePath}`)
      throw new Error(`Blog post file ${filePath} not found`)
    }
    
    console.log(`[getBlogPost] Reading file: ${filePath}`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    const { data, content } = matter(fileContent)
    console.log(`[getBlogPost] Parsed frontmatter, title: ${data.title}`)
    
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    console.log(`[getBlogPost] Successfully processed post: ${data.title}`)
    return {
      slug,
      title: data.title,
      date: data.date,
      thumbnail: data.thumbnail,
      description: data.description,
      content: contentHtml,
    }
  } catch (error) {
    console.error(`[getBlogPost] Error loading blog post ${slug} for locale ${locale}:`, error)
    throw new Error(`Failed to load blog post: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}