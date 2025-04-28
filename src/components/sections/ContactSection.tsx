import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-black relative px-6 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[600px] overflow-hidden h-full">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/contact/reversed.png"
                alt="Athlete doing handstand on kettlebells"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Semi-transparent overlay with blur */}
            <div className="absolute inset-0 bg-black/20 z-10" style={{ backdropFilter: "blur(2px)" }}></div>

            {/* Text content */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-center items-start">
              <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-white leading-tight mb-6">
                GOT QUESTIONS
                <br />
                WE&apos;VE GOT
                <br />
                ANSWERS.
              </h2>
              <p className="text-gray-300 mb-6">Fill out the form, and our team will hit you back within 24 hours.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-md" style={{ minHeight: '700px' }}>
            <form className="space-y-10 h-full flex flex-col justify-between">
              <div className="space-y-10 flex-grow">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="FULL NAME"
                    className="w-full text-black px-0 py-3 border-0 border-b border-black focus:outline-none focus:border-black placeholder-black"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <input
                      type="email"
                      id="email"
                      placeholder="EMAIL"
                      className="w-full text-black px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-black placeholder-black"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="PHONE NO."
                      className="w-full text-black px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-black placeholder-black"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <select
                      id="subject"
                      defaultValue=""
                      className="w-full text-black px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-black appearance-none bg-transparent placeholder-black"
                    >
                      <option value="" disabled>SUBJECT</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="training">Personal Training</option>
                      <option value="facilities">Facilities</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="MESSAGE"
                    className="w-full text-black px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-black resize-none placeholder-black"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="bg-[#e71b4b] text-white px-6 py-3 rounded-none flex items-center hover:bg-opacity-90 transition"
                >
                  SUBMIT <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
