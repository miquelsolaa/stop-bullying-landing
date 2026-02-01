import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'

export async function getBlogPost(slug: string, locale: string = 'ca') {
  try {
    console.log(`[getBlogPost] Attempting to load post: slug="${slug}", locale="${locale}"`)
    
    // Use public/blog which is more reliable on Netlify
    const blogDir = path.join(process.cwd(), 'public/blog', locale)
    
    console.log(`[getBlogPost] Blog directory: ${blogDir}`)
    
    if (!fs.existsSync(blogDir)) {
      console.error(`[getBlogPost] Blog directory for locale ${locale} not found: ${blogDir}`)
      throw new Error(`Blog directory for locale ${locale} not found`)
    }
    
    // Decode the URL-encoded slug
    const decodedSlug = decodeURIComponent(slug)
    console.log(`[getBlogPost] Decoded slug: "${decodedSlug}"`)
    
    // Get all files in the blog directory
    const files = fs.readdirSync(blogDir)
    console.log(`[getBlogPost] Found ${files.length} files in blog directory`)
    
    // Find the file that matches the slug when normalized
    const file = files.find((filename: string) => {
      const normalizedFilename = filename.toLowerCase().replace(/['']/g, '').replace(/\.md$/, '')
      const normalizedSlug = decodedSlug.toLowerCase().replace(/['']/g, '')
      const matches = normalizedFilename === normalizedSlug
      console.log(`[getBlogPost] Comparing: "${normalizedFilename}" === "${normalizedSlug}" = ${matches}`)
      return matches
    })

    if (!file) {
      console.error(`[getBlogPost] Blog post ${decodedSlug} not found in locale ${locale}`)
      console.error(`[getBlogPost] Available files:`, files.map(f => f.replace('.md', '')))
      throw new Error(`Blog post ${decodedSlug} not found in locale ${locale}`)
    }

    console.log(`[getBlogPost] Found matching file: ${file}`)
    const filePath = path.join(blogDir, file)
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`[getBlogPost] Blog post file ${filePath} not found`)
      throw new Error(`Blog post file ${filePath} not found`)
    }
    
    console.log(`[getBlogPost] Reading file: ${filePath}`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    const { data, content } = matter(fileContent)
    console.log(`[getBlogPost] Parsed frontmatter, title: ${data.title}`)
    
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkSlug)
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    const result = {
      slug,
      title: data.title,
      date: data.date,
      image: data.image || data.thumbnail,
      description: data.description,
      content: contentHtml,
      category: data.category,
      author: data.author,
      tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : undefined,
    }
    
    console.log(`[getBlogPost] Successfully loaded post: ${result.title}`)
    return result
  } catch (error) {
    console.error(`[getBlogPost] Error loading blog post ${slug} for locale ${locale}:`, error)
    throw new Error(`Failed to load blog post: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}