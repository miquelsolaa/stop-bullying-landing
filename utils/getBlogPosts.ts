import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      
      return {
        ...data,
        slug: filename.replace('.md', ''),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}