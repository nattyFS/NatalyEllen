"use client";

import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Languages" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 85, category: "Languages" },
  { name: "Mysql", level: 82, category: "Database" },
  { name: "Tailwind CSS", level: 94, category: "Frontend" },
  { name: "C#", level: 78, category: "Backend" },
  { name: "Automation tests E2E", level: 80, category: "Automation" },
  { name: "Docker / K8s", level: 75, category: "DevOps" },
];

function SkillBar({ skill, isVisible }: { skill: Skill; isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-muted-foreground text-sm font-mono">
          {width}%
        </span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${width}%` }}
        >
          {/* Glow effect on bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 blur-sm opacity-50" />
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <SkillBar skill={skill} isVisible={isVisible} />
            </div>
          ))}
        </div>

        {/* Tech stack badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["AWS", "Git", "Azure", "UI/UX","Vercel", "Figma", "API"].map((tech) => (
            <span
              key={tech}
              className="glass px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
