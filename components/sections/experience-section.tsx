'use client'

import { motion } from 'framer-motion'
import ExperienceCard from '../experience-card'
import { useData } from '@/lib/data-provider'

export default function ExperienceSection() {

   const { experiences } = useData();

   return (
      <section id="experience" className="py-20 px-5 sm:px-8 bg-secondary/30">
         <div className="max-w-6xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">&lt; Experience /&gt;</h2>
               <p className="text-lg text-primary">
                  My professional journey and career highlights
               </p>
            </motion.div>

            <div className="relative border-l-2 border-muted md:pl-8 space-y-12">
               {experiences?.map((exp, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className='relative'
                  >
                     <span className="absolute md:left-[-2.65rem] left-[-.65rem] top-1/3 -translate-y-1/2 w-5 h-5 rounded-full bg-primary" />

                     <ExperienceCard {...exp} />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
