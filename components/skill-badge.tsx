"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  icon: React.ReactNode
  color: string
}

export function SkillBadge({ name, icon, color }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col items-center text-center space-y-3">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
          >
            <div style={{ color: color }} className="text-xl">
              {icon}
            </div>
          </div>

          <div className="font-medium text-sm text-center leading-tight">{name}</div>
        </div>
      </div>
    </motion.div>
  )
}
