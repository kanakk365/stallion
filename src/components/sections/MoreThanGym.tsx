import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight } from "lucide-react"

export default function MoreThanGymSection() {
  return (
    <section className="py-10 bg-[#f4f4f4] px-8">
      <div className="container mx-auto px-4 py-10">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative"> 
              {/* Red vertical bars that touch the heading text */}
              <div className="absolute left-0 -top-54 h-[249px] w-16 flex space-x-2">
                <div className="bg-[#e71b4b] w-6 h-full"></div>
                <div className="bg-[#e71b4b] w-6 h-full"></div>
              </div>

              {/* Blue vertical bars at bottom */}
              <div className="absolute left-0 -bottom-54 h-[249px]  w-16 flex space-x-1">
                <div className="bg-[#0f4166] w-6 h-full"></div>
                <div className="bg-[#0f4166] w-6 h-full"></div>
              </div>

              <h2 className="text-4xl font-bold text-black uppercase tracking-wider mb-1 pt-8">More than a gym</h2>
              <h3 className="text-2xl font-bold text-black uppercase tracking-wider mb-6 text-outline">
                A home for champion
              </h3>

              <p className="text-gray-800 mb-8">
                Founded by Mr. Abhilash and, Stallion Xtreme Fitness began in 2018 as a 1,500 sq ft battleground in
                Gajularamaram - no AC, no chai breaks, just raw iron and relentless effort. Today, our six branches host
                10,000+ members who share one belief: comfort is the enemy of growth. This isn&apos;t a gym chain; it&apos;s a
                sweat-drenched proving ground where national powerlifters, corporate warriors, and future champions
                train side-by-side. Every rack, kettlebell, and battle rope is battle-tested to deliver one result:
                transformation. But what truly sets us apart isn&apos;t our 24/7 access or premium equipment - it&apos;s how we&apos;ve
                redefined fitness culture itself.
              </p>

             
            </div>
    
            <div className="relative">
              {/* Modern Z-shaped image layout */}
              
              <div className="relative h-[600px] w-full">
                                <div className="w-full h-full relative">
                  <Image
                    src="/images/about/two.png"
                    alt="Fitness training collage"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
