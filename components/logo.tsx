import { Cloud } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

function Logo() {
   return (
      <Link 
         href='/'
         // className='rounded-full border border-accent-foreground p-2'
         className='text-accent-foreground/85'
      >
         <Cloud size={24} />
      </Link>
   )
}

export default Logo;