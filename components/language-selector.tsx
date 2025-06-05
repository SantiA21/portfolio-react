"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-zinc-800/50 rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 px-2 rounded-full transition-all ${
          language === "en" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
        }`}
        onClick={() => setLanguage("en")}
      >
        <span className="text-lg">🇺🇸</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 px-2 rounded-full transition-all ${
          language === "es" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
        }`}
        onClick={() => setLanguage("es")}
      >
        <span className="text-lg">🇪🇸</span>
      </Button>
    </div>
  )
}
