"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Droplet,
  PipetteIcon as Pipe,
  Flame,
  Fuel,
  Wrench,
  Building,
  ShowerHead,
  Thermometer,
  Waves,
  Hammer,
  Plug,
  Phone,
  Info,
} from "lucide-react"
import { motion } from "framer-motion"
import ServiceDetailModal from "./service-detail-modal"
import Link from "next/link"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: string
  image?: string
  whatWeDo?: string
  howItWorks?: string[]
}

export default function ServiceCard({ id, title, description, icon, image, whatWeDo, howItWorks }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "droplet":
        return <Droplet className="h-10 w-10 text-gold-500" />
      case "pipe":
        return <Pipe className="h-10 w-10 text-gold-500" />
      case "flame":
        return <Flame className="h-10 w-10 text-gold-500" />
      case "fuel":
        return <Fuel className="h-10 w-10 text-gold-500" />
      case "wrench":
        return <Wrench className="h-10 w-10 text-gold-500" />
      case "building":
        return <Building className="h-10 w-10 text-gold-500" />
      case "shower":
        return <ShowerHead className="h-10 w-10 text-gold-500" />
      case "thermometer":
        return <Thermometer className="h-10 w-10 text-gold-500" />
      case "waves":
        return <Waves className="h-10 w-10 text-gold-500" />
      case "hammer":
        return <Hammer className="h-10 w-10 text-gold-500" />
      case "plug":
        return <Plug className="h-10 w-10 text-gold-500" />
      default:
        return <Wrench className="h-10 w-10 text-gold-500" />
    }
  }

  const hasDetails = whatWeDo || (howItWorks && howItWorks.length > 0)

  return (
    <>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow overflow-hidden bg-white">
          {image && (
            <div className="relative h-48 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">{getIcon()}</div>
              </div>
            </div>
          )}
          <CardContent className={`${image ? "pt-4" : "pt-6"}`}>
            {!image && (
              <div className="mb-4 w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center">
                {getIcon()}
              </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-navy-800">{title}</h3>
            <p className="text-navy-600">{description}</p>
          </CardContent>
          <CardFooter className="pb-6 flex flex-col sm:flex-row gap-3 items-center">
            <Link href="/contact">
              <Button variant="outline" className="gap-2 border-gold-500 text-gold-500 hover:bg-gold-50">
                <Phone size={16} />
                <span>Request Service</span>
              </Button>
            </Link>

            {hasDetails && (
              <Button
                variant="ghost"
                className="gap-2 text-navy-700 hover:bg-navy-50"
                onClick={() => setIsModalOpen(true)}
              >
                <Info size={16} />
                <span>Learn More</span>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={{ id, title, description, image, whatWeDo, howItWorks }}
      />
    </>
  )
}
