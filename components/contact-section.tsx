"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "santiago.n.almiron@gmail.com",
      href: "mailto:santiago.n.almiron@gmail.com",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "almiron-santiago-nahuel",
      href: "https://www.linkedin.com/in/almiron-santiago-nahuel/",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SantiA21",
      href: "https://github.com/SantiA21",
      color: "text-gray-400",
      bgColor: "bg-gray-500/10",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Buenos Aires, Argentina",
      href: null,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="max-w-4xl mx-auto mt-16">
          {/* Información principal */}
          <GlassmorphicCard>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t("contact.letsConnect")}</h3>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t("contact.description")}</p>
            </div>

            {/* Estado actual */}
            <div className="flex items-center justify-center gap-3 mb-8 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-400 font-medium">{t("contact.availableForWork")}</span>
            </div>

            {/* Métodos de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                const content = (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/30 hover:bg-zinc-800/50 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-zinc-500 mb-1">{method.label}</div>
                      <div className="font-medium text-white truncate">{method.value}</div>
                    </div>
                  </div>
                )

                return method.href ? (
                  <Link
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={index} className="block">
                    {content}
                  </div>
                )
              })}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 text-white px-8 py-3"
                asChild
              >
                <Link href="mailto:santiago.n.almiron@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  {t("contact.sendEmail")}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 px-8 py-3"
                asChild
              >
                <Link href="/cv" target="_blank">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t("contact.viewResume")}
                </Link>
              </Button>
            </div>

            {/* Información adicional */}
            <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
              <h4 className="text-lg font-medium mb-4">{t("contact.workingHours")}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-400">
                <div>
                  <div className="font-medium text-zinc-300">{t("contact.timezone")}</div>
                  <div>GMT-3 (Buenos Aires)</div>
                </div>
                <div>
                  <div className="font-medium text-zinc-300">{t("contact.responseTime")}</div>
                  <div>{t("contact.responseTimeValue")}</div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Redes sociales destacadas */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-medium mb-6">{t("contact.followMe")}</h4>
            <div className="flex justify-center gap-4">
              <Link href="https://github.com/SantiA21" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-16 h-16"
                >
                  <Github className="h-8 w-8" />
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
                  size="lg"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-16 h-16"
                >
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:santiago.n.almiron@gmail.com">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-16 h-16"
                >
                  <Mail className="h-8 w-8" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
