"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "../ui/Logo"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 md:py-8">
      <div className="mx-auto px-4 md:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-white">
            <Link href="#" className="text-white hover:text-[#e71b4b] transition text-sm md:text-xl">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition text-sm md:text-xl">
              About
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition text-sm md:text-xl">
              Classes
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition text-sm md:text-xl">
              Training
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition text-sm md:text-xl">
              Pricing
            </Link>
            <Link href="#" className="text-white hover:text-[#e71b4b] transition text-sm md:text-xl">
              Contact
            </Link>
          </nav>

          {/* Contact Button - Desktop Only */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="bg-[#e71b4b] text-white px-6 py-3 hover:bg-opacity-90 transition md:text-xl"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 fixed inset-0 top-16 z-40 flex flex-col">
            <div className="flex flex-col items-center justify-center space-y-6 py-10">
              <Link 
                href="#" 
                className="text-white hover:text-[#e71b4b] transition text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#e71b4b] transition text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#e71b4b] transition text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Classes
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#e71b4b] transition text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Training
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#e71b4b] transition text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#e71b4b] transition text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  href="#"
                  className="bg-[#e71b4b] text-white px-6 py-2 hover:bg-opacity-90 transition text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
