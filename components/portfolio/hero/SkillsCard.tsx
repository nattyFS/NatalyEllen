import { LucideIcon } from "lucide-react";

interface SkillItem {
  name: string;
  icon: LucideIcon;
}

interface SkillsCardProps {
  title: string;
  items: SkillItem[];
}

export function SkillsCard({ title, items }: SkillsCardProps) {
  return (
    <div className="glass p-7 bg-background/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(255,118,87,0.12)] rounded-3xl border border-primary/20 md:rounded-lg md:border-primary/10">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-primary/50 rounded-full" />
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li 
            key={item.name} 
            className="flex items-center gap-3 group text-muted-foreground hover:text-foreground transition-colors"
          >
            <item.icon className="w-5 h-5 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            <span className="text-sm font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}