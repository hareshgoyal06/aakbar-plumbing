import Link from "next/link"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { ScrollReveal } from "./motion-components"

export default function Footer() {
  const serviceAreas = [
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
  ]

  return (
    <footer className="bg-navy-900 text-beige-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollReveal>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <span>Aakbar</span>
                <span className="gold-text">Plumbing</span>
              </h3>
              <p className="mb-4 text-beige-200 font-bold text-sm">
                Reliable & affordable plumbing services with upfront pricing and a 100% satisfaction guarantee.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gold-400" />
                  <a href="tel:4167314400" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    416-731-4400
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gold-400" />
                  <a href="mailto:aakbarplumbing@gmail.com" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    aakbarplumbing@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gold-400" />
                  <span className="font-bold text-sm">24/7 Emergency Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gold-400" />
                  <span className="font-bold text-sm">Etobicoke, ON, Canada</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal threshold={0.2}>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    All Services
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    Leak Detection & Repairs
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    Drain Cleaning & Unclogging
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    Water Heater Services
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    Gas Line Services
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    Pipe Repairs & Installations
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors font-bold text-sm">
                    Plumbing Renovations
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal threshold={0.3}>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gold-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/#services" className="hover:text-gold-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gold-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gold-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="tel:4167314400" className="hover:text-gold-400 transition-colors">
                    Emergency Service
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal threshold={0.4}>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Service Areas</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="text-sm text-beige-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-beige-300">
            &copy; {new Date().getFullYear()} Aakbar Plumbing & Renovation Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
