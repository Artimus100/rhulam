import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blogs"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}
