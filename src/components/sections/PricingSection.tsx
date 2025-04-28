import { Check } from "lucide-react"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Stallion Basic",
      price: "₹ 2499",
      originalPrice: "₹3000",
      period: "/month",
      features: [
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "1 month",
      ctaText: "Join Classes",
      ctaLink: "#",
    },
    {
      name: "Stallion Pro",
      price: "₹ 4499",
      originalPrice: "₹7500",
      period: "/month",
      features: [
        "Free 1 month extension",
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "3 months",
      ctaText: "Go Pro",
      ctaLink: "#",
    },
    {
      name: "Stallion Elite",
      price: "₹ 7999",
      originalPrice: "₹9000",
      period: "/month",
      features: [
        "Free 1.5 month extension",
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "6 months",
      ctaText: "Go Elite",
      ctaLink: "#",
    },
    {
      name: "Stallion Legacy",
      price: "₹ 11499",
      originalPrice: "₹14630",
      period: "/month",
      features: [
        "Free 2 month extension",
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "12 months",
      ctaText: "Join Now",
      ctaLink: "#",
    },
  ]

  return (
    <section className="py-20 bg-[#262626] relative px-8">
      <div className="container mx-auto px-4 relative">
        <p className="text-2xl md:text-2xl uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded'] ">
          Invest in your strongest self
        </p>
        <p className="text-center text-gray-300 mb-16 font-['Degular'] tracking-wide ">No hidden fees. Cancel anytime. Results guaranteed</p>

        <div className="text-[150px] font-bold text-white uppercase text-center leading-none mb-8 tracking-wider font-['AkiraExpanded']">
          Pricing
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative -mt-20 z-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border border-white/20 bg-white/7  backdrop-blur-md rounded-lg overflow-hidden flex flex-col"
              style={{ aspectRatio: "319/641" }}
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                  <span className="text-gray-500 ml-2 line-through text-sm">{plan.originalPrice}</span>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5 my-3" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-white mb-6 text-2xl">
                  <span className="">Duration : </span>
                  {plan.duration}
                </div>

                <a
                  href={plan.ctaLink}
                  className="bg-[#e71b4b] text-white py-3 px-4 rounded text-center block hover:bg-opacity-90 transition"
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
