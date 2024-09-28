import {FC}from 'react'
import Card from './ui/cards'

const Schedule:FC =()=> {
  return (
    <div id='schedule'>
        <h1 className='underline text-center text-2xl p-2 md:text-3xl'>SCHEDULE</h1>
<h1 className='text-center'>N.B: This schedule is not official, it is subjected to change in future but it offers a grimpse of how the event is going to be looking like.</h1>
        <div className='flex flex-col'>
           <Card >
    <h2 className='underline text-lg'>Day One</h2>
<div>
    <ul className='columns-2'>
        <li>8:00 AM – 9:00 AM: Registration & Welcome Breakfast</li> 
        <li>9:00 AM – 9:30 AM: Opening Ceremony & Welcome Address</li>
        <li>9:30 AM – 10:00 AM: Keynote Speech #1</li>
        <li>10:00 AM – 10:30 AM: Introduction to Hackathon Theme </li>
        <li>10:30 AM – 11:00 AM: Team Formation & Icebreaker Session</li>
        <li>11:00 AM – 12:30 PM: Brainstorming & Ideation Session</li>
        <li>12:30 PM – 1:30 PM: Lunch Break</li>
        <li>1:30 PM – 2:00 PM: Keynote Speech #2</li>
        <li>2:00 PM – 4:00 PM: Hacking Begins - Coding Session #1</li>
        <li>4:00 PM – 4:30 PM: Coffee Break</li>
        <li>4:30 PM – 6:00 PM: Continue Hacking - Coding Session #2</li>
        <li>6:00 PM – 7:00 PM: Dinner & Networking</li>
        <li>7:00 PM – 8:00 PM: Evening Activity: Fireside Chat with Industry Leaders</li>
        <li>8:00 PM: End of Day 1</li>
    </ul>
</div>
          </Card>

          <Card >
    <h2 className='underline text-lg'>Day Two</h2>
<div>
    <ul className='columns-2'>
    <li>7:30 AM – 8:30 AM: Breakfast & Networking</li> 
        <li>8:30 AM – 9:00 AM: Daily Briefing & Inspirational Talk</li>
        <li>9:00 AM – 12:30 PM: Hacking Continues - Coding Session #3</li>
        <li>12:30 PM – 1:30 PM: Lunch Break</li>
        <li>1:30 PM – 2:00 PM: Technical Workshop #1</li>
        <li>2:00 PM – 4:00 PM: Hacking Continues - Coding Session #4</li>
        <li>4:00 PM – 4:30 PM: Coffee Break</li>
        <li>4:30 PM – 5:00 PM: Technical Workshop #2</li>
        <li>5:00 PM – 6:30 PM: Hacking Session #5 & Pitch Practice</li>
        <li>6:30 PM – 7:00 PM: Checkpoint Meeting with Judges/Mentors</li>
        <li>7:00 PM – 8:00 PM: Dinner & Networking</li>
        <li>8:00 PM – 10:00 PM: Optional Night Hack Session</li>
        <li>10:00 PM: End of Day 2</li>
    </ul>
</div>
          </Card>

          <Card >
    <h2 className='underline text-lg'>Day Three</h2>
<div>
    <ul className='columns-2'>
    <li>7:30 AM – 8:30 AM: Breakfast & Networking</li> 
        <li>8:30 AM – 9:00 AM: Daily Briefing: Final Preparation for Presentations</li>
        <li>9:00 AM – 12:00 PM: Final Presentations & Demos</li>
        <li>12:00 PM – 12:30 PM: Judging Deliberation</li>
        <li>12:30 PM – 1:30 PM: Lunch Break</li>
        <li>1:30 PM – 2:00 PM: Panel Discussion</li>
        <li>2:00 PM – 2:30 PM: Award Ceremony</li>
        <li>2:30 PM – 3:00 PM: Closing Remarks & Photo Session</li>
        <li>3:00 PM – 5:00 PM: Farewell & Departure</li>
    </ul>
</div>
          </Card>
       
            
        </div>
    </div>
  )
}

export default Schedule