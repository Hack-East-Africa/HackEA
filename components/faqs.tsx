
"use client"

import { FC, useState } from "react";

interface FaqProp  {
    id: number,
    question: string,
    answer: string,  

}[];

interface DropdownProps {
 [key: number]: boolean,


}
const fqa:FaqProp[] = [
  {
    id: 1,
    question: "Whats a hackathon?",
    answer: `A hackathon is an invention marathon where students come together to build, learn and share. The
					project can be anything as long it solves a problem. Everyone will create their own project in teams
					of up to x and at the end each team presents its project. The best projects will get prizes, and
					there will be swag and food and drinks for everyone.`,  
   
  },
  {
    id: 2,
    question: "What if I don’t know how to code?",
     answer: "Everyone is welcomed since there will be workshops that introduces some to programming basic and much more.",  
   },
   {
    id: 3,
     question: "What should I do if my parents are concerned about this?",
     answer: "In the last two weeks before the hackathon we will host virtual meeting to meet with concerned parent but they can always shoot as an email at socials@hackeastafrica.org",  
   },
   {
    id: 4,
     question: "How old do I need to be to participate?",
     answer: "You need to be at least 16 for you to be able to travel and have an id on you.",  
   },
   {
    id: 5,
     question: "What are the themes?",
     answer: "TDB",  
   },
   {
    id: 6,
     question: "I have dietary restrictions what should I do?",
     answer: "Make sure to say this when registering so that we may know your case.",  
   },
  
   {
    id: 8,
     question: "How big can a team be?",
     answer: "TBD",  
   },
   {
    id: 9,
     question: "What are the prizes?",
     answer: "TBD",  
   },
   {
    id: 10,
     question: "I have more questions!",
     answer: "Any extra questions? No worries! Send them to us here socials@hackeastafrica.org",  
   },
   
]


const Faqs:FC = ()=> {
  const [isOpen, setOpen] = useState<DropdownProps>({})
  const toggleDropdown = (id:number) => {
   setOpen({
    ...isOpen,
    [id]: !isOpen[id],
   })


};





  return (
    <div>
        <h1 className="underline text-xl p-2  md:text-4xl text-center">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
        <div>
            {
              fqa.map((question)=> (
                <div className="md:text-xl" key={question.id}>
                <div className="flex " >
{
  !isOpen[question.id] ? (
    <svg className="m-2" width="10" height="10" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.8 3.85195C0.8 3.21862 1.08333 2.56862 1.65 1.90195C2.25 1.26862 2.98333 0.951953 3.85 0.951953C4.65 0.951953 5.21667 1.23529 5.55 1.80195L11.85 11.452L18.2 1.80195C18.5 1.23529 19.05 0.951953 19.85 0.951953C20.7167 0.951953 21.4333 1.26862 22 1.90195C22.6 2.56862 22.9 3.21862 22.9 3.85195C22.9 4.21862 22.8333 4.50195 22.7 4.70195L14.25 17.602C13.95 18.0686 13.5667 18.402 13.1 18.602C12.6333 18.8353 12.2167 18.952 11.85 18.952C11.4833 18.952 11.0667 18.8353 10.6 18.602C10.1333 18.402 9.75 18.0686 9.45 17.602L1.05 4.70195C0.883333 4.50195 0.8 4.21862 0.8 3.85195Z" fill="#464D5C"/>
</svg>
  ) : (
    <svg className="m-2" width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 19" fill="none">
<path d="M22.2 15.148C22.2 15.7814 21.9167 16.4314 21.35 17.098C20.75 17.7314 20.0167 18.048 19.15 18.048C18.35 18.048 17.7833 17.7647 17.45 17.198L11.15 7.54805L4.8 17.198C4.5 17.7647 3.95 18.048 3.15 18.048C2.28333 18.048 1.56667 17.7314 0.999999 17.098C0.399999 16.4314 0.0999987 15.7814 0.0999987 15.148C0.0999987 14.7814 0.166666 14.498 0.299999 14.298L8.75 1.39805C9.05 0.93138 9.43333 0.598046 9.9 0.398046C10.3667 0.164713 10.7833 0.0480459 11.15 0.0480459C11.5167 0.0480459 11.9333 0.164713 12.4 0.398046C12.8667 0.598046 13.25 0.93138 13.55 1.39805L21.95 14.298C22.1167 14.498 22.2 14.7814 22.2 15.148Z" fill="#464D5C"/>
</svg>
  )
}

                <p onClick={() => {
                  toggleDropdown(question.id)
                }}>{question.question}</p>
                </div>
               
                <div>
                    <p className={`text-[#B89068] p-2 ${!isOpen[question.id] ? "hidden" : 'visible'}`} >{question.answer}</p>
                </div>
            </div>

              ))
            }
        </div>
    </div>
  )
}

export default Faqs;
