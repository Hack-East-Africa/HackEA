import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
  <header >
     <nav className="flex flex-row text-center justify-center gap-4 md:justify-between  ">
      
      <Image src='/logo.svg' alt='Logo' width={80} height={80}  priority={true}
						object-fit="cover"
					/>
      <ul className="flex flex-col gap-2 md:gap-4 w-22 md:flex-row">
        <li><a href="">About</a></li>
        <li><a href="">Schedule</a></li>
        <li><Link href="https://hcb.hackclub.com/donations/start/hack-east-africa">Donate</Link></li>
      </ul>
    </nav>
  </header>
  )
}
