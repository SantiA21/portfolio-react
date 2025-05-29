"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero Section
    "hero.role": "Web Developer",
    "hero.greeting": "Hi, I'm",
    "hero.description":
      "I craft exceptional digital experiences with code, creativity, and a passion for innovation.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "My background and journey",
    "about.description1":
      "I'm a Higher Technician in Programming and Web Developer with over two years of experience managing systems for one of Argentina's largest companies. Self-taught, collaborative, and solution-oriented, with skills to create and optimize high-performance websites.",
    "about.description2":
      "I quickly adapt to new technologies and trends, always staying current with the latest developments in web development. My experience ranges from frontend development with modern frameworks to system management in enterprise environments.",
    "about.description3":
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, and continuously learning to improve my craft as a developer.",
    "about.name": "Name",
    "about.email": "Email",
    "about.location": "Location",
    "about.availability": "Availability",
    "about.availableStatus": "Open to opportunities",
    "about.downloadResume": "View Resume",
    "about.availableForWork": "Available for work",

    // Skills Section
    "skills.title": "My Skills",
    "skills.subtitle": "Technologies I work with",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of my recent work",
    "projects.natorFurniture.title": "Nator Furniture",
    "projects.natorFurniture.description":
      "E-commerce platform for furniture sales with modern design and full functionality.",
    "projects.taskManager.title": "Task Manager",
    "projects.taskManager.description":
      "Task management application with user authentication and real-time updates.",
    "projects.pokedexApi.title": "Pokédex API",
    "projects.pokedexApi.description":
      "Interactive Pokédx using the Pokémon API with search and detailed information.",
    "projects.openWeather.title": "OpenWeather API",
    "projects.openWeather.description":
      "Weather application with real-time data and forecasts using OpenWeather API.",
    "projects.movieCatalog.title": "Movie Catalog",
    "projects.movieCatalog.description":
      "Movie catalog with search, filters, and detailed information using movie APIs.",
    "projects.driveApp.title": "Drive - Find Your Car",
    "projects.driveApp.description":
      "Car search platform with advanced filters and detailed vehicle information.",
    "projects.cloudPage.title": "Cloud Page",
    "projects.cloudPage.description":
      "Modern landing page with cloud services and responsive design.",
    "projects.code": "Code",
    "projects.liveDemo": "Live Demo",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",
    "experience.senior.title": "Help Desk Technician",
    "experience.senior.company": "CINET S.A.",
    "experience.senior.period": "2023 - Present",
    "experience.senior.description":
      "Incident management and resolution: Administration of a ticketing system for efficient tracking and resolution of technical problems. Database management and ERP/CRM system operation.",
    "experience.frontend.title": "Full Stack Developer",
    "experience.frontend.company": "Nator Furniture",
    "experience.frontend.period": "2022 - 2023",
    "experience.frontend.description":
      "Development and maintenance of web applications: Implementation of user interfaces (frontend) and business logic (backend), ensuring a smooth and efficient experience.",

    // Education Section
    "education.title": "Education & Certifications",
    "education.subtitle": "My academic background",
    "experience.web.title": "Higher Technician in Programming",
    "experience.web.company": "Universidad Nacional de Lomas de Zamora",
    "experience.web.period": "2020 - 2022",
    "experience.web.description":
      "Completed Higher Technician degree in Programming, gaining solid foundations in software development and programming methodologies.",
    "experience.intern.title": "Python Development Diploma",
    "experience.intern.company": "Udemy",
    "experience.intern.period": "2024",
    "experience.intern.description":
      "Completed comprehensive Python development course, expanding skills in backend development and automation.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's work together",
    "contact.letsConnect": "Let's Connect",
    "contact.description":
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.availableForWork": "Available for new opportunities",
    "contact.sendEmail": "Send Email",
    "contact.viewResume": "View Resume",
    "contact.workingHours": "Working Information",
    "contact.timezone": "Timezone",
    "contact.responseTime": "Response Time",
    "contact.responseTimeValue": "Within 24 hours",
    "contact.followMe": "Follow Me",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Navigation
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "nav.resume": "CV",

    // Hero Section
    "hero.role": "Desarrollador Web",
    "hero.greeting": "Hola, soy",
    "hero.description":
      "Creo experiencias digitales excepcionales con código, creatividad y pasión por la innovación.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contactMe": "Contáctame",

    // About Section
    "about.title": "Acerca de Mí",
    "about.subtitle": "Mi experiencia y trayectoria",
    "about.description1":
      "Soy Técnico Superior en Programación y Desarrollador Web, con más de dos años de experiencia gestionando sistemas para una de las empresas más grandes de Argentina. Autodidacta, colaborativo y resolutivo, con habilidades para crear y optimizar sitios web de alto rendimiento.",
    "about.description2":
      "Me adapto rápidamente a nuevas tecnologías y tendencias, manteniéndome siempre actualizado con los últimos desarrollos en desarrollo web. Mi experiencia abarca desde desarrollo frontend con frameworks modernos hasta gestión de sistemas en entornos empresariales.",
    "about.description3":
      "Cuando no estoy programando, me dedico a explorar nuevas tecnologías, contribuir a proyectos de código abierto y aprender continuamente para mejorar mi oficio como desarrollador.",
    "about.name": "Nombre",
    "about.email": "Email",
    "about.location": "Ubicación",
    "about.availability": "Disponibilidad",
    "about.availableStatus": "Abierto a oportunidades",
    "about.downloadResume": "Ver CV",
    "about.availableForWork": "Disponible para trabajar",

    // Skills Section
    "skills.title": "Mis Habilidades",
    "skills.subtitle": "Tecnologías con las que trabajo",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Algunos de mis trabajos recientes",
    "projects.natorFurniture.title": "Nator Furniture",
    "projects.natorFurniture.description":
      "Plataforma e-commerce para venta de muebles con diseño moderno y funcionalidad completa.",
    "projects.taskManager.title": "Gestor de Tareas",
    "projects.taskManager.description":
      "Aplicación de gestión de tareas con autenticación de usuarios y actualizaciones en tiempo real.",
    "projects.pokedexApi.title": "Pokédx API",
    "projects.pokedexApi.description":
      "Pokédx interactiva usando la API de Pokémon con búsqueda e información detallada.",
    "projects.openWeather.title": "OpenWeather API",
    "projects.openWeather.description":
      "Aplicación del clima con datos en tiempo real y pronósticos usando OpenWeather API.",
    "projects.movieCatalog.title": "Catálogo de Películas",
    "projects.movieCatalog.description":
      "Catálogo de películas con búsqueda, filtros e información detallada usando APIs de cine.",
    "projects.driveApp.title": "Drive - Busca tu Auto",
    "projects.driveApp.description":
      "Plataforma de búsqueda de autos con filtros avanzados e información detallada de vehículos.",
    "projects.cloudPage.title": "Cloud Page",
    "projects.cloudPage.description":
      "Landing page moderna con servicios en la nube y diseño responsivo.",
    "projects.code": "Código",
    "projects.liveDemo": "Demo en Vivo",

    // Experience Section
    "experience.title": "Experiencia Laboral",
    "experience.subtitle": "Mi trayectoria profesional",
    "experience.senior.title": "Help Desk",
    "experience.senior.company": "CINET S.A.",
    "experience.senior.period": "2023 - Actual",
    "experience.senior.description":
      "Gestión y resolución de incidencias: Administración de una ticketera para el seguimiento y resolución eficiente de problemas técnicos. Manejo de bases de datos y operación de sistemas ERP y CRM.",
    "experience.frontend.title": "Desarrollador Full Stack",
    "experience.frontend.company": "Nator Furniture",
    "experience.frontend.period": "2022 - 2023",
    "experience.frontend.description":
      "Desarrollo y mantenimiento de aplicaciones web: Implementación de interfaces de usuario (frontend) y lógica de negocio (backend), asegurando una experiencia fluida y eficiente.",

    // Education Section
    "education.title": "Educación y Certificaciones",
    "education.subtitle": "Mi formación académica",
    "experience.web.title": "Técnico Superior en Programación",
    "experience.web.company": "Universidad Nacional de Lomas de Zamora",
    "experience.web.period": "2020 - 2022",
    "experience.web.description":
      "Completé la carrera de Técnico Superior en Programación, obteniendo bases sólidas en desarrollo de software y metodologías de programación.",
    "experience.intern.title": "Diploma en Desarrollo con Python",
    "experience.intern.company": "Udemy",
    "experience.intern.period": "2024",
    "experience.intern.description":
      "Completé un curso integral de desarrollo con Python, expandiendo mis habilidades en desarrollo backend y automatización.",

    // Contact Section
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "Trabajemos juntos",
    "contact.letsConnect": "Conectemos",
    "contact.description":
      "Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes, o simplemente charlar sobre tecnología.",
    "contact.email": "Email",
    "contact.location": "Ubicación",
    "contact.availableForWork": "Disponible para nuevas oportunidades",
    "contact.sendEmail": "Enviar Email",
    "contact.viewResume": "Ver CV",
    "contact.workingHours": "Información de Trabajo",
    "contact.timezone": "Zona Horaria",
    "contact.responseTime": "Tiempo de Respuesta",
    "contact.responseTimeValue": "Dentro de 24 horas",
    "contact.followMe": "Sígueme",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "en" || savedLanguage === "es") {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (isClient) {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] ?? key;
  };

  if (!isClient) return null; // Evita renderizar en SSR o antes del montaje

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return context;
};

// Safe hook that returns default values if not within provider
export function useLanguageSafe() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return {
      language: "es" as Language,
      setLanguage: () => {},
      t: (key: string) => key,
    };
  }
  return context;
}
