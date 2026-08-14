"use client";

import { GraduationCap, Languages, Award, BookOpen } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface Language {
  name: string;
  level: string;
  flag: string;
}

const education: Education[] = [
  {
    degree: "technologist in systems analysis and development",
    institution: "FATEC University",
    year: "2022 - 2024",
    description: "The CST in Systems Analysis and Development aims to train highly qualified professionals to design, implement, and manage innovative technological solutions aligned with the demands of digital transformations in companies. The course prepares students to lead the adaptation of organizations to technological innovations, optimizing processes and adding value through information technology infrastructure..",
  },
  {
    degree: "High school integrated with a technical course",
    institution: "ETEC",
    year: "2019 - 2021",
    description: "High school integrated with a technical course in Systems Analysis and Development. Developing professionals who analyze and design systems. Build, document, test, and maintain information systems. Use development environments and specific programming languages. Model, implement, and maintain databases. It was my first contact with the IT world.",
  },
];

const languages: Language[] = [
  { name: "Portuguese", level: "Native", flag: "BRA" },
  { name: "Spanish", level: "Advanced", flag: "ES" },
  { name: "English", level: "Fluent", flag: "USA" },
  { name: "Russian", level: "Basic", flag: "RU" },
];

/*
const certifications = [
  "AWS Solutions Architect",
  "Google Cloud Professional",
  "MongoDB Developer",
  "Kubernetes Administrator",
];*/

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 relative">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & <span className="text-primary text-glow">Languages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            My academic background and language proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="glass p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

          </div>

          {/* Languages & More */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="glass p-3 rounded-xl">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Languages</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 group text-center"
                >
                  <span className="text-4xl mb-3 block">{lang.flag}</span>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {lang.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{lang.level}</p>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Currently Learning</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Advanced Test Automation & CI/CD</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                    ))}
                    {[4, 5].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-muted" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Designing and Implementing Microsoft DevOps Solutions</span>
                  <div className="flex gap-1">
                    {[1, 2].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                    ))}
                    {[3, 4, 5].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-muted" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">AI Applied to Quality</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                    ))}
                    {[5].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-muted" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
