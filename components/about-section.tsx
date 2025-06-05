"use client";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { useLanguage } from "@/hooks/use-language";
import { ExternalLink } from "lucide-react";

export const handleViewCV = () => {
  // Abrir el CV en una nueva pestaña
  window.open("/assets/CV.pdf", "_blank");
};

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-70"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
              <img
                src="/images/profile.jpg"
                alt="Santiago Almirón"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">
                    {t("about.availableForWork")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300">{t("about.description1")}</p>
              <p className="text-lg text-zinc-300 mt-4">
                {t("about.description2")}
              </p>
              <p className="text-lg text-zinc-300 mt-4">
                {t("about.description3")}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">{t("about.name")}</div>
                  <div className="font-medium">Santiago Almirón</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">
                    {t("about.email")}
                  </div>
                  <div className="font-medium">
                    santiago.n.almiron@gmail.com
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">
                    {t("about.location")}
                  </div>
                  <div className="font-medium">Argentina</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">
                    {t("about.availability")}
                  </div>
                  <div className="font-medium text-green-500">
                    {t("about.availableStatus")}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={handleViewCV}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0 text-white"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t("about.downloadResume")}
                </Button>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
}
