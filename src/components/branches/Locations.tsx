import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    <section className="py-20 bg-white px-8 ">
      <div className="container mx-auto px-4">
        <h2 className=" font-['AkiraExpanded'] text-3xl md:text-3xl font-bold uppercase tracking-wider text-center text-black mb-4">
          YOUR STALLION FORTRESS AWAITS
        </h2>
        <p className="text-center text-gray-700 mb-16 font-['Degular'] tracking-wider text-xl">Locations built for warriors, not weekend gym-goers</p>

        <div className="space-y-6">
          {locations.map((location) => (
            <div key={location.id} className="relative overflow-hidden rounded-md">
              <div className="relative h-[300px] md:h-[400px]">
                <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute inset-0 p-8 flex flex-col">
                  <h3 className="text-3xl font-bold text-white mb-4">{location.name}</h3>
                  <p className="text-gray-200 mb-6 max-w-2xl">{location.description}</p>

                  <div className="mt-auto">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white mb-1">{location.address}</div>
                        <div className="text-white mb-1">{location.phone}</div>
                        <div className="text-white">{location.email}</div>
                      </div>

                      <div className="flex space-x-4">
                        <Link
                          href={`/locations/${location.id}`}
                          className="px-6 py-2 border border-white/50 text-white hover:bg-white/10 transition"
                        >
                          View More
                        </Link>
                        <Link
                          href={`/join/${location.id}`}
                          className="px-6 py-2 bg-[#e71b4b] text-white flex items-center hover:bg-opacity-90 transition"
                        >
                          Join Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
