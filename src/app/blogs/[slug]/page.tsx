import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;  // Await the params here
  const { slug } = resolvedParams;

  try {
    const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { content, data } = matter(fileContent);

    return (
      <main className="px-6 py-16 text-white bg-black max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">{data.title}</h1>
        <p className="text-gray-400 text-sm mb-6">
          {data.date
            ? new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date"}
        </p>
        <article className="prose prose-invert">
          <MDXRemote source={content} />
        </article>
      </main>
    );
  } catch (error) {
    console.error("Blog post not found:", error);
    return notFound();
  }
}
