'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Mail } from 'lucide-react'

export default function HeroSection() {
   const containerRef = useRef<HTMLDivElement>(null)
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start']
   })

   const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
   const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

   return (
      <motion.section
         ref={containerRef}
         style={{ y: heroY, opacity: heroOpacity }}
         className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
      >
         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20" />
         <div className="relative text-center max-w-4xl px-6">
            <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
               John Doe
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
               Full Stack Developer & UI/UX Designer
            </motion.p>
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="flex flex-col sm:flex-row gap-4 justify-center"
            >
               <Button size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
               </Button>
               <Button variant="outline" size="lg" className="gap-2">
                  <Github className="w-4 h-4" />
                  View Projects
               </Button>
            </motion.div>
         </div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
         >
            <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
         </motion.div>
      </motion.section>
   )
}
