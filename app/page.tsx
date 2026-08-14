import { Navigation } from "@/components/portfolio/navigation";
// O import agora aponta para o layout principal dentro da nova pasta hero
import { HeroSection } from "@/components/portfolio/hero/HeroSection"; 
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { FooterSection } from "@/components/portfolio/footer-section";

export default function PortfolioPage() {
  return (
    <main className="relative bg-background min-h-screen">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Hero Section Refatorada 
        Toda a complexidade de grid, mobile-first e animações 
        está encapsulada dentro deste componente.
      */}
      <HeroSection />
      
      {/* Skills Section with Progress Bars */}
      <SkillsSection />
      
      {/* Projects Section - Netflix Style Carousel */}
      <ProjectsSection />
      
      {/* Education & Languages Section */}
      <EducationSection />
      
      {/* Footer with Contact Buttons */}
      <FooterSection />
    </main>
  );
}