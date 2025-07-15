import HeroSection from '@/components/sections/hero-section'
import SkillSection from '@/components/sections/skill-section'
import ServiceSection from '@/components/sections/service-section'
import ExperienceSection from '@/components/sections/experience-section'
import ContactSection from '@/components/sections/contact-section'
import ProjectSection from '@/components/sections/project-section'
import Header from '@/components/header'

export default function Portfolio() {
   return (
      <div className="min-h-screen bg-background">
         <Header />
         <HeroSection />
         <ProjectSection />
         <SkillSection />
         <ServiceSection />
         <ExperienceSection />
         <ContactSection />
      </div>
   )
}
