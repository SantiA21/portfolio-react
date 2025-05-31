"use client"

import { useLanguageSafe } from "@/hooks/use-language"

export default function CVPage() {
  const { language } = useLanguageSafe()

  const cvData = {
    es: {
      name: "SANTIAGO N. ALMIRÓN",
      title: "DESARROLLADOR WEB",
      phone: "+54 9 11 6002-1513",
      email: "santiago.n.almiron@gmail.com",
      about: {
        title: "SOBRE MÍ",
        content:
          "Técnico Superior en Programación y Desarrollador Web, con más de dos años de experiencia gestionando sistemas para una de las empresas más grandes de Argentina. Autodidacta, colaborativo y resolutivo, con habilidades para crear y optimizar sitios web de alto rendimiento, adaptándome rápidamente a nuevas tecnologías y tendencias.",
      },
      experience: {
        title: "EXPERIENCIA",
        jobs: [
          {
            title: "HELP DESK",
            company: "CINET S.A.",
            period: "2023 - ACTUAL",
            description: [
              "Gestión y resolución de incidencias: Administración de una ticketera para el seguimiento y resolución eficiente de problemas técnicos.",
              "Manejo de bases de datos: Gestión y consulta de bases de datos a nivel intermedio para análisis y optimización de información.",
              "Operación de ERP y CRM: Administración y soporte de sistemas ERP y CRM, asegurando su correcto funcionamiento y adaptación a las necesidades del negocio.",
            ],
          },
          {
            title: "DESARROLLADOR FULL STACK",
            company: "NATOR FURNITURE",
            period: "2022 - 2023",
            description: [
              "Desarrollo y mantenimiento de aplicaciones web: Implementación de interfaces de usuario (frontend) y lógica de negocio (backend), asegurando una experiencia fluida y eficiente.",
              "Gestión de bases de datos y servidores: Diseño, optimización y mantenimiento de bases de datos, así como la configuración y administración de servidores para garantizar la estabilidad del sistema.",
              "Integración de APIs y servicios externos: Conexión de aplicaciones con servicios de terceros, desarrollo de APIs propias y aseguramiento de la interoperabilidad entre sistemas.",
            ],
          },
        ],
      },
      education: {
        title: "EDUCACIÓN",
        items: [
          {
            title: "Técnico Superior en Programación",
            institution: "Universidad Nacional de Lomas de Zamora",
            period: "2020 - 2022",
            location: "Buenos Aires, Argentina.",
          },
          {
            title: "Diploma en desarrollo con Python 3",
            institution: "Udemy",
            period: "2024",
            location: "",
          },
        ],
      },
      skills: {
        title: "HABILIDADES",
        technical:
          "Conocimientos Técnicos: WordPress, Elementor, PHP, .NET, Javascript(ReactJS), Python(Flask), Java, SQLServer, TailwindCSS",
        languages: "Lenguajes: Español Nativo, Inglés A2",
      },
    },
    en: {
      name: "SANTIAGO N. ALMIRÓN",
      title: "WEB DEVELOPER",
      phone: "+54 9 11 6002-1513",
      email: "santiago.n.almiron@gmail.com",
      about: {
        title: "ABOUT ME",
        content:
          "Higher Technician in Programming and Web Developer, with over two years of experience managing systems for one of Argentina's largest companies. Self-taught, collaborative, and solution-oriented, with skills to create and optimize high-performance websites, quickly adapting to new technologies and trends.",
      },
      experience: {
        title: "EXPERIENCE",
        jobs: [
          {
            title: "HELP DESK",
            company: "CINET S.A.",
            period: "2023 - PRESENT",
            description: [
              "Incident management and resolution: Administration of a ticketing system for efficient tracking and resolution of technical problems.",
              "Database management: Management and querying of databases at intermediate level for analysis and information optimization.",
              "ERP and CRM operation: Administration and support of ERP and CRM systems, ensuring their proper functioning and adaptation to business needs.",
            ],
          },
          {
            title: "FULL STACK DEVELOPER",
            company: "NATOR FURNITURE",
            period: "2022 - 2023",
            description: [
              "Web application development and maintenance: Implementation of user interfaces (frontend) and business logic (backend), ensuring a smooth and efficient experience.",
              "Database and server management: Design, optimization and maintenance of databases, as well as server configuration and administration to ensure system stability.",
              "API and external service integration: Connecting applications with third-party services, developing custom APIs and ensuring interoperability between systems.",
            ],
          },
        ],
      },
      education: {
        title: "EDUCATION",
        items: [
          {
            title: "Higher Technician in Programming",
            institution: "Universidad Nacional de Lomas de Zamora",
            period: "2020 - 2022",
            location: "Buenos Aires, Argentina.",
          },
          {
            title: "Python 3 Development Diploma",
            institution: "Udemy",
            period: "2024",
            location: "",
          },
        ],
      },
      skills: {
        title: "SKILLS",
        technical:
          "Technical Knowledge: WordPress, Elementor, PHP, .NET, Javascript(ReactJS), Python(Flask), Java, SQLServer, TailwindCSS",
        languages: "Languages: Native Spanish, English A2",
      },
    },
  }

  const data = cvData[language]

  return (
    <div className="min-h-screen bg-white text-black p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-300 pb-6">
        <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{data.title}</h2>
        <div className="flex justify-center gap-8 text-sm">
          <span>{data.phone}</span>
          <span>{data.email}</span>
        </div>
      </div>

      {/* About */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-3 text-blue-600 border-b border-blue-600 pb-1">{data.about.title}</h3>
        <p className="text-sm leading-relaxed text-justify">{data.about.content}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-3 text-blue-600 border-b border-blue-600 pb-1">{data.experience.title}</h3>
        {data.experience.jobs.map((job, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-sm">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.company}</p>
              </div>
              <span className="text-sm text-gray-500">{job.period}</span>
            </div>
            <ul className="text-sm space-y-1">
              {job.description.map((desc, i) => (
                <li key={i} className="text-justify">
                  • {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-3 text-blue-600 border-b border-blue-600 pb-1">{data.education.title}</h3>
        {data.education.items.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.institution}</p>
                {item.location && <p className="text-sm text-gray-500">{item.location}</p>}
              </div>
              <span className="text-sm text-gray-500">{item.period}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-3 text-blue-600 border-b border-blue-600 pb-1">{data.skills.title}</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>•</strong> {data.skills.technical}
          </p>
          <p>
            <strong>•</strong> {data.skills.languages}
          </p>
        </div>
      </section>

      {/* Print styles */}
      <style jsx>{`
        @media print {
          body { margin: 0; }
          .no-print { display: none; }
        }
      `}</style>
    </div>
  )
}
