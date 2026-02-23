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
      fullName: '',
      email: '',
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

      const { fullName, email, message } = formData;
      const userName = fullName.trim() || 'Anonymous';

      const payload: ContactFormPayload = {
         userEmail: email,
         userName,
         message,
      };

      const result = await sendEmail(payload);

      if (result.success) {
         setStatus('Message sent successfully!');
         setFormData({ fullName: '', email: '', message: '' });
      } else {
         setStatus(`Failed to send message: ${result.error}`);
      }

      setLoading(false);
   };

   return (
      <div className="rounded-xl sm:p-6 p-2 sm:backdrop-blur-md sm:bg-gradient-to-br sm:from-muted/40 sm:via-background/50 sm:to-muted/40">
         <div className="mb-5">
            <h3 className="text-lg md:text-xl font-semibold mb-1">Send a Message</h3>
            <p className="text-muted-foreground text-sm">I&apos;ll get back to you as soon as possible.</p>
         </div>

         <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col gap-1.5">
               <Input
                  id="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
               />
            </div>

            <div className="flex flex-col gap-1.5">
               <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>

            <div className="flex flex-col gap-1.5">
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
               className="w-full gap-1.5"
            >
               {loading ? 'Sending...' : 'Send Message'}
            </Button>
         </form>
      </div>
   );
}
