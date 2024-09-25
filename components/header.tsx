"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)

  const toggle = (action: boolean)=> {
         setOpen(action)
  }
  return (
  <header >
     <nav className="flex flex-row gap-4 justify-between">
      
      <Image src='/logo.svg' alt='Logo' width={80} height={80}  priority={true}
						object-fit="cover"
					/>

<div  className="md:hidden">
     <Image src='/burger.svg' alt='Burger' className={`${open ? "hidden" :"block" } `} width={20} height={20}  priority={true}
           object-fit="cover" onClick={()=>{toggle(true)}} />

     </div>
  
 
     <ul className={`${!open ? "hidden": "block"} md:gap-4 w-22 md:flex-row md:flex `}>
     <Image src='/x.svg' alt='x'  className={` ${!open ? "hidden" :"block" } md:hidden`} width={20} height={20}  priority={true}
           object-fit="cover"  onClick={()=>{toggle(false)}}/>

        <li><a href="">About</a></li>
        <li><a href="">Schedule</a></li>
        <li><Link href="https://hcb.hackclub.com/donations/start/hack-east-africa">Donate</Link></li>
      </ul>
    </nav>
  </header>
  )
}
