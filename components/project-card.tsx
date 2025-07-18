'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from './ui/card'
import { Code, ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Link from 'next/link'

export interface ProjectType {
   index: number
   title: string
   description: string[]
   tech: string[]
   livelink: string
   sourcelink: string
   image: string
}

function ProjectCard({
   index,
   title,
   description,
   tech,
   livelink,
   sourcelink
}: ProjectType) {
   const ref = useRef<HTMLDivElement>(null)
   const x = useMotionValue(0.5)
   const y = useMotionValue(0.5)

   const rotateX = useTransform(y, [0, 1], [6, -6])
   const rotateY = useTransform(x, [0, 1], [-6, 6])

   const handleMouseMove = (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return

      const posX = (e.clientX - rect.left) / rect.width
      const posY = (e.clientY - rect.top) / rect.height

      x.set(posX)
      y.set(posY)
   }

   const handleMouseLeave = () => {
      x.set(0.5)
      y.set(0.5)
   }

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: index * 0.1 }}
         viewport={{ once: true }}
         style={{
            rotateX,
            rotateY,
            transformPerspective: 1000
         }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden pt-0 px-0 pb-4 sm:pb-5 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
               <Code className="w-12 h-12 text-primary/60" />
            </div>
            <CardHeader className="px-4 sm:px-5">
               <CardTitle className="group-hover:text-primary transition-colors pb-1 text-xl">
                  {title}
               </CardTitle>
               <CardDescription className='text-base'>
                  {description.map((el, i) => (
                     <li key={i}>{el}</li>
                  ))}
               </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-5">
               <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((tech, techIndex) => (
                     <Badge key={techIndex} variant="secondary">
                        {tech}
                     </Badge>
                  ))}
               </div>
               <div className="flex gap-2">
                  {sourcelink && (
                     <Link href={sourcelink}>
                        <Button size="sm" variant="outline" className="gap-2">
                           <Github className="w-4 h-4" />
                           Code
                        </Button>
                     </Link>
                  )}
                  {livelink && (
                     <Link href={livelink}>
                        <Button size="sm" className="gap-2">
                           <ExternalLink className="w-4 h-4" />
                           Live Demo
                        </Button>
                     </Link>
                  )}
               </div>
            </CardContent>
         </Card>
      </motion.div>
   )
}

export default ProjectCard
