'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export interface ExperienceType {
   role: string;
   company: string;
   start_date: string;
   end_date: string;  
   responsibilities: string[];
   index: number;
};

export default function ExperienceCard({
   role,
   company,
   start_date,
   end_date,
   responsibilities,
   index,
}: ExperienceType) {

   return (
      <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6, delay: index * 0.1 }}
         viewport={{ once: true }}
      >
         <Card
            className="border-0 bg-gradient-to-r from-transparent to-background/60 shadow-none"
         >
            <CardContent className="p-6">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                     <h3 className="text-xl font-semibold">{role}</h3>
                     <p className="text-primary font-medium">{company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                     <Calendar className="w-4 h-4 mr-1" />
                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(start_date))} - {end_date ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(end_date)) : 'Present'}
                  </Badge>
               </div>
               <p className="text-muted-foreground md:pr-12">
                  {responsibilities.map((el, i) => (
                     <li key={i}>{el}</li>
                  ))}
               </p>
            </CardContent>
         </Card>
      </motion.div>
   );
}
