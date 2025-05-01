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
    <header className="absolute top-0 left-0 right-0 z-50 py-4 mt-2 md:py-4">
      <div className="mx-auto px-3 md:px-8">
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
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-white">
            <Link href="/" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base">
              Home
            </Link>
            <Link href="/about-us" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base">
              About Us
            </Link>
            <Link href="/events" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base">
              Events
            </Link>
            <Link href="/branches" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base">
              Branches
            </Link>
            <Link href="/stallions" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base">
              Stallion Classic
            </Link>
          </nav>

          {/* Contact Button - Desktop Only */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#e71b4b] text-white px-4 py-2 hover:bg-opacity-90 transition md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 fixed inset-0 top-14 z-40 flex flex-col">
            <div className="flex flex-col items-center justify-center space-y-4 py-6">
              <Link 
                href="/" 
                className="text-white hover:text-[#e71b4b] transition text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about-us" 
                className="text-white hover:text-[#e71b4b] transition text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/events" 
                className="text-white hover:text-[#e71b4b] transition text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/branches" 
                className="text-white hover:text-[#e71b4b] transition text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Branches
              </Link>
              <Link 
                href="/stallions" 
                className="text-white hover:text-[#e71b4b] transition text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stallion Classic
              </Link>
              
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="bg-[#e71b4b] text-white px-4 py-1.5 hover:bg-opacity-90 transition text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
