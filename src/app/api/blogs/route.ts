import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const blogDir = path.join(process.cwd(), "content/blogs");

  if (!fs.existsSync(blogDir)) {
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    const fullPath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title || "Untitled",
      date: data.date || null,
      slug: data.slug || filename.replace(/\.mdx?$/, ""),
    };
  });

  blogs.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return new Response(JSON.stringify(blogs), {
    headers: { "Content-Type": "application/json" },
  });
}
