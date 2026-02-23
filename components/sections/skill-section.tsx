'use client'

import { useData } from '@/lib/data-provider';
import { motion } from 'framer-motion';
import { Marquee } from '../ui/marquee';
import SkillLogo from '../skill-logo';

export interface ISkills {
   id: number,
   name: string,
   category: string,
   logo?: string,
}

const distributeSkillsInRows = (skills: ISkills[] | null | undefined) => {
   if (!Array.isArray(skills) || skills.length === 0) return [[], [], []];

   const rows: [ISkills[], ISkills[], ISkills[]] = [[], [], []];

   skills.forEach((skill, idx) => {
      rows[idx % 3].push(skill);
   });

   return rows;
};

export default function SkillsSection() {
   const { skills } = useData();
   const [row1, row2, row3] = distributeSkillsInRows(skills);

   return (
      <section id="skills" className="py-12 px-5 sm:px-8">
         <div className="max-w-screen-lg mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-8"
            >
               <h2 className="text-2xl md:text-3xl font-bold mb-2">&lt; Skills & Expertise /&gt;</h2>
               <p className="text-base text-primary">
                  Tools and technologies I work with
               </p>
            </motion.div>

            <div className="overflow-hidden py-2">
               {/* Row 1 - Left to Right */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
               >
                  <Marquee repeat={4} pauseOnHover className="py-4 overflow-visible">
                     {row1.map((skill) =>
                        skill.logo ? (
                           <SkillLogo
                              key={skill.id}
                              id={skill.id}
                              name={skill.name}
                              logo={skill.logo}
                           />
                        ) : null
                     )}
                  </Marquee>
               </motion.div>

               {/* Row 2 - Right to Left (Reverse) */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
               >
                  <Marquee reverse repeat={4} pauseOnHover className="py-4 overflow-visible">
                     {row2.map((skill) =>
                        skill.logo ? (
                           <SkillLogo
                              key={skill.id}
                              id={skill.id}
                              name={skill.name}
                              logo={skill.logo}
                           />
                        ) : null
                     )}
                  </Marquee>
               </motion.div>

               {/* Row 3 - Left to Right */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  <Marquee repeat={4} pauseOnHover className="py-4 overflow-visible">
                     {row3.map((skill) =>
                        skill.logo ? (
                           <SkillLogo
                              key={skill.id}
                              id={skill.id}
                              name={skill.name}
                              logo={skill.logo}
                           />
                        ) : null
                     )}
                  </Marquee>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
