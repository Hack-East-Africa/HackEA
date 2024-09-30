import {FC} from 'react'
import { TextEffect } from './core/TextEffect'
import Image from 'next/image'

const Hero:FC = ()=> {
  return (
    <section className='text-center '>

<div >
   <div className='p-2 m-2 '>
    <TextEffect per='word' as='h1' preset='fade' className='md:text-2xl'> 
    Welcome to the first ever East Africa Hackathon
    </TextEffect>
  
   </div>
   <div className='flex justify-center m-2 p-4 md:hidden'>
   <Image className="rounded-xl absolute left-6" src="/image1.jpg" alt="" width={150} height={150} />
    <Image className="rounded-xl relative z-10 top-[-16px] " src="/image2.jpg" alt="" width={210} height={200} />
    <Image className="rounded-xl absolute right-4  z-0 "  src="/image3.jpg" alt="" width={150} height={150} />
   </div>

<section className='hidden md:grid grid-cols-3  gap-2 md:ml-[180px] m-2'>
   <Image className="h-auto max-w-full rounded-lg  " src="/image1.jpg" alt="" width={750} height={750} />
    <Image className="h-auto max-w-full rounded-lg " src="/image2.jpg" alt="" width={410} height={400} />
    <div className='space-y-2 '>
    <Image className="h-auto max-w-full rounded-lg "  src="/image3.jpg" alt="" width={150} height={150} />
    <Image className="h-auto max-w-full rounded-lg "  src="/image5.jpg" alt="" width={150} height={150} />
    </div>
    
   
   </section>

 
  
</div>
<div className=' md:flex md:justify-around'>
<div>
 <h1 className='text-2xl md:text-4xl md:w-[240px] md:overflow-hidden '>A hackathon <br />
<span className='underline'> 
for
</span> teens,
by teens.</h1>
</div>

<aside>
  <div>
<h1 className='underline text-xl md:text-2xl'>Dates</h1>
<p>Aug 2025</p>
  </div>
  <div>
<h1 className='underline text-xl md:text-2xl'>Location</h1>
<p>@Blablabla University</p>
  </div>
</aside>
</div>
    </section>
  
  )
}

export default Hero
