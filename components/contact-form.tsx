"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, AlertCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useLanguageSafe } from "@/hooks/use-language"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const { toast } = useToast()
  const { t } = useLanguageSafe()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.name")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.email")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid")
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.form.errors.subject")
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.message")
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.form.errors.messageShort")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: t("contact.form.errors.title"),
        description: t("contact.form.errors.description"),
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: t("contact.form.success.title"),
          description: t("contact.form.success.description"),
        })

        // Limpiar formulario
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setErrors({})
      } else {
        throw new Error(result.error || "Error desconocido")
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                name="name"
                placeholder={t("contact.form.name")}
                value={formData.name}
                onChange={handleInputChange}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 ${
                  errors.name ? "border-red-500 focus:border-red-500" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder={t("contact.form.email")}
                value={formData.email}
                onChange={handleInputChange}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                name="subject"
                placeholder={t("contact.form.subject")}
                value={formData.subject}
                onChange={handleInputChange}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 ${
                  errors.subject ? "border-red-500 focus:border-red-500" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.subject && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder={t("contact.form.message")}
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 resize-none ${
                  errors.message ? "border-red-500 focus:border-red-500" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.message}
                </p>
              )}
              <p className="text-zinc-500 text-xs">
                {formData.message.length}/500 {t("contact.form.characters")}
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("contact.form.sending")}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t("contact.form.send")}
                </>
              )}
            </Button>
          </form>

          {/* Información adicional */}
          <div className="mt-6 pt-6 border-t border-zinc-700/50">
            <p className="text-zinc-400 text-sm text-center">{t("contact.form.privacy")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
