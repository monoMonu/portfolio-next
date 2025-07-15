'use client'

import { Card, CardContent } from '@/components/ui/card'

type ServiceCardProps = {
   icon: React.ReactNode
   title: string
   description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
   return (
      <Card className="text-center hover:shadow-lg transition-shadow duration-300">
         <CardContent className="p-6">
            <div className="flex justify-center mb-4 text-primary">
               {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
         </CardContent>
      </Card>
   )
}
