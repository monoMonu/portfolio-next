'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { Button } from '../ui/button'
import ContactForm from '../contact-form'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { useData } from '@/lib/data-provider'


function ContactSection() {

   const { about } = useData();

   return (
      <section id="contact" className="py-20 px-6 sm:px-8">
         <div className="max-w-6xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
               <p className="text-lg text-primary max-w-2xl mx-auto">
                  Have a project in mind? Let&apos;s discuss how we can work together
               </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                  <Card className='sm:backdrop-blur-md sm:bg-gradient-to-br sm:from-muted/5 sm:to-background/90 border-none'>
                     <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                        <CardDescription>
                           Feel free to reach out through any of these platforms
                        </CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                           <Mail className="w-5 h-5 text-primary" />
                           <span>{about?.[0].email}</span>
                        </div>
                        <Separator />
                        <motion.div
                           initial={{ opacity: 0, x: -50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.8 }}
                           viewport={{ once: true }}
                           className="flex gap-6 justify-center flex-wrap py-3"
                        >
                           <Link 
                              href={about?.[0].github || ''}
                              passHref
                           >
                              <Button
                              variant="outline"
                              size="sm"
                              className="p-4 transform transition duration-300 ease-in-out hover:rotate-6 hover:scale-105 hover:bg-primary hover:text-foreground flex items-center gap-3"
                           >
                              <Github className="w-5 h-5" />
                              <span>GitHub</span>
                           </Button>
                           </Link>

                           <Link 
                              href={about?.[0].linkedin || ''}
                              passHref
                           >
                              <Button
                              variant="outline"
                              size="sm"
                              className="p-4 transform transition duration-300 ease-in-out hover:-rotate-6 hover:scale-105 hover:bg-primary hover:text-foreground flex items-center gap-3"
                           >
                              <Linkedin className="w-5 h-5" />
                              <span>LinkedIn</span>
                           </Button>
                           </Link>

                           <Link 
                              href={about?.[0].twitter || ''}
                              passHref
                           >
                              <Button
                              variant="outline"
                              size="sm"
                              className="p-4 transform transition duration-300 ease-in-out hover:rotate-6 hover:scale-105 hover:bg-primary hover:text-foreground flex items-center gap-3"
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-4 h-4' viewBox="0 0 16 16">
                                 <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                              </svg>
                              <span>X-twitter</span>
                           </Button>
                           </Link>

                           <Link 
                              href={about?.[0].instagram || ''}
                              passHref
                           >
                              <Button
                              variant="outline"
                              size="sm"
                              className="p-4 transform transition duration-300 ease-in-out hover:-rotate-6 hover:scale-105 hover:bg-primary hover:text-foreground flex items-center gap-3"
                           >
                              <Instagram className="w-5 h-5" />
                              <span>Instagram</span>
                           </Button>
                           </Link>
                        </motion.div>
                     </CardContent>
                  </Card>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-0 sm:p-2"
               >
                  <ContactForm />
               </motion.div>

            </div>
         </div>
      </section>
   )
}

export default ContactSection
