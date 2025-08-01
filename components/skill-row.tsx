import React from 'react'

function SkillRow(
   { category, skills, idx }: { category: string, skills: string[], idx:number }
) {
   return (
      <div>
         <h3
            className={`text-base font-semibold mb-2.5 ${idx % 2 !== 0 ? 'text-right' : ''}`}
         >
            {category}
         </h3>
         <div
            className={`flex flex-wrap gap-3 ${idx % 2 !== 0 ? 'justify-end' : ''}`}
         >
            {skills.map((skill, i) => (
               <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary to-secondary/50 text-secondary-foreground text-sm font-medium shadow hover:scale-105 transition-transform"
               >
                  {skill}
               </span>
            ))}
         </div>
      </div>
   )
}

export default SkillRow