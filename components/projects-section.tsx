"use client"

import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/hooks/use-language"

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ProjectCard
            title={t("projects.cloudPage.title")}
            description={t("projects.cloudPage.description")}
            tags={["React", "HTML5", "CSS3"]}
            image="/images/projects/cloudpage.png"
            demoUrl="https://react-cloudpage.netlify.app/"
            repoUrl="https://github.com/SantiA21/cloud-page"
          />
          <ProjectCard
            title={t("projects.driveApp.title")}
            description={t("projects.driveApp.description")}
            tags={["React", "HTML5", "CSS3"]}
            image="/images/projects/autos.png"
            demoUrl="https://autosreactjs.netlify.app/"
            repoUrl="https://github.com/SantiA21/AutosReactJS"
          />
          <ProjectCard
            title={t("projects.openWeather.title")}
            description={t("projects.openWeather.description")}
            tags={["React", "HTML5", "CSS3", "Weather API"]}
            image="/images/projects/apiweather.png"
            demoUrl="https://appiopenweather.netlify.app/"
            repoUrl="https://github.com/SantiA21/openweatherapi"
          />
          <ProjectCard
            title={t("projects.pokedexApi.title")}
            description={t("projects.pokedexApi.description")}
            tags={["React", "HTML5", "CSS3", "API"]}
            image="/images/projects/pokedex.png"
            demoUrl="https://pokedex-reactapi.netlify.app/"
            repoUrl="https://github.com/SantiA21/pokedex"
          />
          <ProjectCard
            title={t("projects.movieCatalog.title")}
            description={t("projects.movieCatalog.description")}
            tags={["React", "HTML5", "CSS3", "Movie API"]}
            image="/images/projects/peliculas.png"
            demoUrl="https://pelisprueba-react.netlify.app/"
            repoUrl="https://github.com/SantiA21/movies-react"
          />
          <ProjectCard
            title={t("projects.natorFurniture.title")}
            description={t("projects.natorFurniture.description")}
            tags={["HTML5", "CSS3", "JavaScript", "PHP"]}
            image="/images/projects/nator.png"
            repoUrl="https://github.com/SantiA21/NATOR"
          />
          <ProjectCard
            title={t("projects.taskManager.title")}
            description={t("projects.taskManager.description")}
            tags={["HTML5", "CSS3", "PHP"]}
            image="/images/projects/tareas.png"
            repoUrl="https://github.com/SantiA21/Task-Manager"
          />
        </div>
      </div>
    </section>
  )
}
