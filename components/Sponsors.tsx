import Image from 'next/image'
import {FC}from 'react'

const Sponsors:FC =()=> {
  return (
    <div className='m-2 p-2'>
      <h1 className='underline text-xl text-center'>SPONSORS AND PARTNERS</h1>
      <main className='flex flex-col '>
        <section className='m-4 grid grid-cols-3 gap-8'>
      <div>
        <Image src="/large.png" alt="logo" width={80} height={20}/>
      </div>
      <div>
        <Image src="/large.png" alt="logo" width={80} height={20}/>
      </div>
      <div>
        <Image src="/large.png" alt="logo" width={80} height={20}/>
      </div>
        </section>

        <section className='m-3 grid grid-cols-4 gap-2'>
        <Image src="/largem.png" alt="logo" width={80} height={20}/>
        <Image src="/largem.png" alt="logo" width={80} height={20}/>
        <Image src="/largem.png" alt="logo" width={80} height={20}/>
        <Image src="/largem.png" alt="logo" width={80} height={20}/>
        </section>

        <section  className='m-2 grid grid-cols-7 gap-4'>
        <Image src="/medium.png" alt="logo" width={80} height={20}/>
        <Image src="/medium.png" alt="logo" width={80} height={20}/>
        <Image src="/medium.png" alt="logo" width={80} height={20}/>
        <Image src="/medium.png" alt="logo" width={80} height={20}/>
        <Image src="/medium.png" alt="logo" width={80} height={20}/>
        <Image src="/medium.png" alt="logo" width={80} height={20}/>
        <Image src="/medium.png" alt="logo" width={80} height={20}/>
       
        </section>
        <section  className='grid grid-cols-8 gap-4'>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
        <Image src="/small.png" alt="logo" width={80} height={20}/>
       
            </section>
      </main>
    </div>
  )
}

export default Sponsors
