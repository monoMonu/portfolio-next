'use client'

import { motion } from "framer-motion";
import ExperienceCard from "../experience-card";

const experience = [
   {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
         "Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
   },
   {
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description:
         "Developed and maintained client websites and web applications. Collaborated with design teams to implement responsive user interfaces.",
   },
   {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
         "Built responsive web applications using React and Vue.js. Optimized application performance and implemented modern development workflows.",
   },
   {
      title: "Junior Web Developer",
      company: "WebDev Studio",
      period: "2018 - 2019",
      description:
         "Assisted in developing client websites using HTML, CSS, JavaScript, and PHP. Gained experience in full-stack development.",
   },
];

export default function ExperienceSection() {
   return (
      <section id="experience" className="py-20 px-6 bg-secondary/30">
         <div className="max-w-4xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
               <p className="text-lg text-muted-foreground">
                  My professional journey and career highlights
               </p>
            </motion.div>

            <div className="space-y-8">
               {experience.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
}
