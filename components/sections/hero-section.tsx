'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useData } from '@/lib/data-provider'


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
      key: 'github',
      icon: <Github />,
   },
   {
      key: 'linkedin',
      icon: <Linkedin />,
   },
   {
      key: 'leetcode',
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-4 h-4' viewBox="0 0 24 24">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
         </svg>
      ),
   },
   {
      key: 'twitter',
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-4 h-4' viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
         </svg>
      ),
   },
   {
      key: 'instagram',
      icon: <Instagram />,
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
         className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
      >
         <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-bg/20" />
         <div className="relative text-center max-w-4xl px-6 sm:px-8">
            <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
               {about?.[0].fullname}
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
               {about?.[0].title}
            </motion.p>
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="flex flex-col sm:flex-row gap-4 justify-center"
            >
               <Link href={'#contact'}>
                  <Button size="lg" className="gap-2">
                     <Mail className="w-4 h-4" />
                     Get In Touch
                  </Button>
               </Link>
               <Link href={'#projects'}>
                  <Button variant="outline" size="lg" className="gap-2">
                     <Github className="w-4 h-4" />
                     View Projects
                  </Button>
               </Link>
            </motion.div>
            <div className='py-5 flex gap-4 justify-center'>
               {socialLinks.map(({ key, icon }, i) => {
                  const href = about?.[0]?.[key as keyof IAbout];
                  return (href &&
                     <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2*(i+1) }}
                        key={key} href={typeof href === 'string' ? href : ''}
                     >
                        <Button variant="outline" size="sm">
                           {icon}
                        </Button>
                     </motion.a>
                  );
               })}
            </div>
         </div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
         >
            <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
         </motion.div>
      </motion.section>
   )
}
