"use client";

import { notFound } from "next/navigation";

const blogs = [
  {
    title: "Building a Decentralized Carbon Credit Marketplace on Solana",
    slug: "decentralized-carbon-credit-marketplace-solana",
    date: "2024-09-18",
    content: `🌿 CaelumX — Reimagining Carbon Credits on the Blockchain
CaelumX is a decentralized platform designed to bring transparency, accessibility, and verifiability to the voluntary carbon credit market by leveraging blockchain technology.

We’re building on Solana, utilizing its speed and low fees to tokenize carbon credits as NFTs or SFTs, allowing users to fractionalize, stake, and trade them in a fully transparent and trustless environment.

Key features include:

Tokenization of Verified Carbon Credits
Credits are represented as NFTs/SFTs, embedded with certification metadata (Verra, Gold Standard, etc.).

Fractional Ownership
Enables liquidity and micro-contributions to environmental projects, allowing broader participation.

Staking for Impact
Users can stake carbon tokens to support long-term sustainability initiatives and earn rewards.

Decentralized Marketplace
A smart contract-powered marketplace for trading credits with traceable impact.

Hybrid Verification Model
Combines off-chain certification and on-chain proofs for scalable trust.

This project is still in MVP stage, and we’re focusing on building a robust technical foundation, onboarding verification partners, and shaping a user experience that serves individuals, corporates, and developers alike.

 caelum-x.com 
 Follow updates on Twitter/X or Substack

`,
  },
  {
    title: "Tokenizing Real-World Assets: Lessons from CaelumX",
    slug: "tokenizing-rwa-lessons-caelumx",
    date: "2024-11-03",
    content: `Tokenizing RWAs is tricky. I break down lessons from CaelumX, including token standards, legal compliance, and ownership tracking.`,
  },
  {
    title: "How I am building a Zoom Clone in Go from Scratch",
    slug: "zoom-clone-in-go",
    date: "2024-11-09",
    content: `In this post, I explore building a Zoom clone using WebRTC, gRPC, and Go for backend signaling, media streaming, and concurrency.`,
  },
  {
    title: "Inside the Solana Devnet: A Deep Dive into PDAs and IDLs",
    slug: "solana-devnet-pdas-idls",
    date: "2024-10-10",
    content: `PDAs (Program Derived Addresses) and IDLs (Interface Definition Language) are essential to Solana development with Anchor. This post breaks down their practical usage.`,
  },
  {
    title: "Designing Fractional NFTs for Climate Impact",
    slug: "fractional-nfts-climate",
    date: "2024-11-11",
    content: `Fractional NFTs can democratize access to impact investments like carbon credits. Here's how we designed them in CaelumX.`,
  },
  {
    title: "My Learnings from Building a Prediction Market Like Probo",
    slug: "building-prediction-market-like-probo",
    date: "2025-03-23",
    content: `This post covers the key design and implementation challenges I faced while building a Probo-style prediction market.`,
  },
  {
    title: "Mastering Rust for Solana: Ownership, Safety, and Speed",
    slug: "rust-for-solana",
    date: "2024-12-01",
    content: `Rust’s memory model and ownership system can be tough. Here’s how I mastered them for high-performance Solana programs.`,
  },
  {
    title: "Daily Schedule That Helped Me Balance Hackathons, Open Source, and ML Prep",
    slug: "daily-schedule-hackathons-ml-open-source",
    date: "2024-11-08",
    content: `I share my time-blocking strategy and daily rituals that helped me balance multiple commitments without burning out.`,
  },
  {
    title: "Pushing the Limits: Bonding Curves and Token Supply Mechanisms",
    slug: "bonding-curves-token-supply",
    date: "2025-01-08",
    content: `Bonding curves are dynamic tools for pricing and supply. This article explores how I used them to manage token distribution.`,
  },
];

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.slug === params.id);

  if (!blog) return notFound();

  return (
    <main className="px-6 py-16 text-white bg-black max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{blog.title}</h1>
      <p className="text-gray-400 text-sm mb-6">
        {new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="whitespace-pre-line text-base leading-relaxed">
        {blog.content}
      </p>
    </main>
  );
}
