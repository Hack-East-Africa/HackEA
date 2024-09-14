import Image from 'next/image'
import {FC} from 'react'

const Hero:FC = ()=> {
  return (
    <div>

<div >
   <div className='p-2 m-2 text-center'>
   <h1>Welcome to the first ever East Africa Hackathon</h1>
   </div>
   <div className='flex justify-center m-2 p-4 '>
   <Image className="rounded-xl absolute left-6 " src="/image1.jpg" alt="" width={150} height={150} />
    <Image className="rounded-xl relative z-10 top-[-16px]" src="/image2.jpg" alt="" width={210} height={200} />
    <Image className="rounded-xl absolute right-4  z-0" src="/image3.jpg" alt="" width={150} height={150} />
   </div>
  
</div>
<div className='flex justify-between m-2'>

<aside>
 <h1 className='text-2xl w-[150px]'>A hackathon
<span className='underline'> 
for
</span> teens,
by teens.</h1>
</aside>

<aside>
  <div>
<h1 className='underline text-xl'>Dates</h1>
<p>Feb xx to xx 2025</p>
  </div>
  <div>
<h1 className='underline text-xl'>Location</h1>
<p>@Blablabla University</p>
  </div>
</aside>
</div>
    </div>
  
  )
}

export default Hero
