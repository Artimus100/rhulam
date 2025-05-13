import { useState, useEffect, useRef } from 'react';
import { skills } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillCategories = ['Languages', 'Frameworks', 'Dev Tools', 'Blockchain'];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getSkillColor = (level?: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-chart-1/20 hover:bg-chart-1/30 border-chart-1/30';
      case 'Advanced':
        return 'bg-chart-2/20 hover:bg-chart-2/30 border-chart-2/30';
      case 'Intermediate':
        return 'bg-chart-3/20 hover:bg-chart-3/30 border-chart-3/30';
      case 'Beginner':
        return 'bg-chart-4/20 hover:bg-chart-4/30 border-chart-4/30';
      default:
        return 'bg-muted hover:bg-muted/80';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground text-lg text-center">
              Core technologies and tools I use to bring projects to life.
            </p>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Tabs defaultValue="Languages" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillCategories.map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="flex flex-wrap gap-3">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <TooltipProvider key={skill.name}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div 
                                className={`transition-all duration-500 ${
                                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                              >
                                <Badge 
                                  
                                  className={`text-sm py-1.5 px-3 rounded-full ${getSkillColor(skill.level)}`}
                                >
                                  {skill.name}
                                </Badge>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.level || 'Proficient'}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}