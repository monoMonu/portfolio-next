import React from 'react'
import { Button } from './ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator'

function Footer() {
   return (
      <footer className="py-12 px-6 bg-secondary/50 border-t">
         <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-2">John Doe</h3>
                  <p className="text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
               </div>
               <div className="flex gap-4">
                  <Button variant="ghost" size="sm">
                     <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                     <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                     <Mail className="w-4 h-4" />
                  </Button>
               </div>
            </div>
            <Separator className="my-6" />
            <div className="text-center text-muted-foreground">
               <p>&copy; 2025 John Doe. All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer;