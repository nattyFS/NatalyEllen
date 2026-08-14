"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  //liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/nattyFS/EcommerceDashboard",
  },
  {
    id: 3,
    title: "example Landing Page for store",
    description: "Intelligent and modern landing page for an e-commerce store with responsive design and smooth user experience.",
    image: "/images/model.png",
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/nattyFS/LandingPage",
  }
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[320px] md:w-[400px] lg:w-[480px] group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-500 ease-out ${
          isHovered ? "scale-110 z-20" : "scale-100 z-10"
        }`}
      >
        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        
        {/* Content */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-4">
            {/*<a
              href={project.liveUrl}
              className="glass px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/20 transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>*/}
            <a
              href={project.githubUrl}
              className="glass px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/20 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
        
        {/* Glow effect on hover */}
        {isHovered && (
          <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-xl -z-10" />
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Last <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on recently
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-2 px-4 md:px-12 mb-6">
          <button
            onClick={() => scroll("left")}
            className="glass p-3 rounded-xl hover:bg-primary/20 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="glass p-3 rounded-xl hover:bg-primary/20 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Projects Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-4 md:px-12 pb-8 projects-scroll snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
