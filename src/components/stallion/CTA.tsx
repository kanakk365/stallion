import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ClassicCtaSection() {
  return (
    <section className="py-16 bg-[#f1f1f1]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-2xl font-bold uppercase tracking-wider text-black mb-4 font-['AkiraExpanded']">
            &ldquo; TO ENTER THE STAGE, VISIT STALLION CLASSIC &rdquo;
          </h2>

          <p className="text-gray-700 mb-10 font-[Degular] tracking-wider text-lg ">
            Stallion Classic operates on a dedicated platform for competitors. To register, view rules, or see prize
            details, visit our official competition website. This is where dreams become trophies.
          </p>

          <div className="flex justify-center">
            <Link
              href="https://stallionclassic.com"
              target="_blank"
              className="inline-flex items-center bg-[#e71b4b] text-white px-8 py-3 hover:bg-opacity-90 transition font-[Degular] tracking-wider text-lg "
            >
              GO TO STALLION CLASSIC WEBSITE <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="border-t-2 border-gray-300"></div>
      </div>
    </section>
  )
}
