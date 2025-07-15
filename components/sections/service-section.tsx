'use client'

import { motion } from 'framer-motion'
import { Code, Globe, Palette, Smartphone } from 'lucide-react'
import ServiceCard from '@/components/service-card'

const services = [
   {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
   },
   {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that deliver native performance and user experience.'
   },
   {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user engagement and satisfaction.'
   },
   {
      icon: <Globe className="w-8 h-8" />,
      title: 'API Development',
      description: 'Scalable and secure REST APIs and GraphQL endpoints for your applications.'
   }
]

export default function ServicesSection() {
   return (
      <section id="services" className="py-20 px-6">
         <div className="max-w-6xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  What I can do for you and your business
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {services.map((service, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     viewport={{ once: true }}
                  >
                     <ServiceCard {...service} />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
