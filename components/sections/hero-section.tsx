'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Github, Instagram, Linkedin, Mail, Twitter, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { useData } from '@/lib/data-provider'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export interface IAbout {
   id: number;
   fullname: string;
   title: string;
   about: string;
   email: string;
   github: string;
   linkedin: string;
   twitter: string;
   instagram: string;
   leetcode: string;
   location: string;
   phone: string | null;
}

const socialLinks = [
   {
      key: 'mail',
      label: 'Mail',
      icon: <Mail className="w-4 h-4" />,
      getHref: (about: IAbout | undefined) => `mailto:${about?.email}` || '',
   },
   {
      key: 'github',
      label: 'GitHub',
      icon: <Github className="w-4 h-4" />,
      getHref: (about: IAbout | undefined) => about?.github || '',
   },
   {
      key: 'linkedin',
      label: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      getHref: (about: IAbout | undefined) => about?.linkedin || '',
   },
   {
      key: 'twitter',
      label: 'Twitter',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='size-3' viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
         </svg>,
      getHref: (about: IAbout | undefined) => about?.twitter || '',
   },
   {
      key: 'instagram',
      label: 'Instagram',
      icon: <Instagram className="w-4 h-4" />,
      getHref: (about: IAbout | undefined) => about?.instagram || '',
   },
];

export default function HeroSection() {
   const { about } = useData();

   const containerRef = useRef<HTMLDivElement>(null)
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start']
   })

   const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
   const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

   return (
      <motion.section
         ref={containerRef}
         style={{ y: heroY, opacity: heroOpacity }}
         className="relative h-[calc(100vh-30px)] max-h-160 flex items-center justify-center overflow-hidden bg-background"
      >
         <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-bg/20" />

         <div className="relative z-10 text-center max-w-3xl px-6 sm:px-8 mx-auto">
            {/* Available for Work Badge */}
            <div 
               className="mb-3 flex justify-center animate-fade-in-up"
            >
               <Badge 
                  variant="outline" 
                  className="px-4 py-1.5 bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors duration-200 rounded-full text-xs"
               >
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Available for Work
               </Badge>
            </div>

            {/* Main heading */}
            <h1 
               className="text-4xl sm:text-5xl font-bold mb-4 text-primary leading-tight animate-fade-in-up"
               style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
               {about?.[0]?.fullname || 'Welcome'}
            </h1>

            {/* Subtitle */}
            <p 
               className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up"
               style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
               {about?.[0]?.title || 'Full Stack Developer'}
            </p>

            {/* CTA Buttons */}
            <div 
               className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in-up"
               style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
               <Link href={'#contact'}>
                  <Button size="lg" className="gap-2 w-full sm:w-auto bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                     <Briefcase className="w-4 h-4" />
                     Hire Me
                  </Button>
               </Link>
               <Link href={'#projects'}>
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto hover:bg-primary/10 transition-all duration-200">
                     <Github className="w-4 h-4" />
                     View Projects
                  </Button>
               </Link>
            </div>

            {/* Social Links */}
            <div 
               className="flex gap-3 justify-center flex-wrap animate-fade-in-up"
               style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
               {socialLinks.map((link) => {
                  const href = link.getHref(about?.[0]);
                  return href ? (
                     <Link key={link.key} href={href} target="_blank" rel="noopener noreferrer">
                        <Button 
                           variant="outline" 
                           size="sm" 
                           className="gap-2 hover:bg-primary/10 transition-colors duration-200"
                           title={link.label}
                        >
                           {link.icon}
                        </Button>
                     </Link>
                  ) : null;
               })}
            </div>
         </div>

         {/* Scroll indicator */}
         <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
         >
            <Link href="#projects">
               <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors animate-bounce cursor-pointer" />
            </Link>
         </div>
      </motion.section>
   )
}
