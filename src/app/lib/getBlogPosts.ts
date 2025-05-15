// lib/getBlogPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const blogDir = path.join(process.cwd(), "content/blogs");

export function getAllSlugs() {
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const fullPath = path.join(blogDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "Untitled",
      date: data.date || "Invalid date",
      content: marked(content), // or use MDX renderer
    };
  } catch (err) {
    return null;
    console.error(`Error reading blog post: ${err}`);
  }
}
export async function BlogPost() {
  const slugs = getAllSlugs();
  const posts = await Promise.all(slugs.map(getBlogPostBySlug));

  return posts.filter((post) => post !== null);
}