"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  location: string
  content: string
}

export default function TestimonialCard({ name, location, content }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="h-full border-none shadow-md bg-white">
        <CardContent className="pt-6 relative">
          <div className="absolute -top-5 left-6">
            <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
              <Quote className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="pt-4">
            <p className="mb-6 italic text-navy-700">{content}</p>
            <div className="border-t border-beige-200 pt-4">
              <p className="font-bold text-navy-800">{name}</p>
              <p className="text-sm text-navy-600">{location}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
