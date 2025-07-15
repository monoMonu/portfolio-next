import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Code, ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Link from 'next/link'

export interface ProjectType {
   index: number,
   title: string,
   description: string,
   tech: string[],
   live: string,
   source: string,
   image: string
}

function ProjectCard({ index, title, description, tech, live, source }: ProjectType) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: index * 0.1 }}
         viewport={{ once: true }}
      >
         <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden pt-0">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
               <Code className="w-12 h-12 text-primary/60" />
            </div>
            <CardHeader>
               <CardTitle className="group-hover:text-primary transition-colors">
                  {title}
               </CardTitle>
               <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((tech, techIndex) => (
                     <Badge key={techIndex} variant="secondary">
                        {tech}
                     </Badge>
                  ))}
               </div>
               <div className="flex gap-2">
                  <Link href={source}>
                     <Button size="sm" variant="outline" className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                     </Button>
                  </Link>
                  <Link href={live}>
                     <Button size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                     </Button>
                  </Link>
               </div>
            </CardContent>
         </Card>
      </motion.div>
   )
}

export default ProjectCard