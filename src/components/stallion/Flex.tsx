import React from 'react'
import Image from "next/image"

function Flex() {
  const galleryImages = [
    {
      src: "/images/stallion/first.png",
      alt: "Bodybuilder front pose on competition stage",
    },
    {
      src: "/images/stallion/second.png",
      alt: "Bodybuilder double bicep pose with gold skin",
    },
    {
      src: "/images/stallion/third.png",
      alt: "Bodybuilder back double bicep pose with red lighting",
    },
    {
      src: "/images/stallion/fourth.png",
      alt: "Bodybuilder front double bicep pose with blue posing trunks",
    },
    {
      src: "/images/stallion/fifth.png",
      alt: "Bodybuilder side chest pose on competition stage",
    },
    {
      src: "/images/stallion/sixth.png",
      alt: "Bodybuilder victory pose with arms raised",
    },
  ]

  const stats = [
    { label: "EVENTS", value: "100+" },
    { label: "PARTICIPANTS", value: "1000+" },
    { label: "TEAM MEMBERS", value: "500+" },
    { label: "COLLABORATIONS", value: "50+" },
  ]

  return (
    <section className="py-10 bg-[#1a1a1a] relative px-8">
      <div className="container mx-auto px-4 py-6">
        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white/10 py-8 rounded-lg -mt-16 relative z-10 backdrop-blur-xl shadow-lg font-['AkiraExpanded'] " >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-lg uppercase tracking-wider mb-2">{stat.label}</div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flex