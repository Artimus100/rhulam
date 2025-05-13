import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'caelumx',
    title: 'CaelumX',
    description: 'A cloud-native platform for deploying and managing blockchain nodes with automated scaling and monitoring capabilities.',
    tags: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'AWS'],
    githubUrl: 'https://github.com/yourusername/caelumx',
    liveUrl: 'https://caelumx.io',
  },
  {
    id: 'peerpulse',
    title: 'PeerPulse',
    description: 'Decentralized social networking platform built on Solana with encrypted messaging and content monetization features.',
    tags: ['Rust', 'Solana', 'React', 'TypeScript', 'WebRTC'],
    githubUrl: 'https://github.com/yourusername/peerpulse',
  },
  {
    id: 'assistance',
    title: 'Assistance',
    description: 'AI-powered personal assistant for developers that integrates with Git workflows and provides code optimization suggestions.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/assistance',
    liveUrl: 'https://getassistance.dev',
  },
  {
    id: 'chainquery',
    title: 'ChainQuery',
    description: 'GraphQL API for blockchain data analytics with real-time indexing and comprehensive query capabilities.',
    tags: ['GraphQL', 'Node.js', 'TypeScript', 'MongoDB', 'Redis'],
    githubUrl: 'https://github.com/yourusername/chainquery',
  },
  {
    id: 'securevault',
    title: 'SecureVault',
    description: 'Zero-knowledge encrypted storage solution for sensitive documents with blockchain-based access control.',
    tags: ['Rust', 'WebAssembly', 'React', 'Ethereum', 'IPFS'],
    githubUrl: 'https://github.com/yourusername/securevault',
    liveUrl: 'https://securevault.tech',
  },
];

export const filterTags = [
  'All',
  'TypeScript',
  'Rust',
  'React',
  'Node.js',
  'Solana',
  'GraphQL',
  'Python',
  'Blockchain',
];