import { FC } from "react"


const Footer:FC =()=> {
  return (
    <footer className="flex flex-col">
        <section className="text-center mx-auto">
 <h1 className="underline text-2xl p-2 md:text-3xl">DONATE</h1>
 <div className="md:text-2xl ">
 <p >Donations and sponsorships help run this event and keep it free and fun for everyone!</p>
 <p>You can donate to us through <span className="underline">here</span> or <span className="underline">check this out</span> for information on sponsorships.</p>
 <p>For transparency, we keep our <span className="underline">budget public</span>  so you can see what your help is letting us do!</p>
 </div>

        </section>
    <section>
            <p className=" text-[#B89068] text-center py-2">HackEastAfrica is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</p>
            </section>
    </footer>
  )
}

export default Footer