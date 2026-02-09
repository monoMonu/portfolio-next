import React from 'react'
import Logo from './logo'
import Navbar from './navbar'
import ModeToggler from './mode-toggle'

function Header() {
   return (
      <div
         className="sticky w-full max-w-screen-lg top-5 z-50 px-6 flex gap-10 items-center justify-between mx-auto"
      >
         <Logo />
         <Navbar />
         <ModeToggler />
      </div>
   )
}

export default Header