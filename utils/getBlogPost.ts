import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export async function getBlogPost(slug: string, locale: string = 'ca') {
  const blogDir = path.join(process.cwd(), 'content/blog', locale)
  
  // Decode the URL-encoded slug
  const decodedSlug = decodeURIComponent(slug)
  
  // Get all files in the blog directory
  const files = fs.readdirSync(blogDir)
  
  // Find the file that matches the slug when normalized
  const file = files.find(filename => 
    filename.toLowerCase().replace(/['']/g, '').replace(/\.md$/, '') === 
    decodedSlug.toLowerCase().replace(/['']/g, '')
  )

  if (!file) {
    throw new Error(`Blog post ${decodedSlug} not found`)
  }

  const filePath = path.join(blogDir, file)
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
}