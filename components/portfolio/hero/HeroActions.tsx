import { Github, Linkedin } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
      <button className="px-8 py-3.5 font-medium transition-all duration-300 hover:scale-105 rounded-full border border-primary text-primary bg-transparent md:rounded-md md:bg-primary md:text-primary-foreground md:border-transparent md:hover:bg-primary/90">
        <a href="ResumeNatalyEllen(1).pdf" download="NatalyEllen_Resume.pdf">
          Download Resume
        </a>
      </button>
      <button className="px-8 py-3.5 font-medium transition-all duration-300 hover:scale-105 rounded-full border border-muted-foreground/30 text-foreground bg-transparent md:rounded-md md:bg-secondary md:border-transparent md:hover:bg-secondary/80">
        <a href="#projects" className="text-inherit no-underline">
          View Projects
        </a>
      </button>
    </div>
  );
}

export function HeroSocial() {
  return (
    <div className="flex items-center gap-4 mt-6 md:mt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 rounded-full border border-primary/20 bg-primary/5 md:rounded-md md:bg-transparent md:hover:border-primary/40"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/nataly-ellen-assis-659510214/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 rounded-full border border-primary/20 bg-primary/5 md:rounded-md md:bg-transparent md:hover:border-primary/40"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
}