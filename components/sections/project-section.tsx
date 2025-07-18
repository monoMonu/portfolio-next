'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../project-card'
import { useData } from '@/lib/data-provider'


function ProjectSection() {

   const { projects } = useData();

   return (
      <section id="projects" className="py-20 px-6 sm:px-8">
         <div className="max-w-6xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
               <p className="text-lg text-primary max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills and experience
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
               {projects?.map((project, i) => (
                     <ProjectCard
                        key={i}
                        index={i}
                        title={project?.title}
                        description={project?.description}
                        tech={project?.tech}
                        livelink={project?.livelink}
                        sourcelink={project?.sourcelink}
                        image="#"
                     />
                  ))
               }
            </div>
         </div>
      </section>
   )
}

export default ProjectSection