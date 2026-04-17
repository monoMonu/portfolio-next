'use client'

import HeroSection from '@/components/sections/hero-section'
import SkillSection from '@/components/sections/skill-section'
import ExperienceSection from '@/components/sections/experience-section'
import ContactSection from '@/components/sections/contact-section'
import ProjectSection from '@/components/sections/project-section'
import Header from '@/components/header'
import { useData } from '@/lib/data-provider'
import Loader from '@/components/loader'
import { GridPattern } from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

export default function Portfolio() {

   const { loading } = useData();
   
   return (
      <div className='relative'>
         {loading ? 
            <Loader />
         :
         <div className="min-h-screen bg-background">
            <GridPattern
               width={60}
               height={60}
               x={-1}
               y={-1}
               className={cn(
                  "[mask-image:radial-gradient(400px_circle_at_center,#fff7,transparent)] fixed"
               )}
            />
            <Header />
            <HeroSection />
            <SkillSection />
            <ExperienceSection />
            <ProjectSection />
            <ContactSection />
         </div>}
      </div>
   )
}


// 'use client'

// import HeroSection from '@/components/sections/hero-section'
// import SkillSection from '@/components/sections/skill-section'
// import ExperienceSection from '@/components/sections/experience-section'
// import ContactSection from '@/components/sections/contact-section'
// import ProjectSection from '@/components/sections/project-section'
// import Header from '@/components/header'
// import { useData } from '@/lib/data-provider'
// import Loader from '@/components/loader'
// import { GridPattern } from '@/components/ui/grid-pattern'
// import { cn } from '@/lib/utils'

// export default function Portfolio() {

//    const { loading } = useData();
   
//    return (
//       <div className="relative flex items-center justify-center overflow-hidden">
//          <GridPattern
//             width={60}
//             height={60}
//             x={-1}
//             y={-1}
//             className={cn(
//                "[mask-image:radial-gradient(400px_circle_at_center,#fff7,transparent)] fixed -z-10"
//             )}
//          />
//          {loading ? 
//             <Loader />
//             :
//             <div>
//                <Header />
//                <HeroSection />
//                <SkillSection />
//                <ExperienceSection />
//                <ProjectSection />
//                <ContactSection />
//             </div>
//          }
//       </div>
//    )
// }

