import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface PaginatedPosts {
  posts: any[]
  totalPosts: number
  totalPages: number
  currentPage: number
}

export async function getBlogPosts(
  locale: string = 'ca',
  page?: number,
  limit: number = 15
): Promise<any[] | PaginatedPosts> {
  try {
    if (!locale) locale = 'ca';
    
    // Use public/blog which is more reliable on Netlify
    const postsDirectory = path.join(process.cwd(), 'public/blog', locale)
    
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Blog directory for locale ${locale} not found, returning empty array`)
      // Retornar format consistent segons si hi ha paginació o no
      if (page !== undefined) {
        return { posts: [], totalPosts: 0, totalPages: 0, currentPage: page }
      }
      return []
    }
    
    const filenames = fs.readdirSync(postsDirectory)

    const allPosts = filenames
      .filter((filename: string) => filename.endsWith('.md'))
      .map((filename: string) => {
        try {
          const filePath = path.join(postsDirectory, filename)
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
      .filter((post: any) => post !== null) // Remove failed posts
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Si no es demana paginació, retornar tots els posts (retrocompatibilitat)
    if (page === undefined) {
      return allPosts
    }

    // Calcular paginació
    const totalPosts = allPosts.length
    const totalPages = Math.ceil(totalPosts / limit)
    const currentPage = Math.max(1, Math.min(page, totalPages)) // Assegurar que està dins del rang
    const offset = (currentPage - 1) * limit
    const posts = allPosts.slice(offset, offset + limit)

    return {
      posts,
      totalPosts,
      totalPages,
      currentPage,
    }
  } catch (error) {
    console.error(`Error loading blog posts for locale ${locale}:`, error)
    // Retornar format consistent segons si hi ha paginació o no
    if (page !== undefined) {
      return { posts: [], totalPosts: 0, totalPages: 0, currentPage: page || 1 }
    }
    return []
  }
}