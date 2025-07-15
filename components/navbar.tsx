'use client';

import React from 'react';
import { motion } from 'framer-motion';

const navItems = ['Home', 'Projects', 'About', 'Contact'];

function Navbar() {
   return (
      <div
         className="px-8 py-3 rounded-full backdrop-blur-md border border-accent-foreground/20 shadow-lg flex gap-10"
      >
         {navItems.map((item, index) => (
            <motion.button
               key={item}
               className="relative text-accent-foreground/85 font-medium text-sm"
               whileHover={{
                  scale: 1.2,
                  transition: {
                     type: 'spring',
                     stiffness: 500,
                     damping: 15,
                  },
               }}
            >
               <span className="relative z-10 cursor-pointer">{item}</span>
               <motion.span
                  className="absolute inset-0 rounded-full bg-accent-foreground/20 blur-sm z-0"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{
                     type: 'spring',
                     stiffness: 400,
                     damping: 18,
                  }}
               />
            </motion.button>
         ))}
      </div>
   );
}

export default Navbar;
