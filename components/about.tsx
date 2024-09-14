import {FC} from 'react'
import Card from './ui/cards'
import Link from 'next/link'

const About =()=> {
  return (
    <div>
              <h1 className='underline text-center text-xl'>ABOUT</h1>
              <p className='text-sm '>HackNBO is a 3-day, in-person hackathon for high-schoolers. </p>
              <div  className='flex flex-col'>
              <div className='grid grid-cols-auto gap-2 mx-auto '>
              <Card>
          
<div className='m-2'>
<p>It’s 100% free, really! We want everyone to have the chance to participate so there’s no registration fees and we cover food</p>
</div>
          </Card>

          <Card>
           
<div className='m-2'>
<p>HackNBO is beginner friendly, so you’re welcome to join even with no prior coding experience. </p>
</div>
          </Card>

          <Card>
              
<div className='m-2'>
<p>Over KES XXX,XXX worth of prizes to be awarded to students like YOU!</p>
</div>
          </Card>
              </div>

              <button className='bg-[#464D5C] text-[#F7DDA4] rounded-lg w-[200px] h-[40px] mx-auto '>
            <Link href={''} >REGISTER NOW!</Link>
            </button>
              </div>
            

         
         
               </div>
  )
}

export default About
