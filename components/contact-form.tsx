import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Send } from 'lucide-react'


function ContactForm() {
   return (
      <div>
         <Card>
            <CardHeader>
               <CardTitle>Send Message</CardTitle>
               <CardDescription>
                  I'll get back to you as soon as possible
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <Input placeholder="First Name" />
                  </div>
                  <div>
                     <Input placeholder="Last Name" />
                  </div>
               </div>
               <Input placeholder="Email" type="email" />
               <Input placeholder="Subject" />
               <Textarea placeholder="Your message..." className="min-h-32" />
               <Button className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
               </Button>
            </CardContent>
         </Card>
      </div>
   )
}

export default ContactForm