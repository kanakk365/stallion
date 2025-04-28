import Link from "next/link"
import Logo from "../ui/Logo"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between py-6 px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-white hover:text-[#e71b4b] transition">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-[#e71b4b] transition">
            About us
          </Link>
          <Link href="#" className="text-white hover:text-[#e71b4b] transition">
            Events
          </Link>
          <Link href="#" className="text-white hover:text-[#e71b4b] transition">
            Branches
          </Link>
          <Link href="#" className="text-white hover:text-[#e71b4b] transition">
            Stallion classic
          </Link>
        </nav>
        <Link href="#" className="bg-[#e71b4b] text-white px-6 py-2 hover:bg-opacity-90 transition">
          Contact us
        </Link>
      </div>
    </header>
  )
}
