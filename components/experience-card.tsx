import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export interface ExperienceType {
   role: string;
   company: string;
   start_date: string;
   end_date: string;
   responsibilities: string[];
};

export default function ExperienceCard({
   role,
   company,
   start_date,
   end_date,
   responsibilities,
}: ExperienceType) {

   return (
      <Card
         className="border-0 bg-gradient-to-r from-transparent to-card/60 shadow-none"
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
   );
}
