"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Form submitted!",
        description: "We'll get back to you as soon as possible.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy-700">Name</FormLabel>
              <FormControl>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="border-beige-200 focus:border-gold-400 focus:ring-gold-400"
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy-700">Email</FormLabel>
                <FormControl>
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <Input
                      placeholder="Your email"
                      type="email"
                      {...field}
                      className="border-beige-200 focus:border-gold-400 focus:ring-gold-400"
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy-700">Phone Number</FormLabel>
                <FormControl>
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <Input
                      placeholder="Your phone number"
                      {...field}
                      className="border-beige-200 focus:border-gold-400 focus:ring-gold-400"
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy-700">Service Inquiry</FormLabel>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-beige-200 focus:ring-gold-400">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="leak-detection">Leak Detection & Repairs</SelectItem>
                    <SelectItem value="drain-cleaning">Drain Cleaning & Unclogging</SelectItem>
                    <SelectItem value="water-heater">Water Heater Services</SelectItem>
                    <SelectItem value="gas-line">Gas Line Services</SelectItem>
                    <SelectItem value="pipe-repairs">Pipe Repairs & Installations</SelectItem>
                    <SelectItem value="renovations">Plumbing Renovations</SelectItem>
                    <SelectItem value="emergency">Emergency Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy-700">Message</FormLabel>
              <FormControl>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Textarea
                    placeholder="Please describe your plumbing needs or issues"
                    className="min-h-[120px] border-beige-200 focus:border-gold-400 focus:ring-gold-400"
                    {...field}
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}
