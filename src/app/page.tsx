"use client";
import { ThemeProvider } from './components/ThemeProvider';
import { Github, Linkedin, Mail, Twitter, Home, FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';
function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-black font-sans antialiased">
        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          
          {/* Header Section */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rahul Mishra</h1>
    <Link href="/blogs">
      <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
        Read My Blogs
      </button>
    </Link>
          </header>

          {/* Two Column Layout for Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-12">
              {/* My Skills Section */}
              <section>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Engineer</h3>
                
                <div className="space-y-6 text-gray-300">
                  <p>@ the intersection of systems, backend, and web3.</p>
                  <p>building intelligent systems that push boundaries.</p>
                  <p>builder by habit, backend by trade, and curious by default.</p>
                </div>
              </section>

              {/* Current Focus Section - Mirroring the style from images */}
              <section className="mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Current Focus</h2>
                
                <div className="space-y-6 text-gray-300">
                  <p>
                    i think deeply about systems — how they scale, break, and sometimes, self-heal. 
                    from tokens to trust layers, i like making ideas runnable.
                  </p>
                  
                  <p>
                    Building <a href="#" className="text-white underline hover:no-underline">CaelumX</a>, 
                    a decentralized carbon credit marketplace on Solana. Fractionalized ownership with 
                    NFTs/SFTs, token verification, and Node.js-backed metadata registry.
                  </p>
                </div>
              </section>
            </div>
            
            {/* Right Column - Profile Image */}
            <div className="flex justify-center items-start lg:justify-end">
  <div className="rounded-2xl overflow-hidden w-96 h-96 shadow-lg">
    <img 
      src="./rahul-profile.png"
      alt="Rahul Mishra"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          </div>

          {/* Professional Highlights Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                {/* <img 
                  // src="/api/placeholder/500/400" 
                  // alt="Project showcase" 
                  className="w-full h-auto object-cover"
                /> */}
              </div>
            </div>
            
            {/* Project Description */}
            <div className="order-1 lg:order-2">
  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Machine Learning & AI Journey</h2>
  
  <div className="space-y-6">
    
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Current Learning Focus</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Mastering **Reinforcement Learning (RL)** – Deep dive into PPO, RLHF.</li>
        <li>Implementing **RL algorithms** from scratch using **PyTorch & JAX**.</li>
        <li>Exploring **Bio + AI** – Protein folding, cancer detection models.</li>
        <li>Studying **zkML** – Zero-knowledge machine learning verification.</li>
        <li>Paper reading & reproduction: Re-implementing **SOTA AI papers** in RL & DL.</li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Projects & Research</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Building **an RLHF pipeline** for fine-tuning LLMs.</li>
        <li>Developing **a custom PPO-based AI agent** with optimized exploration strategies.</li>
        <li>Researching **transformers for structured prediction** in RL.</li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Public Contributions & Writing</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-300">
        <li>Sharing insights on **Twitter/X**: RL, LLMs, optimization techniques.</li>
        <li>Publishing technical **write-ups on Substack/Notion** covering RL & ML topics.</li>
        <li>Open-sourcing **high-quality AI implementations** on GitHub.</li>
      </ul>
    </div>
    
  </div>
</div>

          </section>

          {/* Projects Section */}
          <section className="mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cool things I built:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Project 
                title="CaelumX" 
                code="CX" 
                link="https://caelum-f.vercel.app" 
                description="A decentralized carbon credit marketplace on Solana. Fractionalized ownership with NFTs/SFTs, token verification, and PostgreSQL-backed metadata registry." 
              />
              
              <Project 
                title="Decentralized Bonding Curve" 
                code="B" 
                link="https://github.com/Artimus100/Bonding-Curve" 
                description="Developed and deployed a Solana smart contract using Anchor and Rust to implement a dynamic bonding curve for token pricing based on supply-demand economics." 
              />
              
              <Project 
                title="PeerPulse" 
                code="PP" 
                link="https://github.com/Artimus100/peerpulse" 
                description="Real-time peer-to-peer video communication app using WebRTC, Socket.IO, and a Node.js powered backend." 
              />
              
              <Project 
                title="Assistance" 
                code="AS" 
                link="https://github.com/Artimus100/assistance" 
                description="Spearheaded backend development of a content-upload platform for creators on the go, engineered a PostgreSQL-based data layer." 
              />
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <strong className="text-white">Languages:</strong> TypeScript, JavaScript, Rust, SQL
              </div>
              <div>
                <strong className="text-white">Frameworks:</strong> Node.js, Express.js, React, Next.js
              </div>
              <div>
                <strong className="text-white">Databases:</strong> PostgreSQL, MongoDB
              </div>
              <div>
                <strong className="text-white">Tools:</strong> Git, Docker, Solana CLI, Anchor
              </div>
              <div>
                <strong className="text-white">Concepts:</strong> REST APIs, WebSockets, WebRTC, Smart Contracts, DeFi
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Education</h2>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-sm font-medium text-white">PU</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-white">Parul University</h3>
                    <p className="text-gray-300 text-sm">Computer Science and Engineering</p>
                  </div>
                  <span className="text-gray-400 text-sm">2022 - 2026</span>
                </div>
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section className="mt-24 pt-12 border-t border-gray-800">
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="p-3 text-white hover:text-gray-400 transition-colors">
                <Home className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 text-white hover:text-gray-400 transition-colors">
                <FileText className="h-6 w-6" />
              </a>
              <a href="https://github.com/Artimus100" className="p-3 text-white hover:text-gray-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 text-white hover:text-gray-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 text-white hover:text-gray-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://x.com/rhul_am" className="p-3 text-white hover:text-gray-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 text-white hover:text-gray-400 transition-colors">
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

function Project({ title, code, link, description, date }: { title: string; code: string; link?: string; description: string; date?: string }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-medium text-white">{code}</span>
        </div>
        <h3 className="font-medium text-xl text-white">{title}</h3>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      
      <div className="flex justify-between items-center">
        {link ? (
          <a href={link} className="text-blue-400 hover:underline text-sm" target="_blank" rel="noreferrer">
            View Project
          </a>
        ) : (
          date && <span className="text-gray-400 text-sm">{date}</span>
        )}
      </div>
    </div>
  );
}

export default App;