'use client'

import { useData } from '@/lib/data-provider';
import { motion } from 'framer-motion';
import SkillRow from '../skill-row';

export interface ISkills {
   name: string,
   category: string,
}


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
      <section id="skills" className="py-20 px-5 sm:px-8 bg-secondary/30">
         <div className="max-w-6xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-8"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">&lt; Skills & Expertise /&gt;</h2>
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
                     <SkillRow
                        category={category}
                        skills={skills}
                        idx={idx}
                     />
                  </motion.div>
               )
               )}
            </div>
         </div>
      </section>
   );
}
