import { techStack } from "./data";

export function TechStack() {
  return (
    <div className="mt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span 
            key={tech.name} 
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground bg-primary/5 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default rounded-full border border-primary/20 md:rounded-md md:border-transparent md:hover:border-primary/30"
          >
            <span className="text-base">{tech.icon}</span>
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}