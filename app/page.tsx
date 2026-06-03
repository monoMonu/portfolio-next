import HeroSection from '@/components/sections/hero-section'
import SkillSection from '@/components/sections/skill-section'
import ExperienceSection from '@/components/sections/experience-section'
import ContactSection from '@/components/sections/contact-section'
import ProjectSection from '@/components/sections/project-section'
import Header from '@/components/header'
import { GridPattern } from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'
import { getPortfolioData } from '@/lib/portfolioData'

export default async function Portfolio() {
   
   const data = await getPortfolioData();
   
   return (
      <div className='relative'>
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
               <HeroSection about={data.about} />
               <SkillSection skills={data.skills} />
               <ExperienceSection experiences={data.experiences} />
               <ProjectSection projects={data.projects} />
               <ContactSection />
            </div>
         </div>
      </div>
   )
}