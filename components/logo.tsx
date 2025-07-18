import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
  className?: string
}

function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'text-accent-foreground text-xl border border-accent-foreground rounded-full min-w-10 min-h-10 flex items-center justify-center backdrop-blur-md',
        className
      )}
    >
      <span>M</span>
    </Link>
  )
}

export default Logo
