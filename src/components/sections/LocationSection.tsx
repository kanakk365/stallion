import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LocationsSection() {
  const locations = [
    {
      name: "Downtown",
      description: "Where the city's strongest train.",
      image: "/images/location/first.png",
    },
    {
      name: "Downtown",
      description: "Where the city's strongest train.",
      image: "/images/location/second.png",
    },
    {
      name: "Downtown",
      description: "Where the city's strongest train.",
      image: "/images/location/third.png",
    },
    {
      name: "Downtown",
      description: "Where the city's strongest train.",
      image: "/images/location/fourth.png",
    },
    {
      name: "Downtown",
      description: "Where the city's strongest train.",
      image: "/images/location/fifth.png",
    },
    {
      name: "Downtown",
      description: "Where the city's strongest train.",
      image: "/images/location/sixth.png",
    },
  ]

  return (
    <section className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center text-black mb-3">
          Find your stallion home
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Six top-tier facilities across the city – same uncompromising standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="relative overflow-hidden group aspect-[418/532]">
              <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{location.name}</h3>
                <p className="text-gray-200 text-sm mb-4">{location.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center bg-[#e71b4b] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                >
                  Know More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
