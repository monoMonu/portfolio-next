'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../ui/button'
import ContactForm from '../contact-form'
import { Separator } from '../ui/separator'

function ContactSection() {
   return (
      <section id="contact" className="py-20 px-6">
         <div className="max-w-6xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind? Let's discuss how we can work together
               </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                  <Card>
                     <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                        <CardDescription>
                           Feel free to reach out through any of these channels
                        </CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                           <Mail className="w-5 h-5 text-primary" />
                           <span>john.doe@example.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <Phone className="w-5 h-5 text-primary" />
                           <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <MapPin className="w-5 h-5 text-primary" />
                           <span>New York, NY</span>
                        </div>
                        <Separator />
                        <div className="flex gap-4">
                           <Button variant="outline" size="sm">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                           </Button>
                           <Button variant="outline" size="sm">
                              <Linkedin className="w-4 h-4 mr-2" />
                              LinkedIn
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                  <ContactForm />
               </motion.div>
            </div>
         </div>
      </section>
   )
}

export default ContactSection