import React from 'react'
import Logo from './logo'
import Navbar from './navbar'
import ModeToggler from './mode-toggle'

function Header() {
   return (
      <div
         className="fixed w-full max-w-screen-xl left-1/2 -translate-x-1/2 top-5 z-50 px-6 flex gap-10 items-center justify-between"
      >
         <Logo />
         <Navbar />
         <ModeToggler />
      </div>
   )
}

export default Header