import {FC} from 'react'
import { TextEffect } from './core/TextEffect'

const Hero:FC = ()=> {
  return (
    <div>

<div >
   <div className='p-2 m-2 text-center'>
    <TextEffect per='word' as='h1' preset='fade' className='md:text-2xl'> 
    Welcome to the first ever East Africa Hackathon
    </TextEffect>
  
   </div>
   {/* <div className='flex justify-center m-2 p-4 '>
   <Image className="rounded-xl absolute left-6  md:w-[300px]" src="/image1.jpg" alt="" width={150} height={150} />
    <Image className="rounded-xl relative z-10 top-[-16px]" src="/image2.jpg" alt="" width={210} height={200} />
    <Image className="rounded-xl absolute right-4  z-0" src="/image3.jpg" alt="" width={150} height={150} />
   </div>
   */}
</div>
<div className='flex justify-between m-2 md:justify-around'>

<div>
 <h1 className='text-2xl w-[150px]  md:text-4xl md:w-[240px] md:overflow-hidden '>A hackathon <br />
<span className='underline'> 
for
</span> teens,
by teens.</h1>
</div>

<aside>
  <div>
<h1 className='underline text-xl md:text-2xl'>Dates</h1>
<p>Feb xx to xx 2025</p>
  </div>
  <div>
<h1 className='underline text-xl md:text-2xl'>Location</h1>
<p>@Blablabla University</p>
  </div>
</aside>
</div>
    </div>
  
  )
}

export default Hero
