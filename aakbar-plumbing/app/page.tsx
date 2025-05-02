"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import { Phone, CheckCircle, MapPin } from "lucide-react"
import {
  FadeInStagger,
  FadeInItem,
  FloatingAnimation,
  ScrollReveal,
  PulseAnimation,
  RotateAnimation,
} from "@/components/motion-components"

export default function Home() {
  const services = [
    {
      id: "leak-detection",
      title: "Leak Detection & Repairs",
      description: "We find and fix leaks quickly before they cause major damage to your property.",
      icon: "droplet",
      image: "/images/leak-detection.png",
      whatWeDo:
        "Leak detection services help homeowners and businesses locate and fix leaks before they cause major damage. Whether it's a hidden pipe leak or a leaking faucet, we provide accurate, non-invasive solutions to prevent water damage.",
      howItWorks: [
        "Initial Inspection: Our licensed plumber arrives and conducts a visual assessment.",
        "Leak Detection: Using advanced tools like infrared cameras and moisture meters, we identify the exact leak location.",
        "Solution Proposal: We explain the issue, recommend repair options, and provide an upfront cost estimate.",
        "Leak Repair: We fix the leak efficiently, using durable materials to prevent future problems.",
        "Final Testing & Cleanup: We test the plumbing system to ensure the repair is effective and clean up the area.",
      ],
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning & Unclogging",
      description: "Professional drain cleaning services to remove blockages and prevent backups.",
      icon: "pipe",
      image: "/images/drain-cleaning.png",
      whatWeDo:
        "Clogged drains can cause major plumbing issues if left untreated. Our drain cleaning services ensure fast and effective removal of blockages, preventing backups and water damage.",
      howItWorks: [
        "Inspection: We use a camera inspection to identify the clog location.",
        "Drain Snaking or Hydro Jetting: Depending on the severity, we either snake the drain or use hydro jetting for thorough cleaning.",
        "Testing & Prevention Tips: We test water flow and advise on maintenance to prevent future clogs.",
      ],
    },
    {
      id: "water-heater",
      title: "Water Heater Installation & Repair",
      description: "Expert installation and repair of tank and tankless water heaters.",
      icon: "flame",
      image: "/images/water-heater.png",
      whatWeDo:
        "We install, repair, and maintain tank and tankless water heaters, ensuring you have hot water when you need it.",
      howItWorks: [
        "Assessment: We check your water usage and recommend the best water heater type.",
        "Installation/Repair: We install a new water heater or repair your existing one with high-quality parts.",
        "Testing & Safety Check: We test the heater and ensure it operates safely.",
      ],
    },
    {
      id: "gas-line",
      title: "Gas Line Services",
      description: "Safe and code-compliant gas line installation, repair, and leak detection.",
      icon: "fuel",
      image: "/images/gas-line.png",
      whatWeDo:
        "We provide gas line installation, repair, and leak detection to ensure your home is safe and compliant with regulations.",
      howItWorks: [
        "Leak Detection & Safety Inspection: We check for leaks and potential hazards.",
        "Gas Line Installation or Repair: We perform high-quality, code-compliant installations and repairs.",
        "Compliance Check & Testing: We verify safety, ensuring your system meets all regulations.",
      ],
    },
    {
      id: "pipe-repairs",
      title: "Pipe Repairs & Installations",
      description: "Quality pipe repairs and new installations for all your plumbing needs.",
      icon: "wrench",
      image: "/images/pipe-repair.png",
      whatWeDo:
        "We provide comprehensive pipe repair and installation services for residential and commercial properties. Our team handles everything from small leaks to complete repiping projects.",
      howItWorks: [
        "Inspection & Diagnosis: We thoroughly examine your plumbing system to identify issues.",
        "Solution Planning: We develop a repair or installation plan tailored to your needs.",
        "Professional Installation: Our licensed plumbers install or repair pipes using industry-best practices.",
        "Quality Testing: We conduct pressure tests to ensure there are no leaks.",
        "Cleanup & Final Inspection: We clean the work area and perform a final inspection.",
      ],
    },
    {
      id: "renovations",
      title: "Full Home & Commercial Renovations",
      description: "Complete plumbing renovations for residential and commercial properties.",
      icon: "building",
      image: "/images/renovation.png",
      whatWeDo:
        "We provide comprehensive plumbing renovation services for kitchens, bathrooms, and commercial spaces. Our team handles everything from fixture upgrades to complete plumbing system overhauls.",
      howItWorks: [
        "Consultation & Planning: We discuss your renovation goals and develop a detailed plan.",
        "Design & Material Selection: We help you select fixtures and materials that meet your needs and budget.",
        "Professional Installation: Our skilled team installs all plumbing components according to code.",
        "Quality Assurance: We test all installations to ensure proper function and no leaks.",
        "Final Walkthrough: We review the completed work with you to ensure satisfaction.",
      ],
    },
  ]

  const testimonials = [
    {
      name: "David P.",
      location: "Brampton, ON",
      content:
        "I called Aakbar Plumbing when my kitchen sink was clogged, and they arrived within an hour. The plumber was professional, explained everything, and the price was fair. Highly recommend!",
    },
    {
      name: "Sarah M.",
      location: "Oakville, ON",
      content:
        "I had a leak in my basement that I thought would cost thousands to fix. Aakbar Plumbing identified the issue quickly and fixed it for a reasonable price. I am very happy with their service!",
    },
    {
      name: "Mike R.",
      location: "Toronto, ON",
      content:
        "Excellent experience! The plumber installed a new water heater for me. They were on time, did the job right, and even cleaned up afterward. Will use them again for any plumbing needs!",
    },
  ]

  const benefits = [
    "Licensed & Insured",
    "10+ Years of Experience",
    "24/7 Emergency Services",
    "100% Satisfaction Guarantee",
    "No Hidden Fees – Transparent Pricing",
  ]

  return (
    <div className="bg-beige-50">
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-beige-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-beige-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

        <RotateAnimation className="absolute top-20 right-20 opacity-20">
          <div className="w-40 h-40 border-8 border-gold-200 rounded-full"></div>
        </RotateAnimation>

        <div className="container relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-500 gold-text text-2xl block mb-2">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block gold-underline">
                Aakbar Plumbing Excellence
              </h2>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <FadeInItem key={index}>
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-gold-500" />
                      </div>
                      <p className="font-medium text-navy-800">{benefit}</p>
                    </CardContent>
                  </Card>
                </FadeInItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-beige-50 relative scroll-mt-20">
        {/* Animated water drop elements */}
        <FloatingAnimation duration={8} className="absolute top-1/3 left-10 opacity-30">
          <div className="w-24 h-24 rounded-full bg-navy-300/20 blur-md"></div>
        </FloatingAnimation>

        <FloatingAnimation duration={10} className="absolute bottom-1/4 right-10 opacity-30">
          <div className="w-32 h-32 rounded-full bg-navy-300/20 blur-md"></div>
        </FloatingAnimation>

        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-500 gold-text text-2xl block mb-2">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block gold-underline">
                Professional Plumbing Solutions
              </h2>
              <p className="text-center text-navy-600 mt-4 max-w-2xl mx-auto">
                We provide a wide range of plumbing services to meet all your residential and commercial needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} threshold={0.1} delay={index * 0.1}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  whatWeDo={service.whatWeDo}
                  howItWorks={service.howItWorks}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal threshold={0.1}>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                <a href="tel:4167314400" className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>Call For Service: 416-731-4400</span>
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: "url('/images/bathroom-plumbing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-navy-900/80"></div>
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-400 gold-text text-2xl block mb-2">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white relative inline-block gold-underline">
                What Our Customers Say
              </h2>
              <p className="text-center text-beige-200 mt-4 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} threshold={0.1} delay={index * 0.1}>
                <TestimonialCard
                  name={testimonial.name}
                  location={testimonial.location}
                  content={testimonial.content}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 bg-navy-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-navy-700 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-700 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-400 gold-text text-2xl block mb-2">Special Offers</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white relative inline-block gold-underline">
                Exclusive Deals
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal threshold={0.1}>
              <Card className="bg-navy-700 border-none text-white h-full hover:bg-navy-600 transition-colors">
                <CardContent className="p-8 text-center">
                  <PulseAnimation>
                    <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-gold-400 text-3xl font-bold">10%</span>
                    </div>
                  </PulseAnimation>
                  <h3 className="text-xl font-bold mb-4 text-gold-400">First-Time Discount</h3>
                  <p className="text-beige-200">For First-Time Customers</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal threshold={0.1} delay={0.1}>
              <Card className="bg-navy-700 border-none text-white h-full hover:bg-navy-600 transition-colors">
                <CardContent className="p-8 text-center">
                  <PulseAnimation>
                    <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-gold-400 text-3xl font-bold">15%</span>
                    </div>
                  </PulseAnimation>
                  <h3 className="text-xl font-bold mb-4 text-gold-400">Special Discounts</h3>
                  <p className="text-beige-200">For Seniors, Military & First Responders</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal threshold={0.1} delay={0.2}>
              <Card className="bg-navy-700 border-none text-white h-full hover:bg-navy-600 transition-colors">
                <CardContent className="p-8 text-center">
                  <PulseAnimation>
                    <div className="w-20 h-20 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-gold-400 text-3xl font-bold">24/7</span>
                    </div>
                  </PulseAnimation>
                  <h3 className="text-xl font-bold mb-4 text-gold-400">Emergency Service</h3>
                  <p className="text-beige-200">Special Deals Available</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold-500 gold-text text-2xl block mb-2">Coverage</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 relative inline-block gold-underline">
                Service Areas
              </h2>
              <p className="text-center text-navy-600 mt-4 max-w-2xl mx-auto">
                We proudly serve the Greater Toronto Area and surrounding communities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-8 h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289742547!2d-79.54286155!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="flex flex-wrap justify-center gap-4">
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
                <FadeInItem key={area}>
                  <div className="flex items-center gap-1 bg-beige-100 px-3 py-1 rounded-full">
                    <MapPin size={14} className="text-gold-500" />
                    <span className="text-navy-700">{area}</span>
                  </div>
                </FadeInItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative text-white"
        style={{
          backgroundImage: "url('/images/plumber-working.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-900/80"></div>
        <div className="container text-center relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <span className="text-gold-400 gold-text text-2xl block mb-2">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Need Plumbing Services?</h2>
              <p className="mb-8 text-lg text-beige-100">
                Contact us today for fast, reliable, and affordable plumbing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:4167314400">
                  <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2 px-8">
                    <Phone size={18} />
                    <span>Call Now: 416-731-4400</span>
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8"
                  >
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <PulseAnimation>
          <a
            href="tel:4167314400"
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          >
            <Phone size={24} />
          </a>
        </PulseAnimation>
      </div>
    </div>
  )
}
