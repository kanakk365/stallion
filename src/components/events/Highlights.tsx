import Image from "next/image"

export default function Highlights() {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white px-8 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-white mb-4 font-['AkiraExpanded'] mb-6 ">
          PAST EVENTS HIGHLIGHTS
        </h2>
            <div className="relative w-full ">
            <Image
              src="/images/events/vid.png"
              alt="Bodybuilder showing muscular back in gym"
              className="object-cover rounded-lg"
              width={1200}
              height={700}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
      </div>
    </section>
  )
}
