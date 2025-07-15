'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

type ExperienceProps = {
   title: string;
   company: string;
   period: string;
   description: string;
   index: number;
};

export default function ExperienceCard({
   title,
   company,
   period,
   description,
   index,
}: ExperienceProps) {
   return (
      <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6, delay: index * 0.1 }}
         viewport={{ once: true }}
      >
         <Card>
            <CardContent className="p-6">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                     <h3 className="text-xl font-semibold">{title}</h3>
                     <p className="text-primary font-medium">{company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                     <Calendar className="w-4 h-4 mr-1" />
                     {period}
                  </Badge>
               </div>
               <p className="text-muted-foreground">{description}</p>
            </CardContent>
         </Card>
      </motion.div>
   );
}
