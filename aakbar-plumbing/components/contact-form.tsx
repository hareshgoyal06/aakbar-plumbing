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
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setIsSubmitted(true);
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              className="w-8 h-8 text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-bold text-navy-800 mb-2">Thank You!</h3>
          <p className="text-navy-600">
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
        </div>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-gold-500 text-gold-500 hover:bg-gold-50"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
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
                <Select onValueChange={field.onChange} value={field.value}>
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
            className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-full relative"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-navy-900 border-t-transparent rounded-full"
                />
                <span>Sending...</span>
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}
