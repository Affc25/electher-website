import React from "react"

const featuredLogos = [
  { name: "FORBES AFRICA", delay: 0.2 },
  { name: "CNBC AFRICA", delay: 0.3 },
  { name: "TechCrunch", delay: 0.4 },
  { name: "Ventures Africa", delay: 0.5 },
  { name: "Disrupt Africa", delay: 0.6 },
  { name: "Business Day", delay: 0.7 },
];


const FeaturesSection = () => {
  return (
    <section className="px-28 bg-white flex flex-col items-center py-20">
      <div className="max-w-3xl flex flex-col items-center mb-12">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">Featured In</h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">Media Recognition</h4>
        <p className="text-lg font-inter text-center text-[#1b1c23cc]">AFFC"s work has been recognized by leading media outlets across Africa and globally.</p>
      </div>
      <FeaturedInSection/>
    </section>
  )
}

const FeaturedInSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {featuredLogos.map((logo, idx) => (
        <div
          key={idx}
          className="w-32 h-12 flex items-center justify-center text-affc-gray/90 text-sm font-semibold animate-fade-in hover:text-affc-blue transition-all duration-300 border-b-2 border-transparent hover:border-affc-blue font-inter"
          style={{ animationDelay: `${logo.delay}s` }}
        >
          {logo.name}
        </div>
      ))}
    </div>
  );
}

export default FeaturesSection