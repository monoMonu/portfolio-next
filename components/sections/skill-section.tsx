'use client'

import { useData } from '@/lib/data-provider';
import { motion } from 'framer-motion';

const groupSkillsByCategory = (skills: Array<{ name: string; category: string }> | null | undefined) => {
   if (!Array.isArray(skills)) return {};

   return skills.reduce<Record<string, string[]>>((acc, { name, category }) => {
      if (!acc[category]) {
         acc[category] = [];
      }
      acc[category].push(name);
      return acc;
   }, {});
};

export default function SkillsSection() {

   const { skills } = useData();
   const groupedSkills = groupSkillsByCategory(skills);

   return (
      <section id="skills" className="py-20 px-6 sm:px-8 bg-secondary/30">
         <div className="max-w-6xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-8"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
               <p className="text-lg text-primary">
                  Tools and technologies I work with
               </p>
            </motion.div>

            <div className="space-y-5">
               {Object.entries(groupedSkills).map(([category, skills], idx) => (
                  <motion.div
                     key={category}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: idx * 0.2 }}
                     viewport={{ once: true }}
                  >
                     <h3
                        className={`text-base font-semibold mb-2.5 ${idx % 2 !== 0 ? 'text-right' : ''}`}
                     >
                        {category}
                     </h3>
                     <div
                        className={`flex flex-wrap gap-4 ${idx % 2 !== 0 ? 'justify-end' : ''}`}
                     >
                        {skills.map((skill, i) => (
                           <span
                              key={i}
                              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/50 text-primary-foreground text-sm font-medium shadow hover:scale-105 transition-transform"
                           >
                              {skill}
                           </span>
                        ))}
                     </div>
                  </motion.div>
               )
               )}
            </div>
         </div>
      </section>
   );
}
