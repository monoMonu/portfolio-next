import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Send } from 'lucide-react'

function ContactForm() {
   return (
      <div
         className="rounded-xl md:p-8 sm:p-6 sm:backdrop-blur-md sm:bg-gradient-to-br sm:from-muted/30 sm:via-background/50 sm:to-muted/30 shadow-sm"
      >
         <div className="mb-8">
            <h3 className="text-3xl font-semibold mb-2 text-primary">
               Send a Message
            </h3>
            <p className="text-muted-foreground text-sm">
               I&apos;ll get back to you as soon as possible.
            </p>
         </div>

         <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
               </div>
               <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
               </div>
            </div>

            <div className="flex flex-col gap-2">
               <Label htmlFor="email">Email</Label>
               <Input id="email" type="email" placeholder="you@example.com" />
            </div>

            <div className="flex flex-col gap-2">
               <Label htmlFor="subject">Subject</Label>
               <Input id="subject" placeholder="Let's build something..." />
            </div>

            <div className="flex flex-col gap-2">
               <Label htmlFor="message">Message</Label>
               <Textarea id="message" placeholder="Write your message..." className="min-h-[140px]" />
            </div>

            <Button className="w-full gap-2 bg-gradient-to-r from-primary to-secondary/50 text-secondary-foreground hover:opacity-90">
               <Send className="w-4 h-4" />
               Send Message
            </Button>
         </form>
      </div>
   )
}

export default ContactForm
