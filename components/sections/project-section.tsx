'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../project-card'

const projects = [
   {
      index: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      source: "#",
      live: "#",
      image: "/api/placeholder/400/250"
   },
   {
      index: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      source: "#",
      live: "#",
      image: "/api/placeholder/400/250"
   },
   {
      index: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and real-time metrics.",
      tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      source: "#",
      live: "#",
      image: "/api/placeholder/400/250"
   },
   {
      index: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      tech: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      source: "#",
      live: "#",
      image: "/api/placeholder/400/250"
   }
]


function ProjectSection() {
   return (
      <section id="projects" className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills and experience
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
               {projects.map((project, i) => (
                  <ProjectCard
                     key={i}
                     index={i}
                     title={project.title}
                     description={project.description}
                     tech={project.tech}
                     live={project.live}
                     source={project.source}
                     image="#"
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default ProjectSection