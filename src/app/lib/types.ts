export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Skill = {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Dev Tools' | 'Blockchain';
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};