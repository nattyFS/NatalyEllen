"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  ArrowDown,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";

const basePath = process.env.NODE_ENV === "production" ? "/NatalyEllen" : "";
const services = [
  "Website Development",
  "Landing Pages",
  "Full-Stack Web Applications",
  "UI/UX Design",
  "Product Design & Prototyping",
  "End-to-End (E2E) Test Automation",
  "Test Scenario Design & Validation",
];

const approach = [
  "Requirements Analysis",
  "Software Architecture",
  "User Experience (UX)",
  "Agile Development",
  "Security & Best Practices",
  "Quality Assurance",
  "Continuous Improvement",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Playwright",
  "Cypress",
  "REST APIs",
  "Git",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute top-24 left-20 w-96 h-96 rounded-full bg-primary/20 blur-[140px] animate-pulse" />

        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[150px] animate-pulse delay-1000" />

      </div>

      {/* Card */}

      <div className="glass-card relative z-10 w-full max-w-7xl rounded-[32px] border border-white/10 p-8 md:p-14">

        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-16 items-center">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <Badge className="bg-primary/20 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-primary/20">

              <span className="relative flex h-2 w-2 mr-2">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />

              </span>

              Each day is a opportunity to learn and grow
            </Badge>

            {/* Name */}

            <div className="mt-8">

              <p className="text-muted-foreground text-lg mb-2">
                Hello, I'm
              </p>

              <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-none">

                Nataly{" "}

                <span className="text-primary text-glow">
                  Ellen
                </span>

              </h1>

            </div>

            {/* Title */}

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold leading-snug max-w-3xl">

              Front End{" "}

              <span className="text-primary">
                Developer
              </span>

              {" • "}

              <span className="text-primary">
                QA Engineer
              </span>

              {" • "}

              UI/UX Designer

            </h2>

            {/* Intro */}

            <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-3xl">

              A book lover passionate about building meaningful digital
              experiences.

              <br />
              <br />

              I design, develop and improve digital products—from websites
              and landing pages to complete web applications.

              My work combines software engineering, design thinking and
              quality assurance to deliver scalable, secure and intuitive
              solutions focused on real business value.

            </p>

            {/* Cards */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              {/* WHAT I DO */}

              <div className="glass rounded-3xl border border-primary/15 bg-background/30 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_35px_rgba(255,118,87,.18)]">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-1 h-8 rounded-full bg-primary" />

                  <div>

                    <p className="uppercase tracking-[0.25em] text-xs text-primary font-bold">

                      WHAT I DO

                    </p>

                  </div>

                </div>

                <ul className="space-y-3">

                  {services.map((service) => (

                    <li
                      key={service}
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />

                      <span>{service}</span>

                    </li>

                  ))}

                </ul>

              </div>

              {/* MY APPROACH */}

              <div className="glass rounded-3xl border border-primary/15 bg-background/30 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_35px_rgba(255,118,87,.18)]">

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-1 h-8 rounded-full bg-primary" />

                  <p className="uppercase tracking-[0.25em] text-xs text-primary font-bold">

                    MY APPROACH

                  </p>

                </div>

                <ul className="space-y-3">

                  {approach.map((item) => (

                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

            {/* Tech Stack */}

            <div className="mt-12">

              <div className="flex items-center gap-3 mb-5">

                <Code2 className="text-primary" size={20} />

                <h3 className="uppercase tracking-[0.25em] text-xs font-bold text-primary">

                  TECH STACK

                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {technologies.map((tech) => (

                  <span
                    key={tech}
                    className="glass px-4 py-2 rounded-full border border-primary/20 text-sm text-muted-foreground hover:border-primary hover:text-white transition-all duration-300 hover:scale-105"
                  >

                    {tech}

                  </span>

                ))}

              </div>

            </div>

            {/* Closing */}

            <div className="mt-10 flex items-start gap-3">

              <Sparkles
                className="text-primary mt-1"
                size={20}
              />

              <p className="text-muted-foreground leading-7 max-w-3xl">

                From the initial idea to the final product, I focus on
                building reliable, accessible and high-quality digital
                experiences that users love and businesses trust.

              </p>

            </div>
            {/* Social Links */}

            <div className="flex items-center gap-4 mt-12">

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group glass rounded-2xl p-4 border border-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,118,87,.25)]"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/nataly-ellen-assis-659510214/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group glass rounded-2xl p-4 border border-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,118,87,.25)]"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Glow */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-[340px] h-[340px] rounded-full bg-primary/20 blur-[90px]" />

            </div>

            {/* Decorative Rings */}

            <div
              className="absolute w-[370px] h-[370px] rounded-full border border-primary/15 animate-spin"
              style={{ animationDuration: "40s" }}
            />

            <div
              className="absolute w-[430px] h-[430px] rounded-full border border-dashed border-primary/10 animate-spin"
              style={{
                animationDuration: "70s",
                animationDirection: "reverse",
              }}
            />

            {/* Image */}

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[5px] border-primary/25 shadow-[0_0_60px_rgba(255,118,87,.18)]">

              <img
                src={`${basePath}/public/images/me.jpg`}
                alt="Nataly Ellen"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card */}

            <div className="hidden lg:flex absolute -bottom-6 -left-8 glass rounded-2xl px-6 py-5 border border-primary/20 backdrop-blur-xl">

              <div>

                <p className="text-3xl font-bold text-primary">
                  4+
                </p>

                <p className="text-sm text-muted-foreground">
                  Years building digital products
                </p>

              </div>

            </div>

            {/* Floating Card */}

            <div className="hidden lg:flex absolute top-10 -right-8 glass rounded-2xl px-6 py-5 border border-primary/20 backdrop-blur-xl">

              <div>

                <p className="text-3xl font-bold text-primary">
                  QA
                </p>

                <p className="text-sm text-muted-foreground">
                  Automation & Product Quality
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <a
          href="#skills"
          className="group flex flex-col items-center gap-2"
          aria-label="Scroll to Skills"
        >

          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">

            Scroll

          </span>

          <div className="glass rounded-full p-4 border border-primary/20 group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,118,87,.25)] animate-bounce">

            <ArrowDown className="w-5 h-5 text-primary" />

          </div>

        </a>

      </div>

    </section>
  );
}