"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageSafe } from "@/hooks/use-language"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t } = useLanguageSafe()

  const handleEmailClick = () => {
    window.location.href = "mailto:santiago.n.almiron@gmail.com"
  }

  return (
    <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <span className="relative z-10">{t("hero.role")}</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="block">{t("hero.greeting")}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
            Santiago Almirón
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-[600px]">{t("hero.description")}</p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 border-0">
            <span className="relative z-10 flex items-center">
              {t("hero.viewProjects")}{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
          <Button
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
            onClick={handleEmailClick}
          >
            {t("hero.contactMe")}
          </Button>
        </div>
        <div className="flex gap-4 pt-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/santiagoalmiron/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
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

      {/* Opción 5: Avatar 3D Isométrico */}
      <div className="flex justify-center">
        <IsometricDesk />
      </div>
    </div>
  )
}

function IsometricDesk() {
  return (
    <div className="relative w-full max-w-md h-[400px] md:h-[500px] flex items-center justify-center">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
      >
        {/* Escritorio - Base */}
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          d="M 50 200 L 350 200 L 380 230 L 80 230 Z"
          fill="url(#deskGradient)"
          stroke="#4a5568"
          strokeWidth="2"
        />

        {/* Escritorio - Lado */}
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          d="M 350 200 L 380 230 L 380 250 L 350 220 Z"
          fill="url(#deskSideGradient)"
          stroke="#4a5568"
          strokeWidth="2"
        />

        {/* Monitor - Pantalla */}
        <motion.rect
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          x="180"
          y="120"
          width="80"
          height="60"
          rx="4"
          fill="url(#screenGradient)"
          stroke="#2d3748"
          strokeWidth="2"
        />

        {/* Monitor - Marco */}
        <motion.rect
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          x="175"
          y="115"
          width="90"
          height="70"
          rx="6"
          fill="#2d3748"
          stroke="#4a5568"
          strokeWidth="2"
        />

        {/* Monitor - Base */}
        <motion.path
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          d="M 210 185 L 230 185 L 235 200 L 205 200 Z"
          fill="#4a5568"
        />

        {/* Teclado */}
        <motion.path
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          d="M 160 210 L 280 210 L 285 220 L 165 220 Z"
          fill="url(#keyboardGradient)"
          stroke="#4a5568"
          strokeWidth="1"
        />

        {/* Mouse */}
        <motion.ellipse
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          cx="300"
          cy="215"
          rx="8"
          ry="12"
          fill="#6b7280"
          stroke="#4a5568"
          strokeWidth="1"
        />

        {/* Taza de café */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <ellipse cx="120" cy="190" rx="12" ry="8" fill="#8b4513" />
          <rect x="108" y="182" width="24" height="16" fill="url(#coffeeGradient)" rx="2" />
          <path d="M 132 185 Q 140 185 140 192 Q 140 199 132 199" fill="none" stroke="#6b7280" strokeWidth="2" />
        </motion.g>

        {/* Planta */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {/* Maceta */}
          <path d="M 320 180 L 340 180 L 345 200 L 315 200 Z" fill="#8b4513" />
          {/* Hojas */}
          <ellipse cx="325" cy="170" rx="8" ry="15" fill="#22c55e" transform="rotate(-20 325 170)" />
          <ellipse cx="335" cy="165" rx="6" ry="12" fill="#16a34a" transform="rotate(15 335 165)" />
          <ellipse cx="330" cy="175" rx="7" ry="10" fill="#15803d" />
        </motion.g>

        {/* Libros */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <rect x="80" y="185" width="15" height="20" fill="#3b82f6" />
          <rect x="95" y="183" width="15" height="22" fill="#ef4444" />
          <rect x="110" y="187" width="15" height="18" fill="#10b981" />
        </motion.g>

        {/* Lámpara */}
        <motion.g
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          {/* Base */}
          <circle cx="100" cy="200" r="8" fill="#6b7280" />
          {/* Brazo */}
          <line x1="100" y1="200" x2="90" y2="150" stroke="#6b7280" strokeWidth="3" />
          {/* Pantalla */}
          <path d="M 85 145 L 105 140 L 100 155 L 80 160 Z" fill="url(#lampGradient)" />
          {/* Luz */}
          <circle cx="92" cy="150" r="15" fill="url(#lightGradient)" opacity="0.3" />
        </motion.g>

        {/* Código en la pantalla */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
          <rect x="185" y="125" width="70" height="50" fill="#1a1a1a" rx="2" />
          <line x1="190" y1="130" x2="240" y2="130" stroke="#3b82f6" strokeWidth="1" />
          <line x1="190" y1="135" x2="230" y2="135" stroke="#22c55e" strokeWidth="1" />
          <line x1="190" y1="140" x2="245" y2="140" stroke="#f59e0b" strokeWidth="1" />
          <line x1="190" y1="145" x2="220" y2="145" stroke="#ef4444" strokeWidth="1" />
          <line x1="190" y1="150" x2="235" y2="150" stroke="#8b5cf6" strokeWidth="1" />
        </motion.g>

        {/* Partículas flotantes */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5 + 3,
            }}
            cx={150 + i * 30}
            cy={100}
            r="2"
            fill="#06b6d4"
          />
        ))}

        {/* Gradientes */}
        <defs>
          <linearGradient id="deskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b7355" />
            <stop offset="100%" stopColor="#6b5b47" />
          </linearGradient>
          <linearGradient id="deskSideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b5b47" />
            <stop offset="100%" stopColor="#5a4a37" />
          </linearGradient>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2d2d2d" />
          </linearGradient>
          <linearGradient id="keyboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a5568" />
            <stop offset="100%" stopColor="#2d3748" />
          </linearGradient>
          <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="lampGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <radialGradient id="lightGradient">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
