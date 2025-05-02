"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FadeIn } from "./motion-components"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services", isSection: true },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isSection?: boolean) => {
    if (isSection) {
      e.preventDefault()

      // If we're not on the homepage, navigate to homepage first
      if (pathname !== "/") {
        router.push("/")
        // Need to wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(href.substring(2)) // Remove the '/#' part
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 300)
      } else {
        // If already on homepage, just scroll
        const element = document.getElementById(href.substring(2)) // Remove the '/#' part
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="font-bold text-xl md:text-2xl text-navy-800">Aakbar</span>
            <span className="gold-text text-xl md:text-2xl">Plumbing</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <FadeIn key={link.href} delay={0.1 * index}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isSection)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-500",
                  pathname === link.href || (pathname === "/" && link.href.startsWith("/#"))
                    ? "text-gold-500"
                    : "text-navy-700",
                )}
              >
                {link.label}
              </Link>
            </FadeIn>
          ))}

          <FadeIn delay={0.4}>
            <a href="tel:4167314400">
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2">
                <Phone size={16} />
                <span>416-731-4400</span>
              </Button>
            </a>
          </FadeIn>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-navy-200">
              <Menu className="h-5 w-5 text-navy-800" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href, link.isSection)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-gold-500 p-2",
                    pathname === link.href || (pathname === "/" && link.href.startsWith("/#"))
                      ? "text-gold-500"
                      : "text-navy-700",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:4167314400" className="mt-4">
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2">
                  <Phone size={16} />
                  <span>416-731-4400</span>
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
