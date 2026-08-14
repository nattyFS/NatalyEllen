"use client";

import { Mail, MessageCircle, Heart, ArrowUp } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-4 mt-12">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Contact CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-primary text-glow">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/14988102412"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 rounded-2xl hover:border-green-500/50 transition-all duration-300 group flex items-center justify-center gap-3 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Chat on</p>
                <p className="text-lg font-semibold text-foreground">WhatsApp</p>
              </div>
            </a>
            
            <a
              href="mailto:natalyellen.assis@gmail.com"
              className="glass-card px-8 py-4 rounded-2xl hover:border-primary/50 transition-all duration-300 group flex items-center justify-center gap-3 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Send an</p>
                <p className="text-lg font-semibold text-foreground">Email</p>
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Nataly Ellen <Heart className="w-4 h-4 text-primary fill-primary" /> GOD is the greatest of all.
          </p>
          
          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Projects
            </a>
            <a href="#education" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Education
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="glass p-3 rounded-xl hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Year */}
        <p className="text-center text-muted-foreground/50 text-xs mt-8">
          © {new Date().getFullYear()} Nataly Ellen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
