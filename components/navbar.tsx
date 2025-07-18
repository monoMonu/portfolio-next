'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
   // { path: '#home', label: 'Home' },
   { path: '#projects', label: 'Projects' },
   { path: '#experience', label: 'Experience' },
   { path: '#contact', label: 'Contact' }
];

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="relative">
         {/* Desktop */}
         <div className="hidden md:flex px-8 py-3 rounded-full backdrop-blur-md border border-accent-foreground/20 shadow-lg gap-10 justify-center">
            {navItems.map((item, i) => (
               <motion.button
                  key={i}
                  className="relative text-accent-foreground/85 font-medium text-sm"
                  whileHover={{
                     scale: 1.2,
                     transition: {
                        type: 'spring',
                        stiffness: 500,
                        damping: 15
                     }
                  }}
               >
                  <Link href={item.path} className="relative z-10 cursor-pointer">
                     {item.label}
                  </Link>
                  <motion.span
                     className="absolute inset-0 rounded-full bg-accent-foreground/20 blur-sm z-0"
                     initial={{ scale: 0 }}
                     whileHover={{ scale: 1 }}
                     transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 18
                     }}
                  />
               </motion.button>
            ))}
         </div>

         {/* hamburger */}
         <div className="md:hidden flex justify-center">
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="p-2 rounded-full backdrop-blur-md border border-accent-foreground/20 shadow-md cursor-pointer"
            >
               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
         </div>

         {/* Mobile dropdown */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 w-[250px] bg-background rounded-xl shadow-xl overflow-hidden border border-accent-foreground/10 backdrop-blur-md z-50"
               >
                  <div className="flex flex-col items-center gap-4 px-6 py-6">
                     {navItems.map((item, i) => (
                        <motion.button
                           key={i}
                           onClick={() => setIsOpen(false)}
                           className="relative text-accent-foreground font-medium text-sm"
                           whileTap={{ scale: 0.95 }}
                        >
                           <Link href={item.path}>{item.label}</Link>
                        </motion.button>
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}

export default Navbar;
