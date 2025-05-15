"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
  title: string;
  date: string | null;
  slug: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: Blog[] = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <main className="px-6 py-16 text-white bg-black max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-10">My Blog</h1>
      <div className="space-y-4">
        {blogs.map(({ slug, title, date }) => (
          <Link
            key={slug}
            href={`/blogs/${slug}`}
            className="block text-lg text-white-400 hover:underline"
          >
            <div>
              <span>{title}</span>
              <br />
              <small className="text-gray-400">
                {date
                  ? new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No date"}
              </small>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
