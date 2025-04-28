import Link from "next/link"
import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#262626] py-16 px-7">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-white">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2 mb-6">
              <p>123 Ironclad Way, Fitness City,</p>
              <p>PO 10001</p>
              <p>(555) 789-4500</p>
              <p>info@stallionxtremefitness.com</p>
            </address>
            <div className="flex space-x-6 mt-4">
              <Link href="#" className="text-white hover:text-[#e71b4b] transition">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#e71b4b] transition">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#e71b4b] transition">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* WE ARE OPEN */}
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-white">We are open</h3>
            <div className="text-gray-300 space-y-4">
              <div>
                <p className="font-medium">Monday - Saturday</p>
                <p>05:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p>05:00 AM - 11:00 AM</p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-white">Menu</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="#" className="hover:text-[#e71b4b] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e71b4b] transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e71b4b] transition">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#e71b4b] transition">
                  Branches
                </Link>
              </li>
            </ul>
          </div>

          {/* SUBSCRIBE TO OUR NEWSLETTER */}
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 text-white">Subscribe to our newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full px-4 py-3 bg-[#333333] border border-[#444444] text-white rounded focus:outline-none focus:ring-1 focus:ring-[#e71b4b]"
              />
              <button
                type="submit"
                className="bg-[#e71b4b] text-white px-6 py-3 rounded flex items-center hover:bg-opacity-90 transition"
              >
                SUBSCRIBE <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/50 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Stallion Xtreme Fitness - All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}
