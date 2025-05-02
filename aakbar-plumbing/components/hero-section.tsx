"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Wrench, CheckCircle, Clock } from "lucide-react"
import { FadeIn } from "@/components/motion-components"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-beige-100">
      {/* Animated wrench */}
      <motion.div
        initial={{ x: 200, opacity: 0, rotate: 180 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5,
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <motion.div
          animate={{
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/wrench.png"
            alt="Wrench"
            width={400}
            height={400}
            className="opacity-70"
          />
        </motion.div>
      </motion.div>

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

      {/* Floating icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <Wrench className="w-8 h-8 text-gold-500 opacity-70" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/3 right-10 hidden lg:block"
      >
        <CheckCircle className="w-8 h-8 text-gold-500 opacity-70" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-1/3 left-20 hidden lg:block"
      >
        <Clock className="w-8 h-8 text-gold-500 opacity-70" />
      </motion.div>

      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="relative mb-16"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gold-500/10 blur-xl"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-800">
              <span className="block">Reliable & Affordable</span>
              <span className="block">Plumbing Services</span>
              <span className="gold-text block mt-2">
                <TypeAnimation
                  sequence={[
                    "You Can Trust",
                    2000,
                    "24/7 Emergency Service",
                    2000,
                    "Licensed & Insured",
                    2000,
                    "100% Satisfaction Guaranteed",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </motion.div>

          <FadeIn delay={0.3}>
            <p className="text-xl mb-6 text-navy-600">
              Fast, professional plumbing services with upfront pricing and a 100% satisfaction guarantee.
            </p>
          </FadeIn>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 rounded-full bg-gold-500"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <FadeIn delay={0.5}>
              <a href="tel:4167314400">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -inset-1 bg-gold-500/20 rounded-full blur-md"
                  />
                  <Button
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2 rounded-full px-8 h-14 relative z-10"
                  >
                    <Phone size={18} />
                    <span>Call Now: 416-731-4400</span>
                  </Button>
                </motion.div>
              </a>
            </FadeIn>

            <FadeIn delay={0.7}>
              <Link href="/contact">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -inset-1 bg-navy-800/20 rounded-full blur-md"
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-navy-800 text-white hover:bg-navy-700 border-2 border-navy-800 rounded-full px-8 h-14 relative z-10"
                  >
                    Request a Free Quote
                  </Button>
                </motion.div>
              </Link>
            </FadeIn>
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
