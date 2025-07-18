import React from 'react'

function Footer() {
   return (
      <footer className="py-4 px-4 bg-secondary/50 border-t">
         <div className="max-w-screen-xl mx-auto text-center flex items-center justify-center gap-2">
            {/* <Logo className='min-w-7 min-h-7 text-sm' /> */}

            <p className="text-muted-foreground text-sm">
               Created with ❤️ by Monu
            </p>
         </div>
      </footer>
   )
}

export default Footer
