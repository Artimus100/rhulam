import { useState, useRef, useEffect } from 'react';
import { projects, filterTags } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));

    return () => {
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, [filteredProjects]);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-16 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-center mb-8">
            A selection of my recent work spanning blockchain development, 
            cloud infrastructure, and AI-driven applications.
          </p>
          
          {/* Filter tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {filterTags.map(tag => (
              <Badge 
                key={tag}
                className={`${
                  activeFilter === tag ? "bg-primary text-white" : "bg-transparent border"
                } cursor-pointer text-sm px-3 py-1 rounded-full hover:bg-primary/90 transition-all ${
                  activeFilter === tag ? "" : "hover:text-primary-foreground"
                }`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              id={`project-${project.id}`}
              className={`project-card transform transition-all duration-700 ${
                index % 2 === 0 ? 'md:translate-y-10' : ''
              } ${
                visibleItems[`project-${project.id}`] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${(index % 3) * 150}ms` 
              }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 group bg-card hover:bg-card/80">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <Badge key={`${project.id}-${tag}`} className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex gap-3">
                  {project.githubUrl && (
                    <Button 
                     
                      
                      className="rounded-full" 
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                     
                      className="rounded-full" 
                      asChild
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}