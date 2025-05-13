import { socialLinks } from '../../data/socialLinks';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
};

export function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rahul Mishra. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-5">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.platform}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}