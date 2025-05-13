"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import ContactForm from "@/components/contact-form"
import {
  FadeIn,
  ScrollReveal,
  RotateAnimation,
  FloatingAnimation,
  PulseAnimation,
} from "@/components/motion-components"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
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
                <span className="block">Contact</span>
                <span className="gold-text block mt-2">Get In Touch</span>
              </h1>
            </motion.div>

            <FadeIn delay={0.3}>
              <p className="text-xl mb-6 text-gray-600">
                Get in touch with our team for all your plumbing needs. We're here to help!
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

      {/* Contact Information */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-beige-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-beige-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

        <RotateAnimation className="absolute top-20 right-20 opacity-20">
          <div className="w-40 h-40 border-8 border-gold-200 rounded-full"></div>
        </RotateAnimation>

        <FloatingAnimation duration={8} className="absolute bottom-20 left-20 opacity-20">
          <div className="w-32 h-32 border-8 border-gold-200 rounded-full"></div>
        </FloatingAnimation>

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <span className="text-gold-500 gold-text text-2xl block mb-2">Contact Information</span>
                <h2 className="text-3xl font-bold mb-8 relative inline-block gold-underline">Get In Touch</h2>

                <div className="space-y-8 mb-8">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 bg-beige-50 p-6 rounded-lg shadow-md"
                  >
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-800">Phone</h3>
                      <p className="mb-1 text-navy-600">For immediate assistance:</p>
                      <a href="tel:4167314400" className="text-gold-600 hover:underline font-medium">
                        416-731-4400
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 bg-beige-50 p-6 rounded-lg shadow-md"
                  >
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-800">Email</h3>
                      <p className="mb-1 text-navy-600">Send us an email:</p>
                      <a href="mailto:hareshgoyal06@gmail.com" className="text-gold-600 hover:underline font-medium">
                        aakbarplumbing@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 bg-beige-50 p-6 rounded-lg shadow-md"
                  >
                    <div className="bg-gold-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-800">Hours</h3>
                      <p className="mb-1 text-navy-600">Regular business hours:</p>
                      <p className="text-navy-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-navy-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="font-medium mt-2 text-gold-600">24/7 Emergency Services Available</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 bg-beige-50 p-6 rounded-lg shadow-md"
                  >
                    <div className="bg-gold-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-800">Location</h3>
                      <p className="mb-1 text-navy-600">Based in:</p>
                      <p className="text-navy-600">Etobicoke, ON, Canada</p>
                      <p className="mt-2 text-navy-600">Serving the Greater Toronto Area and surrounding communities</p>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-beige-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-navy-800">Service Areas</h3>
                  <div className="flex flex-wrap gap-y-2 gap-x-4">
                    {[
                      "Etobicoke",
                      "Toronto",
                      "Mississauga",
                      "Brampton",
                      "Oakville",
                      "Burlington",
                      "Hamilton",
                      "North York",
                      "Vaughan",
                      "Richmond Hill",
                      "Markham",
                      "Scarborough",
                      "Oshawa",
                      "Whitby",
                      "Pickering",
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                        <MapPin size={14} className="text-gold-500" />
                        <span className="text-navy-700 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <span className="text-gold-500 gold-text text-2xl block mb-2">Contact Form</span>
                <h2 className="text-3xl font-bold mb-8 text-navy-800 relative inline-block gold-underline">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-beige-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-500 gold-text text-2xl block mb-2">Location</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block gold-underline">
                Our Service Area
              </h2>
              <p className="text-center text-navy-600 mt-4 max-w-2xl mx-auto">
                We proudly serve the Greater Toronto Area and surrounding communities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289742547!2d-79.54286155!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-navy-900/80 text-white">
        <div className="container text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <span className="text-gold-400 gold-text text-2xl block mb-2">Emergency Service</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">Plumbing Emergency?</h2>
              <p className="mb-8 text-lg text-beige-100">
                Don't wait! Our emergency plumbing team is available 24/7 to help with urgent plumbing issues.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="tel:4167314400">
                  <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2 px-8 rounded-full">
                    <Phone size={18} />
                    <span>Call Now: 416-731-4400</span>
                  </Button>
                </a>
              </motion.div>
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
