'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { Button } from '../ui/button'
import ContactForm from '../contact-form'
import { Separator } from '../ui/separator'
import { useData } from '@/lib/data-provider'
import { IAbout } from './hero-section'


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
               <h2 className="text-3xl md:text-4xl font-bold mb-4">&lt; Get In Touch /&gt;</h2>
               <p className="text-lg text-primary max-w-2xl mx-auto">
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
                  <Card className='sm:backdrop-blur-md sm:bg-gradient-to-br sm:from-muted/5 sm:to-background/90 border-none py-6 shadow-none'>
                     <CardHeader>
                        <CardTitle className='text-2xl'>Contact Information</CardTitle>
                        <CardDescription>
                           Feel free to reach out through any of these platforms
                        </CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                           <Mail className="w-5 h-5 text-primary" />
                           <span className='text-sm'>{about?.[0].email}</span>
                        </div>
                        <Separator />
                        <div className='py-2 flex gap-4'>
                           {socialLinks.map(({ key, icon }, i) => {
                              const href = about?.[0]?.[key as keyof IAbout];
                              return (
                                 <motion.a
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 * i }}
                                    key={key} href={typeof href === 'string' ? href : ''}
                                 >
                                    <Button variant="outline" size="sm">
                                       {icon}
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
                  className="p-0 sm:p-2 flex-1"
               >
                  <ContactForm />
               </motion.div>

            </div>
         </div>
      </section>
   )
}

export default ContactSection
