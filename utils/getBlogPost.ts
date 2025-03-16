import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getBlogPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const { data, content } = matter(fileContent)
  const processedContent = await remark()
    .use(html)
    .process(content)
  
  return {
    ...data,
    content: processedContent.toString(),
    slug,
  }
}