"use client"

import { Modal } from "@/components/ui/modal"
import { motion } from "framer-motion"

interface ServiceDetailModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    id: string
    title: string
    description: string
    image?: string
    whatWeDo?: string
    howItWorks?: string[]
  }
}

export default function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={service.title}>
      <div className="space-y-8">
        {/* Service Image */}
        {service.image && (
          <div className="rounded-lg overflow-hidden shadow-md max-h-[40vh]">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What We Do Section */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-navy-800 relative inline-block gold-underline">What We Do</h3>
            <p className="text-navy-600">{service.whatWeDo || service.description}</p>
          </div>

          {/* How It Works Section */}
          {service.howItWorks && service.howItWorks.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-3 text-navy-800 relative inline-block gold-underline">
                How It Works (Step-by-Step Process)
              </h3>
              <ol className="space-y-4 mt-4">
                {service.howItWorks.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-navy-600">{step}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-8 pt-6 border-t border-beige-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:4167314400"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-full font-medium text-center"
            >
              Call Now: 416-731-4400
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-navy-800 hover:bg-navy-700 text-white px-6 py-3 rounded-full font-medium text-center"
            >
              Request a Quote
            </motion.a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
