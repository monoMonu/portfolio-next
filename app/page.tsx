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
         <div className="relative isolate min-h-screen bg-background">
            <GridPattern
               width={80}
               height={80}
               x={-1}
               y={-1}
               className={cn(
                  "pointer-events-none fixed inset-0 z-0 [mask-image:radial-gradient(400px_circle_at_center,#fff5,transparent)]"
               )}
            />
            <div className="relative z-10">
               <Header />
               <HeroSection />
               <SkillSection />
               <ExperienceSection />
               <ProjectSection />
               <ContactSection />
            </div>
         </div>}
      </div>
   )
}