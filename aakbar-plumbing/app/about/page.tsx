"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle } from "lucide-react"
import {
  FadeIn,
  FadeInStagger,
  FadeInItem,
  ScrollReveal,
  RotateAnimation,
  FloatingAnimation,
  PulseAnimation,
} from "@/components/motion-components"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="bg-beige-50">
      {/* Hero Section */}
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
                <span className="block">About</span>
                <span className="gold-text block mt-2">Aakbar Plumbing</span>
              </h1>
            </motion.div>

            <FadeIn delay={0.3}>
              <p className="text-xl mb-6 text-gray-600">
                Your trusted plumbing partner in the Greater Toronto Area for over a decade.
              </p>
            </FadeIn>
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

      {/* Who We Are */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-beige-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-beige-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

        <RotateAnimation className="absolute top-20 right-20 opacity-20">
          <div className="w-40 h-40 border-8 border-gold-200 rounded-full"></div>
        </RotateAnimation>

        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="text-gold-500 gold-text text-2xl block mb-2">Who We Are</span>
                <h2 className="text-3xl font-bold mb-6 relative inline-block gold-underline">Our Story</h2>
                <p className="mb-4 text-navy-600">
                  Aakbar Plumbing & Renovation Inc. is a trusted plumbing company based in Etobicoke, ON. With over a
                  decade of experience, we specialize in residential and commercial plumbing services across the Greater
                  Toronto Area.
                </p>
                <p className="mb-4 text-navy-600">
                  Our team of licensed and insured plumbers is dedicated to providing high-quality workmanship and
                  exceptional customer service. We take pride in our attention to detail and commitment to solving your
                  plumbing problems efficiently and effectively.
                </p>
                <p className="text-navy-600">
                  Whether you need emergency plumbing repairs, routine maintenance, or complete plumbing renovations,
                  you can count on Aakbar Plumbing to deliver reliable solutions at competitive prices.
                </p>
              </div>
            </FadeIn>

            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img src="/images/team.png" alt="Aakbar Plumbing team" className="w-full h-auto rounded-lg" />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-beige-50 relative overflow-hidden">
        <FloatingAnimation duration={8} className="absolute top-1/3 left-10 opacity-30">
          <div className="w-24 h-24 rounded-full bg-navy-300/20 blur-md"></div>
        </FloatingAnimation>

        <FloatingAnimation duration={10} className="absolute bottom-1/4 right-10 opacity-30">
          <div className="w-32 h-32 rounded-full bg-navy-300/20 blur-md"></div>
        </FloatingAnimation>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-gold-500 gold-text text-2xl block mb-2">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 relative inline-block gold-underline">
                What Drives Us
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-xl text-navy-700 italic">
                  "To provide high-quality, reliable, and affordable plumbing solutions while ensuring customer
                  satisfaction with transparent pricing and professional service."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-500 gold-text text-2xl block mb-2">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block gold-underline">
                The Aakbar Difference
              </h2>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInItem>
                <div className="flex gap-4 bg-beige-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-800">Licensed & Insured Plumbers</h3>
                    <p className="text-navy-600">
                      All our plumbers are fully licensed and insured, giving you peace of mind that your plumbing work
                      is being handled by qualified professionals.
                    </p>
                  </div>
                </div>
              </FadeInItem>

              <FadeInItem>
                <div className="flex gap-4 bg-beige-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-800">Affordable & Transparent Pricing</h3>
                    <p className="text-navy-600">
                      We provide upfront pricing with no hidden fees or surprises. Our rates are competitive and fair
                      for the high-quality service we deliver.
                    </p>
                  </div>
                </div>
              </FadeInItem>

              <FadeInItem>
                <div className="flex gap-4 bg-beige-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-800">24/7 Emergency Services</h3>
                    <p className="text-navy-600">
                      Plumbing emergencies don't wait for business hours. That's why we offer round-the-clock emergency
                      services to address urgent plumbing issues.
                    </p>
                  </div>
                </div>
              </FadeInItem>

              <FadeInItem>
                <div className="flex gap-4 bg-beige-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-800">10+ Years of Experience</h3>
                    <p className="text-navy-600">
                      With over a decade of experience in the plumbing industry, we have the knowledge and expertise to
                      handle any plumbing challenge.
                    </p>
                  </div>
                </div>
              </FadeInItem>
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 md:order-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img src="/images/plumber-working.png" alt="Plumber working" className="w-full h-auto rounded-lg" />
              </motion.div>
            </ScrollReveal>

            <ScrollReveal className="order-1 md:order-2">
              <div>
                <span className="text-gold-500 gold-text text-2xl block mb-2">Our Commitment</span>
                <h2 className="text-3xl font-bold mb-6 relative inline-block gold-underline">Our Promise To You</h2>
                <p className="mb-4 text-navy-600">At Aakbar Plumbing & Renovation Inc., we are committed to:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">Responding promptly to your plumbing needs</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">Providing honest assessments and fair pricing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">Delivering high-quality workmanship</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">Using quality materials and parts</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">Treating your home or business with respect</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">Standing behind our work with guarantees</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <span className="text-gold-400 gold-text text-2xl block mb-2">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">
                Ready to Experience the Aakbar Plumbing Difference?
              </h2>
              <p className="mb-8 text-lg text-beige-100">
                Contact us today for all your plumbing needs. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2 px-8 rounded-full">
                      <Phone size={18} />
                      <span>Call Now: 416-731-4400</span>
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 rounded-full"
                    >
                      Get a Free Quote
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <PulseAnimation>
          <Link
            href="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          >
            <Phone size={24} />
          </Link>
        </PulseAnimation>
      </div>
    </div>
  )
}
