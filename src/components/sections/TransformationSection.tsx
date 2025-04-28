import Image from "next/image"

export default function TransformationSection() {
  return (
    <section className="py-20 bg-[#262626] px-6 pb-30 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center text-white mb-3">
          Your transformation starts here
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Tailored programs for every fitness level—from first-timers to elite athletes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Program 1 - Stallion Strength */}
          <div className="relative overflow-hidden group aspect-[418/532]">
            <Image src="/images/transformation/strength.png" alt="Stallion Strength" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">Stallion Strength</h3>
              <p className="text-gray-200 text-sm">
                Build raw power with Olympic lifts, deadlifts, and our signature strength protocols
              </p>
            </div>
          </div>

          {/* Program 2 - HIIT Inferno */}
          <div className="relative overflow-hidden group aspect-[418/532]">
            <Image src="/images/transformation/inferno.png" alt="HIIT Inferno" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">HIIT Inferno</h3>
              <p className="text-gray-200 text-sm">
                Torch fat in 30 mins with battle ropes, sled pushes, and metabolic conditioning
              </p>
            </div>
          </div>

          {/* Program 3 - Functional Warrior */}
          <div className="relative overflow-hidden group aspect-[418/532]">
            <Image
              src="/images/transformation/warrior.png"
              alt="Functional Warrior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">Functional Warrior</h3>
              <p className="text-gray-200 text-sm">
                Train like an athlete—agility drills, sandbag work, and real-world mobility
              </p>
            </div>
          </div>

          {/* Program 4 - Boxing Conditioning */}
          <div className="relative overflow-hidden group aspect-[418/532]">
            <Image
              src="/images/transformation/boxing.png"
              alt="Boxing Conditioning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">Boxing Conditioning</h3>
              <p className="text-gray-200 text-sm">
                Combines heavy bag work, footwork drills, and fight-ready endurance training
              </p>
            </div>
          </div>

          {/* Program 5 - Mobility Mastery */}
          <div className="relative overflow-hidden group aspect-[418/532]">
            <Image src="/images/transformation/mobility.png" alt="Mobility Mastery" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">Mobility Mastery</h3>
              <p className="text-gray-200 text-sm">
                Recover smarter with guided stretching, yoga flows, and injury prevention
              </p>
            </div>
          </div>

          {/* Program 6 - Elite 1:1 Coaching */}
          <div className="relative overflow-hidden group aspect-[418/532]">
            <Image src="/images/transformation/coaching.png" alt="Elite 1:1 Coaching" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">Elite 1:1 Coaching</h3>
              <p className="text-gray-200 text-sm">
                Fully customized plans with your dedicated trainer (nutrition included)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
