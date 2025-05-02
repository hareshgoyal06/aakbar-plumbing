"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "./motion-components"

export default function HeroSection() {
  return (
    <section className="relative bg-beige-100 text-navy-900 overflow-hidden py-24 md:py-36">
      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full border-8 border-beige-200 opacity-50"
      />

      <motion.div
        animate={{
          rotate: -360,
          transition: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-8 border-beige-200 opacity-50"
      />

      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-800">
              <span className="block">Reliable & Affordable</span>
              <span className="block">Plumbing Services</span>
              <span className="gold-text block mt-2">You Can Trust</span>
            </h1>
          </motion.div>

          <FadeIn delay={0.3}>
            <p className="text-xl mb-10 text-gray-600">
              Fast, professional plumbing services with upfront pricing and a 100% satisfaction guarantee.
            </p>
          </FadeIn>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <FadeIn delay={0.5}>
              <a href="tel:4167314400">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2 rounded-full px-8 h-14"
                  >
                    <Phone size={18} />
                    <span>Call Now: 416-731-4400</span>
                  </Button>
                </motion.div>
              </a>
            </FadeIn>

            <FadeIn delay={0.7}>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-navy-800 text-white hover:bg-navy-700 border-2 border-navy-800 rounded-full px-8 h-14"
                  >
                    Request a Free Quote
                  </Button>
                </motion.div>
              </Link>
            </FadeIn>
          </div>

          {/* Decorative dots */}
          <div className="absolute top-1/4 left-8 hidden lg:block">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gold-400"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-1/4 right-8 hidden lg:block">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gold-400"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
