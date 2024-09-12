import Image from "next/image";

export default function Header() {
  return (
  <header >
     <nav className="flex justify-between">
      <Image src='/logo.svg' alt='Logo' width={80} height={80} quality={100} priority={true}/>
      <ul className="flex gap-4 text-center">
        <li><a href="">About</a></li>
        <li><a href="">Schedule</a></li>
        <li><a href="">Donate</a></li>
      </ul>
    </nav>
  </header>
  )
}
