'use client';

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-provider';

function ModeToggler() {
   const { theme, setTheme } = useTheme();

   return (
      <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ type: 'spring', stiffness: 500, damping: 18 }}
      >
         <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative cursor-pointer text-accent-foreground/85"
         >
            {theme === 'dark' ? (
               <Moon className="size-6" />
            ) : (
               <Sun className="size-6" />
            )}
         </button>
      </motion.div>
   );
}

export default ModeToggler;
