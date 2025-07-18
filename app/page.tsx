'use client'

import HeroSection from '@/components/sections/hero-section'
import SkillSection from '@/components/sections/skill-section'
import ExperienceSection from '@/components/sections/experience-section'
import ContactSection from '@/components/sections/contact-section'
import ProjectSection from '@/components/sections/project-section'
import Header from '@/components/header'
import { useData } from '@/lib/data-provider'
import Loader from '@/components/loader'

export default function Portfolio() {

   const { loading } = useData();
   
   return (
      loading ? 
         <Loader />
      :
      <div className="min-h-screen bg-background">
         <Header />
         <HeroSection />
         <ExperienceSection />
         <ProjectSection />
         <SkillSection />
         <ContactSection />
      </div>
   )
}
