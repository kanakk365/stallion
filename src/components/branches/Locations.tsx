"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"

export default function Locations() {
  const locations = [
    {
      id: "ironpumping",
      name: "STALLION IRONPUMPING",
      description:
        "Where it all began in 2018. This no-frills warehouse-style gym houses championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Home to our first 500 members.",
      image: "/images/branches/first.png",
      address: "123 Iron Road, Gajularamaram, Hyderabad",
      phone: "+91 79999 12345",
      email: "stallion@extreme.com",
    },
    {
      id: "apex",
      name: "STALLION APEX",
      description:
        "Where it all began in 2018. This no-frills warehouse-style gym houses championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Home to our first 500 members.",
      image: "/images/branches/second.png",
      address: "123 Iron Road, Gajularamaram, Hyderabad",
      phone: "+91 79999 12345",
      email: "stallion@extreme.com",
    },
    {
      id: "fortress",
      name: "STALLION FORTRESS",
      description:
        "Where it all began in 2018. This no-frills warehouse-style gym houses championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Home to our first 500 members.",
      image: "/images/branches/third.png",
      address: "123 Iron Road, Gajularamaram, Hyderabad",
      phone: "+91 79999 12345",
      email: "stallion@extreme.com",
    },
    {
      id: "elite",
      name: "STALLION COLOSSEUM",
      description:
        "Where it all began in 2018. This no-frills warehouse-style gym houses championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Home to our first 500 members.",
      image: "/images/branches/fourth.png",
      address: "123 Iron Road, Gajularamaram, Hyderabad",
      phone: "+91 79999 12345",
      email: "stallion@extreme.com",
    },
    {
      id: "powerhouse",
      name: "STALLION TITAN",
      description:
        "Where it all began in 2018. This no-frills warehouse-style gym houses championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Home to our first 500 members.",
      image: "/images/branches/fifth.png",
      address: "123 Iron Road, Gajularamaram, Hyderabad",
      phone: "+91 79999 12345",
      email: "stallion@extreme.com",
    },
    {
      id: "stronghold",
      name: "STALLION PROVING GROUNDS",
      description:
        "Where it all began in 2018. This no-frills warehouse-style gym houses championship powerlifting platforms, Atlas stones, and the original 'Wall of Shame' for unracked weights. Home to our first 500 members.",
      image: "/images/branches/sixth.png",
      address: "123 Iron Road, Gajularamaram, Hyderabad",
      phone: "+91 79999 12345",
      email: "stallion@extreme.com",
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-white px-2 sm:px-8">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="font-['AkiraExpanded'] text-2xl sm:text-3xl font-bold uppercase tracking-wider text-center text-black mb-2 sm:mb-4">
            YOUR STALLION FORTRESS AWAITS
          </h2>
          <p className="text-center text-gray-700 mb-8 sm:mb-16 font-['Degular'] tracking-wider text-lg sm:text-xl">Locations built for warriors, not weekend gym-goers</p>
        </ScrollAnimation>

        <div className="space-y-4 sm:space-y-6">
          {locations.map((location, index) => (
            <ScrollAnimation key={location.id} delay={0.15 * index}>
              <HoverCard className="relative overflow-hidden rounded-md">
                <div className="relative h-[350px] sm:h-[400px]">
                  <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/60"></div>

                  <div className="absolute inset-0 p-4 sm:p-8 flex flex-col">
                    <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">{location.name}</h3>
                    <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 max-w-2xl">{location.description}</p>

                    <div className="mt-auto">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                        <div>
                          <div className="text-sm sm:text-base text-white mb-1">{location.address}</div>
                          <div className="text-sm sm:text-base text-white mb-1">{location.phone}</div>
                          <div className="text-sm sm:text-base text-white">{location.email}</div>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-4">
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href={`/locations/${location.id}`}
                              className="px-4 sm:px-6 py-2 text-sm sm:text-base border border-white/50 text-white hover:bg-white/10 transition flex items-center"
                            >
                              View More
                            </Link>
                          </motion.div>
                          
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href={`/join/${location.id}`}
                              className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#e71b4b] text-white flex items-center hover:bg-opacity-90 transition"
                            >
                              Join Now <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
