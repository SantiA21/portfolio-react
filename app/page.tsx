"use client";

import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { EducationTimeline } from "@/components/education-timeline";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { LanguageSelector } from "@/components/language-selector";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { useLanguage } from "@/hooks/use-language";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Database,
  Globe,
  Palette,
  Zap,
  Coffee,
  Settings,
  Layers,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Componentes SVG personalizados para Python y PHP
const PythonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.5 2 6 4.5 6 8v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-3.5-2.5-6-6-6zm-2 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
    <path d="M12 22c3.5 0 6-2.5 6-6v-2c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2c0 3.5 2.5 6 6 6zm2-6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
  </svg>
);

const PHPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    {/* Cabeza grande del elefante */}
    <circle cx="12" cy="9" r="5.5" />
    {/* Oreja izquierda */}
    <ellipse cx="7.5" cy="7.5" rx="2" ry="3.5" />
    {/* Oreja derecha */}
    <ellipse cx="16.5" cy="7.5" rx="2" ry="3.5" />
    {/* Trompa más corta con mejor curvatura */}
    <path
      d="M12 14.5 Q10 16 8.5 18 Q7.5 19.5 6.5 20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Ojos */}
    <circle cx="10" cy="8.5" r="0.8" fill="white" />
    <circle cx="14" cy="8.5" r="0.8" fill="white" />
    {/* Pupilas */}
    <circle cx="10" cy="8.5" r="0.4" fill="currentColor" />
    <circle cx="14" cy="8.5" r="0.4" fill="currentColor" />
  </svg>
);

export default function Portfolio() {
  const handleEmailClick = () => {
    window.location.href = "mailto:santiago.n.almiron@gmail.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden ">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute top-6 right-6 z-50">
            <LanguageSelector />
          </div>

          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <HeroSection />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
            </div>
          </div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}

function SkillsSection() {
  const { t } = useLanguage();

  const skills = [
    {
      name: "HTML",
      icon: <Globe className="w-6 h-6" />,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: <Palette className="w-6 h-6" />,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: <Zap className="w-6 h-6" />,
      color: "#F7DF1E",
    },
    {
      name: "Java",
      icon: <Coffee className="w-6 h-6" />,
      color: "#ED8B00",
    },
    {
      name: ".NET",
      icon: <Cpu className="w-6 h-6" />,
      color: "#512BD4",
    },
    {
      name: "Python",
      icon: <PythonIcon />,
      color: "#3776AB",
    },
    {
      name: "PHP",
      icon: <PHPIcon />,
      color: "#777BB4",
    },
    {
      name: "WordPress",
      icon: <Settings className="w-6 h-6" />,
      color: "#21759B",
    },
    {
      name: "SQL Server",
      icon: <Database className="w-6 h-6" />,
      color: "#CC2927",
    },
    {
      name: "Elementor",
      icon: <Layers className="w-6 h-6" />,
      color: "#92003B",
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-16">
          {skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <div className="mt-16">
          <Timeline />
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title={t("education.title")}
          subtitle={t("education.subtitle")}
        />

        <div className="mt-16">
          <EducationTimeline />
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const { t } = useLanguage();

  const handleEmailClick = () => {
    window.location.href = "mailto:santiago.n.almiron@gmail.com";
  };

  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm text-zinc-500 mt-2">
            © {new Date().getFullYear()} Santiago Almirón. {t("footer.rights")}
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/SantiA21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/almiron-santiago-nahuel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            onClick={handleEmailClick}
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
