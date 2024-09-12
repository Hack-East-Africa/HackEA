import {FC}from 'react'
import Card from './ui/cards'

const Schedule:FC =()=> {
  return (
    <div>
        <h1 className='underline text-center text-xl'>SCHEDULE</h1>

        <div className='flex flex-col'>
           <Card >
    <h2 className='underline text-lg'>Day One</h2>
<div>
    <ul className='h-[140px] columns-2'>
        <li>9:00am</li>
        <li>10:00am</li>
        <li>11:00am</li>
        <li>12:00pm</li>
        <li>1:00pm</li>
        <li>2:00pm</li>
        <li>3:00pm</li>
        <li>4:00pm </li>
    </ul>
</div>
          </Card>

          <Card >
    <h2 className='underline text-lg'>Day One</h2>
<div>
    <ul className='h-[140px] columns-2'>
        <li>9:00am</li>
        <li>10:00am</li>
        <li>11:00am</li>
        <li>12:00pm</li>
        <li>1:00pm</li>
        <li>2:00pm</li>
        <li>3:00pm</li>
        <li>4:00pm </li>
    </ul>
</div>
          </Card>

          <Card >
    <h2 className='underline text-lg'>Day One</h2>
<div>
    <ul className='h-[140px] columns-2'>
        <li>9:00am</li>
        <li>10:00am</li>
        <li>11:00am</li>
        <li>12:00pm</li>
        <li>1:00pm</li>
        <li>2:00pm</li>
        <li>3:00pm</li>
        <li>4:00pm </li>
    </ul>
</div>
          </Card>
       
            
        </div>
    </div>
  )
}

export default Schedule