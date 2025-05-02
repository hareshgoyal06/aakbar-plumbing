"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gold" | "navy"
  size?: "default" | "sm" | "lg" | "icon" | "circle"
  onClick?: () => void
  href?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  href,
  type,
  disabled,
}: AnimatedButtonProps) {
  const buttonContent = (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
      <Button
        className={cn(variant === "default" && "bg-gold-500 hover:bg-gold-600 text-navy-900", className)}
        variant={variant}
        size={size}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </Button>
    </motion.div>
  )

  if (href) {
    return <a href={href}>{buttonContent}</a>
  }

  return buttonContent
}
