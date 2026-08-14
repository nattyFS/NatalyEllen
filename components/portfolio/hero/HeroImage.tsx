import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] mx-auto animate-in fade-in zoom-in-95 duration-1000">
      {/* Glow de Fundo */}
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen" />
      
      {/* Container da Imagem */}
      <div className="relative w-full h-full overflow-hidden shadow-2xl shadow-primary/10 transition-transform duration-700 hover:scale-[1.02] rounded-full border border-primary/20 md:rounded-2xl">
        <Image
          src="/images/me.jpg"
          alt="Nataly Ellen"
          fill
          priority
          className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </div>
  );
}