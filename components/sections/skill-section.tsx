'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'

const skills = [
   { name: "JavaScript", level: 95 },
   { name: "TypeScript", level: 90 },
   { name: "React", level: 92 },
   { name: "Next.js", level: 88 },
   { name: "Node.js", level: 85 },
   { name: "Python", level: 80 },
   { name: "PostgreSQL", level: 82 },
   { name: "MongoDB", level: 78 },
   { name: "AWS", level: 75 },
   { name: "Docker", level: 70 }
]

export default function SkillsSection() {
   return (
      <section id="skills" className="py-20 px-6 bg-secondary/30">
         <div className="max-w-4xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
               <p className="text-lg text-muted-foreground">
                  Technologies and tools I work with
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
               {skills.map((skill, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className="space-y-2"
                  >
                     <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                     </div>
                     <Progress value={skill.level} className="h-2" />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
