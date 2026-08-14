"use client";

import { HeroImage } from "./HeroImage";
import { HeroButtons, HeroSocial } from "./HeroActions";
import { TechStack } from "./TechStack";
import { SkillsCard } from "./SkillsCard";
import { services, quality, product } from "./data";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Grid Principal (Ordem controlada responsivamente) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Nome e Título (Ordem 1 no Mobile, Coluna 1 no Desktop) */}
          <div className="order-1 md:order-1 flex flex-col gap-6">
            
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 rounded-full md:rounded-sm px-4 py-1.5 gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Each day is a new opportunity to grow
              </Badge>
              
              <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-none">
                Nataly <span className="text-primary text-glow">Ellen</span>
              </h1>
            </div>

          </div>

          {/* Imagem (Ordem 2 no Mobile, Coluna 2 no Desktop, ocupando várias linhas) */}
          <div className="order-2 md:order-2 md:col-start-2 md:row-start-1 md:row-span-4 flex justify-center md:justify-end">
            <HeroImage />
          </div>

          {/* Textos (Ordem 3 no Mobile, Coluna 1 no Desktop) */}
          <div className="order-3 md:order-3 md:col-start-1 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 flex flex-col md:flex-row md:items-center md:gap-2">
              <span>Front End Dev</span>
              <span className="hidden md:inline text-primary">•</span>
              <span>QA</span>
              <span className="hidden md:inline text-primary">•</span>
              <span>UI/UX Designer</span>
            </h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
              A book lover passionate about building meaningful digital products. 
              I design, develop and improve solutions combining software engineering, 
              design thinking and quality assurance.
            </p>
          </div>

          {/* Ações, Tech e Social (Ordem 4 no Mobile, Coluna 1 no Desktop) */}
          <div className="order-4 md:order-4 md:col-start-1 flex flex-col gap-8">
            <HeroButtons />
            <TechStack />
            <HeroSocial />
          </div>

        </div>

        {/* Linha Divisória Sutíl */}
        <div className="w-full h-[1px] bg-border/40" />

        {/* Cards de Skills (3 Colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <SkillsCard title="Services" items={services} />
          <SkillsCard title="Quality" items={quality} />
          <SkillsCard title="Product" items={product} />
        </div>

      </div>
    </section>
  );
}