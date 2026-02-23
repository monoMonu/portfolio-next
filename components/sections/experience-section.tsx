'use client'

import { motion } from 'framer-motion'
import ExperienceCard from '../experience-card'
import { useData } from '@/lib/data-provider'

export default function ExperienceSection() {

   const { experiences } = useData();

   return (
      <section id="experience" className="py-12 px-5 sm:px-8">
         <div className="max-w-screen-lg mx-auto relative">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-2xl md:text-3xl font-bold mb-2">&lt; Experience /&gt;</h2>
               <p className="text-base text-primary">
                  My professional journey and career highlights
               </p>
            </motion.div>

            <div className="relative border-l-2 border-muted md:pl-8 pl-4 flex flex-col gap-8">
               {experiences?.map((exp, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className='relative'
                  >
                     <p className="absolute top-15 md:-left-[32.5px] -left-[16.5px] -translate-x-1/2 w-4 h-4 border-4 border-muted bg-background rounded-full" />
                     <ExperienceCard {...exp} />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
