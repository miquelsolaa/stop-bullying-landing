import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getBlogPosts(locale: string = 'ca') {
  try {
    if (!locale) locale = 'ca';
    
    // Use public/blog which is more reliable on Netlify
    const postsDirectory = path.join(process.cwd(), 'public/blog', locale)
    
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Blog directory for locale ${locale} not found, returning empty array`)
      return []
    }
    
    const filenames = fs.readdirSync(postsDirectory)

    const posts = filenames
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

    return posts
  } catch (error) {
    console.error(`Error loading blog posts for locale ${locale}:`, error)
    return []
  }
}