import Image from "next/image"
import Link from "next/link"

export default function EventsSection() {
  const events = [
    {
      id: "stallion-classic-1",
      title: "STALLION CLASSIC QUALIFIERS",
      description: "Hyderabad's rawest amateur bodybuilding stage",
      image: "/images/events/first.png",
      date: { month: "JUN", day: "15" },
      buttonText: "Apply to Compete",
      buttonLink: "#",
    },
    {
      id: "deadlift-workshop",
      title: "DEADLIFT WORKSHOP W/ NATIONAL CHAMP",
      description: "Fix form, add 20kg to your max in 2 hours",
      image: "/images/events/second.png",
      date: { month: "JUN", day: "15" },
      buttonText: "Apply to Compete",
      buttonLink: "#",
    },
    {
      id: "stallion-classic-2",
      title: "STALLION CLASSIC QUALIFIERS",
      description: "Hyderabad's rawest amateur bodybuilding stage",
      image: "/images/events/third.png",
      date: { month: "JUN", day: "15" },
      buttonText: "Apply to Compete",
      buttonLink: "#",
    },
  ]

  return (
    <section className="py-20 bg-white px-2 sm:px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-3xl font-bold uppercase tracking-wider text-center text-black mb-4 font-['AkiraExpanded'] ">
          UPCOMING EVENTS
        </h2>
        <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto font-['Degular'] tracking-wider">
          At Stallion Xtreme Fitness, we&apos;re not just building bodies — we&apos;re building lifestyles..
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="relative overflow-hidden group ">
              {/* Event Image */}
              <div className="relative h-[600px]">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-lg text-black p-0.5 w-12 text-center">
                  <div className="text-[10px] font-bold bg-black text-white py-0.5 rounded-t-lg">{event.date.month}</div>
                  <div className="text-xl font-bold py-0.5">{event.date.day}</div>
                  <div className="text-[8px] uppercase">WED</div>
                </div>

                {/* Event Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-2 font-['AkiraExpanded'] ">{event.title}</h3>
                  <p className="text-gray-200 mb-6 font-['Degular'] tracking-wider">{event.description}</p>
                  <Link
                    href={event.buttonLink}
                    className="block font-['Degular'] tracking-wider w-full bg-[#e71b4b] text-white py-3 text-center font-medium hover:bg-opacity-90 transition"
                  >
                    {event.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
