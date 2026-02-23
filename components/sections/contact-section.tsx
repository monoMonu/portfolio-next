'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { Button } from '../ui/button'
import ContactForm from '../contact-form'
import { Separator } from '../ui/separator'
import { useData } from '@/lib/data-provider'
import { IAbout } from './hero-section'


export const socialLinks = [
   {
      key: 'github',
      icon: <Github className='size-5' />,
      href: 'https://github.com/monoMonu',
      title: 'GitHub',
      subtitle: 'The Code Drive'
   },
   {
      key: 'twitter',
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='size-5' viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
         </svg>
      ),
      href: 'https://x.com/monoMonu0',
      title: 'X (Twitter)',
      subtitle: 'Connect on X for updates'
   },
   {
      key: 'email',
      icon: <Mail className='size-5' />,
      href: 'mailto:monusch08gmail.com',
      title: 'Email',
      subtitle: 'Reach out anytime, for any project'
   },
];

function ContactSection() {

   const { about } = useData();

   return (
      <section id="contact" className="pt-20 pb-8 px-5 sm:px-8">
         <div className="max-w-screen-lg mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-2xl md:text-3xl font-bold mb-2">&lt; Get In Touch /&gt;</h2>
               <p className="text-base text-primary max-w-2xl mx-auto">
                  Have a project in mind? Let&apos;s discuss how we can work together
               </p>
            </motion.div>

            <div className="grid lg:flex lg:gap-4 gap-12 ">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className='flex-1'
               >
                  <Card className='sm:backdrop-blur-md sm:bg-gradient-to-br sm:from-muted/5 sm:to-background/90 border-none py-6 shadow-none gap-4'>
                     <CardHeader className='gap-1'>
                        <CardTitle className='text-lg md:text-xl'>Contact Information</CardTitle>
                        <CardDescription>
                           Feel free to reach out wherever you want :)
                        </CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-3">
                        <Separator />
                        <div className='flex flex-col gap-2'>
                           {socialLinks.map((skill, i) => {
                              return (
                                 <motion.a
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 * i }}
                                    key={skill.key} href={skill.href}
                                 >
                                    <Button 
                                       variant="outline" size="sm"
                                       className='w-full py-8'
                                    >
                                       <span className='px-2'>{skill.icon}</span>
                                       <p className='flex-1 flex flex-col items-start text-sm'>
                                          <span>{skill.title}</span>
                                          <span className='text-muted-foreground text-xs'>{skill.subtitle}</span>
                                       </p>
                                    </Button>
                                 </motion.a>
                              );
                           })}
                        </div>
                     </CardContent>
                  </Card>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-0 flex-1"
               >
                  <ContactForm />
               </motion.div>

            </div>
         </div>
      </section>
   )
}

export default ContactSection
