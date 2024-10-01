import Image from 'next/image'
import {FC}from 'react'

const Sponsors:FC =()=> {
  return (
    <div className=''>
      <h1 className='underline text-2xl p-2 md:text-3xl text-center'>SPONSORS AND PARTNERS</h1>
      <main className='flex flex-col mx-auto'>
        <section className='mx-auto grid grid-cols-3 gap-3'>
     
        </section>

        
        <section className='m-3 mx-auto grid grid-cols-4 gap-2'>
  
        </section>

        <section  className=' m-2 mx-auto grid grid-cols-7 gap-4'>
   
       
        </section>
        <section  className='mx-auto grid grid-cols-8 gap-4'>
        <Image src="/bronze/wolfram.png" alt="logo" width={80} height={20}/>
        <Image src="/bronze/inspector.png" alt="logo" width={80} height={20}/>
   
       
            </section>
      </main>
    </div>
  )
}

export default Sponsors
