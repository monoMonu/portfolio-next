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
      </div>
   )
}

export default SkillRow