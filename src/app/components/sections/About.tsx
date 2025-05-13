import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const rect = spotlightRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spotlightRef.current.style.setProperty('--mouse-x', `${x}px`);
      spotlightRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const element = spotlightRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      <div 
        ref={spotlightRef}
        className="spotlight-wrapper absolute inset-0 spotlight"
      />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div 
            className={`flex flex-col space-y-6 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Rahul Mishra
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mt-2">
                Backend & Blockchain Developer
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <p className="relative text-lg text-muted-foreground leading-relaxed bg-background/80 rounded-lg p-4">
                A passionate developer with 6+ years of experience in Web3, backend systems, 
                and open source contributions. Specializing in building scalable 
                decentralized applications and high-performance API services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="rounded-full bg-primary hover:opacity-90 transition-opacity text-lg py-3 px-6"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                className="rounded-full border-primary/20 hover:bg-primary/10 text-lg py-3 px-6"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div 
            className={`flex justify-center md:justify-end transform transition-all duration-700 delay-300 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative floating-element">
              <div className="absolute -z-10 top-5 -left-5 w-full h-full rounded-full bg-primary/20 blur-2xl"></div>
              <div className="absolute -z-10 -bottom-5 -right-5 w-4/5 h-4/5 rounded-full bg-primary/20 blur-2xl"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl relative bg-gradient-to-br from-background via-background to-primary/10">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="Rahul Mishra" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
              
              <div className="absolute top-0 -right-4 w-8 h-8 rounded-full bg-primary animate-bounce"></div>
              <div className="absolute -bottom-4 left-0 w-12 h-12 rounded-full border-2 border-primary animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-primary/50 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}