'use client'

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Send } from 'lucide-react';
import { ContactFormPayload, sendEmail } from '@/lib/utils';

export default function ContactForm() {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
   });
   const [loading, setLoading] = useState(false);
   const [status, setStatus] = useState<string | null>(null);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setStatus(null);

      const { firstName, lastName, email, subject, message } = formData;
      const userName = [firstName, lastName].filter(Boolean).join(' ').trim() || 'Anonymous';

      const payload: ContactFormPayload = {
         userEmail: email,
         userName,
         subject,
         message,
      };

      const result = await sendEmail(payload);

      if (result.success) {
         setStatus('Message sent successfully!');
         setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
         setStatus(`Failed to send message: ${result.error}`);
      }

      setLoading(false);
   };

   return (
      <div className="rounded-xl sm:p-6 p-2 sm:backdrop-blur-md sm:bg-gradient-to-br sm:from-muted/30 sm:via-background/50 sm:to-muted/30">
         <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            <p className="text-muted-foreground text-sm">I&apos;ll get back to you as soon as possible.</p>
         </div>

         <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                     id="firstName"
                     placeholder="John"
                     value={formData.firstName}
                     onChange={handleChange}
                     required
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                     id="lastName"
                     placeholder="Doe"
                     value={formData.lastName}
                     onChange={handleChange}
                  />
               </div>
            </div>

            <div className="flex flex-col gap-2">
               <Label htmlFor="email">Email</Label>
               <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>

            <div className="flex flex-col gap-2">
               <Label htmlFor="subject">Subject</Label>
               <Input
                  id="subject"
                  placeholder="Let's build something..."
                  value={formData.subject}
                  onChange={handleChange}
                  required
               />
            </div>

            <div className="flex flex-col gap-2">
               <Label htmlFor="message">Message</Label>
               <Textarea
                  id="message"
                  placeholder="Write your message..."
                  className="min-h-[140px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
               />
            </div>

            {status && (
               <p className="text-sm mt-2 text-center text-primary">{status}</p>
            )}

            <Button
               type="submit"
               disabled={loading}
               variant={'secondary'}
               className="w-full gap-2"
            >
               <Send className="w-4 h-4" />
               {loading ? 'Sending...' : 'Send Message'}
            </Button>
         </form>
      </div>
   );
}
