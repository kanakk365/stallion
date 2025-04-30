import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "../layout/Header";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with bodybuilder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/events/hero.png"
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
        <h1 className="font-['AkiraExpanded'] text-2xl sm:text-5xl md:text-7xl lg:text-5xl font-extrabold uppercase tracking-wider mb-4 leading-tight">
          BATTLEGROUNDS DON&apos;T
          <br />
          BUILD THEMSELVES
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 font-['Degular']">
          Monthly competitions Pro-led workshops Community crushers
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            href="#"
            className="bg-[#e71b4b] text-white px-6 sm:px-8 py-2 flex items-center hover:bg-opacity-90 transition text-sm sm:text-base"
          >
            Join now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          <Link
            href="#"
            className="border border-white text-white px-6 sm:px-8 py-2 hover:bg-white/10 transition text-sm sm:text-base"
          >
            Explore now
          </Link>
        </div>
      </div>
    </section>
  );
}
