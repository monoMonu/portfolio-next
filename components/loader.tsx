"use client"

import { Transition } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

export default function Loader() {
   const [order, setOrder] = useState(initialOrder)

   useEffect(() => {
      const timeout = setTimeout(() => setOrder(shuffle(order)), 500);
      return () => clearTimeout(timeout)
   }, [order])

   return (
      <section 
         className="w-screen h-screen fixed top-0 left-0 grid place-items-center bg-background"
      >
         <ul className="list-none p-0 m-0 flex flex-wrap gap-2 w-[150px] justify-center items-center relative">
            {order.map((backgroundColor) => (
               <motion.li
                  key={backgroundColor}
                  layout
                  transition={spring}
                  className="w-[50px] h-[50px] rounded-lg"
                  style={{ backgroundColor }}
               />
            ))}
         </ul>
      </section>
   )
}

const initialOrder = [
   "#ff0088",
   "#dd00ee",
   "#9911ff",
   "#0d63f8",
]

function shuffle([...array]: string[]) {
   return array.sort(() => Math.random() - 0.5)
}

const spring: Transition = {
   type: "spring",
   damping: 20,
   stiffness: 300,
}
