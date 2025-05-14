"use client";

import Link from "next/link";

const blogs = [
  {
    title: "Building a Decentralized Carbon Credit Marketplace on Solana",
    slug: "decentralized-carbon-credit-marketplace-solana",
    date: "2024-09-18",
  },
  {
    title: "Tokenizing Real-World Assets: Lessons from CaelumX",
    slug: "tokenizing-rwa-lessons-caelumx",
    date: "2024-11-03",
  },
  {
    title: "How I am building a Zoom Clone in Go from Scratch",
    slug: "zoom-clone-in-go",
    date: "2024-11-09",
  },
  {
    title: "Inside the Solana Devnet: A Deep Dive into PDAs and IDLs",
    slug: "solana-devnet-pdas-idls",
    date: "2024-10-10",
  },
  {
    title: "Designing Fractional NFTs for Climate Impact",
    slug: "fractional-nfts-climate",
    date: "2024-11-11",
  },
  {
    title: "My Learnings from Building a Prediction Market Like Probo",
    slug: "building-prediction-market-like-probo",
    date: "2025-03-23",
  },
  {
    title: "Mastering Rust for Solana: Ownership, Safety, and Speed",
    slug: "rust-for-solana",
    date: "2024-12-01",
  },
  {
    title: "Daily Schedule That Helped Me Balance Hackathons, Open Source, and ML Prep",
    slug: "daily-schedule-hackathons-ml-open-source",
    date: "2024-11-08",
  },
  {
    title: "Pushing the Limits: Bonding Curves and Token Supply Mechanisms",
    slug: "bonding-curves-token-supply",
    date: "2025-01-08",
  }
];

export default function BlogPage() {
  return (
    <main className="px-6 py-16 text-white bg-black">
      <h1 className="text-2xl font-semibold mb-10">My Blog</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="flex justify-start space-x-6 text-sm"
          >
            <span className="w-32 text-gray-400">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-white">{blog.title}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
