import {FC} from 'react'
import Card from './ui/cards'
import Link from 'next/link'

const About:FC =()=> {
  return (
    <div id="about">
              <h1 className='underline text-2xl p-2 md:text-3xl text-center'>ABOUT</h1>
              <p className='text-sm text-center md:text-xl'>HackEA is a 3-day, in-person hackathon for high-schoolers. </p>
              <div  className='flex flex-col'>
              <div className='grid grid-cols-auto gap-2 mx-auto md:grid-cols-3 '>
              <Card style="md:w-[240px]">
          
<div className='m-2'>
<p>It’s 100% free, really! We want everyone to have the chance to participate so there’s no registration fees and we cover food</p>
</div>
          </Card>

          <Card style="md:w-[240px]">
           
<div className='m-2'>
<p>HackEA is beginner friendly, so you’re welcome to join even with no prior coding experience. </p>
</div>
          </Card>

          <Card style="md:w-[240px]">
              
<div className='m-2'>
<p>Over KES XXX,XXX worth of prizes to be awarded to students like YOU!</p>
</div>
          </Card>
              </div>

              <button className='bg-[#464D5C] text-[#F7DDA4] rounded-lg w-[200px] h-[40px] mx-auto '>
            <Link href={'https://forms.fillout.com/t/kD192Ntng1us' } target="_blank" >REGISTER NOW!</Link>
            </button>
              </div>
            

         
         
               </div>
  )
}

export default About
