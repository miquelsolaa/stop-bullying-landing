import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getBlogPosts(locale: string = 'ca') {
  if (!locale) locale = 'ca';
  const postsDirectory = path.join(process.cwd(), 'content/blog', locale)
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter((filename: string) => filename.endsWith('.md'))
    .map((filename: string) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      
      return {
        ...data,
        slug: filename.replace('.md', ''),
      }
    })
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}