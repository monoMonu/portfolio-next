'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-provider';

function ModeToggler() {
   const { resolvedTheme, setTheme } = useTheme();

   return (
      <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ type: 'spring', stiffness: 500, damping: 18 }}
      >
         <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="relative cursor-pointer text-accent-foreground/85"
         >
            {resolvedTheme && resolvedTheme === 'dark' ? (
               <Moon className="size-6" />
            ) : (
               <Sun className="size-6" />
            )}
         </button>
      </motion.div>
   );
}

export default ModeToggler;
