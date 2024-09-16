import Image from "next/image";

export default function Header() {
  return (
  <header >
     <nav className="flex justify-between gap-4">
      
      <Image src='/logo.svg' alt='Logo' width={80} height={80}  priority={true}
						object-fit="cover"
					/>
      <ul className="flex gap-2 md:gap-4 w-22">
        <li><a href="">About</a></li>
        <li><a href="">Schedule</a></li>
        <li><a href="">Donate</a></li>
      </ul>
    </nav>
  </header>
  )
}
