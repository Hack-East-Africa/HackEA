import { FC } from "react";

interface FaqProp  {};
const Faqs:FC<FaqProp> = ()=> {
  return (
    <div>
        <h1 className="underline text-xl p-2  md:text-4xl">FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
        <div>
            <div className="md:text-xl">
                <div className="flex" >
<svg className="m-2" width="10" height="10" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.8 3.85195C0.8 3.21862 1.08333 2.56862 1.65 1.90195C2.25 1.26862 2.98333 0.951953 3.85 0.951953C4.65 0.951953 5.21667 1.23529 5.55 1.80195L11.85 11.452L18.2 1.80195C18.5 1.23529 19.05 0.951953 19.85 0.951953C20.7167 0.951953 21.4333 1.26862 22 1.90195C22.6 2.56862 22.9 3.21862 22.9 3.85195C22.9 4.21862 22.8333 4.50195 22.7 4.70195L14.25 17.602C13.95 18.0686 13.5667 18.402 13.1 18.602C12.6333 18.8353 12.2167 18.952 11.85 18.952C11.4833 18.952 11.0667 18.8353 10.6 18.602C10.1333 18.402 9.75 18.0686 9.45 17.602L1.05 4.70195C0.883333 4.50195 0.8 4.21862 0.8 3.85195Z" fill="#464D5C"/>
</svg>

                <p>Whats a hackathon?</p>
                </div>
               
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs;
