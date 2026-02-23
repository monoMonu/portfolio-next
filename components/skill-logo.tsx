'use client'

import { useTheme } from '@/lib/theme-provider';
import Image from 'next/image';
import { useState } from 'react';

export interface SkillLogoProps {
   id: number;
   name: string;
   logo: string;
}

const LOGOS_TO_INVERT = [
   'expo/expo-original-wordmark',
   'express/express-original-wordmark',
   'nextjs/nextjs-original',
   'vercel/vercel-original-wordmark',
   'github/github-original-wordmark',
];

export default function SkillLogo({ id, name, logo }: SkillLogoProps) {
   const [showTooltip, setShowTooltip] = useState(false);
   const { theme } = useTheme();
   const shouldInvert = LOGOS_TO_INVERT.includes(logo) && theme=='dark';

   return (
      <div 
         className="relative inline-flex items-center justify-center h-20 w-20 md:h-24 md:w-24"
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}
      >
         <Image
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}.svg`}
            alt={name}
            width={50}
            height={50}
            className={`object-contain transition-transform duration-300 ${
               showTooltip ? 'scale-110' : 'scale-100'
            } ${shouldInvert ? 'invert-100' : ''}`}
         />
         
         {/* Tooltip */}
         {showTooltip && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none">
               <div className="bg-foreground text-background px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-lg">
                  {name}
               </div>
               {/* Tooltip arrow */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground"></div>
            </div>
         )}
      </div>
   );
}
