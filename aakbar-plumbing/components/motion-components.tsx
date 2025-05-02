"use client"

import { motion } from "framer-motion"

export const FadeIn = ({ children, delay = 0, duration = 0.5, ...props }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const FadeInStagger = ({ children, staggerChildren = 0.1, ...props }: any) => {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
          },
        },
      }}
      initial="hidden"
      animate="show"
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const FadeInItem = ({ children, ...props }: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const ScaleIn = ({ children, delay = 0, duration = 0.5, ...props }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const SlideIn = ({ children, direction = "left", delay = 0, duration = 0.5, ...props }: any) => {
  const xValues = {
    left: ["-100%", "0%"],
    right: ["100%", "0%"],
  }
  const yValues = {
    up: ["100%", "0%"],
    down: ["-100%", "0%"],
  }

  const x = direction === "left" || direction === "right" ? xValues[direction] : 0
  const y = direction === "up" || direction === "down" ? yValues[direction] : 0

  return (
    <motion.div
      initial={{ x: x[0], y: y[0], opacity: 0 }}
      animate={{ x: x[1], y: y[1], opacity: 1 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const FloatingAnimation = ({ children, duration = 6, ...props }: any) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const PulseAnimation = ({ children, ...props }: any) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const RotateAnimation = ({ children, ...props }: any) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const ScrollReveal = ({ children, threshold = 0.1, ...props }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
