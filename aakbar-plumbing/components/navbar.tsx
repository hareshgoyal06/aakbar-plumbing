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
import { motion, AnimatePresence } from "framer-motion"
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

  // Update activeLink based on current pathname
  const activeLink = pathname === "/" 
    ? "/" 
    : pathname.startsWith("/#") 
      ? "/" 
      : pathname

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
    if (href === "/") {
      e.preventDefault()
      if (pathname !== "/") {
        router.push("/")
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      return
    }

    if (isSection) {
      e.preventDefault()
      if (pathname !== "/") {
        router.push("/")
        setTimeout(() => {
          const element = document.getElementById(href.substring(2))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 300)
      } else {
        const element = document.getElementById(href.substring(2))
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
        <Link href="/" className="flex items-center" onClick={(e) => handleNavClick(e, "/")}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
                  "text-sm font-medium transition-colors hover:text-gold-500 relative group",
                  activeLink === link.href ? "text-gold-500" : "text-navy-700",
                )}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeLink === link.href ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </FadeIn>
          ))}

          <FadeIn delay={0.4}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2">
                  <Phone size={16} />
                  <span>416-731-4400</span>
                </Button>
              </Link>
            </motion.div>
          </FadeIn>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="icon" className="border-navy-200">
                <Menu className="h-5 w-5 text-navy-800" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href, link.isSection)
                      setIsOpen(false)
                    }}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-gold-500 p-2 block",
                      activeLink === link.href ? "text-gold-500" : "text-navy-700",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4"
              >
                <Link href="/contact">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 gap-2">
                    <Phone size={16} />
                    <span>416-731-4400</span>
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
