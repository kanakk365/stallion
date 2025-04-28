import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "../layout/Header"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with bodybuilder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.png"
          alt="Bodybuilder showing muscular back in gym"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wider mb-4 leading-tight">
          Unleash your inner
          <br />
          stallion
        </h1>
        <p className="text-xl md:text-2xl mb-10">Train Like an Athlete, Look Like a Champion</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="#"
            className="bg-[#e71b4b] text-white px-8 py-2  flex items-center hover:bg-opacity-90 transition"
          >
            Join now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="#" className="border border-white text-white px-8 py-2  hover:bg-white/10 transition">
            Explore now
          </Link>
        </div>
      </div>
    </section>
  )
}
