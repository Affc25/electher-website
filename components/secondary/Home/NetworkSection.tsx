import Image from 'next/image';
import React from 'react'

const founderUpdates = [
  {
    image: "/images/header_img.png",
    name: "Amina Ibrahim",
    company: "EcoTech Solutions",
    country: "Kenya",
    update: "Secured $1.2M in seed funding for expansion to Tanzania and Uganda.",
    category: "CleanTech",
    date: "March 28, 2025",
  },
  {
    image: "/images/header_img.png",
    name: "Fatima Nkosi",
    company: "HealthConnect",
    country: "South Africa",
    update: "Launched new telemedicine platform reaching 50,000 users in first month.",
    category: "HealthTech",
    date: "March 15, 2025",
  },
  {
    image: "/images/header_img.png",
    name: "Nadia Mensah",
    company: "AgroInnovate",
    country: "Ghana",
    update: "Partnership with government to deploy IoT solutions for 10,000 small-scale farmers.",
    category: "AgriTech",
    date: "March 15, 2025",
  },
];

const NetworkSection = () => {
  return (
    <section className="px-28 bg-white flex flex-col items-center py-20">
      <div className="max-w-3xl flex flex-col items-center mb-12">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">Our Network</h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">Africa Female Founder Monitor</h4>
        <p className="text-lg font-inter text-center text-[#1b1c23cc]">An interactive map highlighting female founders across the African continent, showcasing the growth and impact of women-led ventures in various regions and industries.</p>
        <a className="mt-8 font-inter " href="/founder-monitor-landing"
          ><button  className="text-affc-blue hover:text-affc-pink transition-colors underline font-medium cursor-pointer">Visit Founder Monitor</button>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="col-span-2 ">
          <MapSection />
        </div>
        <div className="col-span-1">
          <FounderSection />  
        </div>
      </div>
    </section>
  )
}

const MapSection = () => {
  return (
    <div className="relative w-full aspect-[2/1] bg-affc-cream/30 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-affc-cream/50 flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-affc-blue/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"></div>
      </div>

      <div className="absolute group" >
        <div className="flex items-center justify-center animate-fade-in">
          <div className="w-3 h-3 bg-affc-blue rounded-full transition-all duration-300 group-hover:transform group-hover:scale-150"></div>
          <div className="absolute w-6 h-6 bg-affc-blue/30 rounded-full -z-10 animate-ping opacity-50"></div>
        </div>
        <div className="absolute whitespace-nowrap text-sm font-medium bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md transition-all duration-300 transform -translate-x-1/2 -translate-y-full -mt-2 opacity-0 scale-95">
          Nigeria <span className="font-bold text-affc-pink">215</span>
        </div>
      </div>

      <div className="absolute group" >
        <div className="flex items-center justify-center animate-fade-in">
          <div className="w-3 h-3 bg-affc-blue rounded-full transition-all duration-300 group-hover:transform group-hover:scale-150"></div>
          <div className="absolute w-6 h-6 bg-affc-blue/30 rounded-full -z-10 animate-ping opacity-50"></div>
        </div>
        <div className="absolute whitespace-nowrap text-sm font-medium bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md transition-all duration-300 transform -translate-x-1/2 -translate-y-full -mt-2 opacity-0 scale-95">
          Kenya <span className="font-bold text-affc-pink">187</span>
        </div>
      </div>

      <div className="absolute group">
        <div className="flex items-center justify-center animate-fade-in">
          <div className="w-3 h-3 bg-affc-blue rounded-full transition-all duration-300 group-hover:transform group-hover:scale-150"></div>
          <div className="absolute w-6 h-6 bg-affc-blue/30 rounded-full -z-10 animate-ping opacity-50"></div>
        </div>
        <div className="absolute whitespace-nowrap text-sm font-medium bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md transition-all duration-300 transform -translate-x-1/2 -translate-y-full -mt-2 opacity-0 scale-95">
          South Africa <span className="font-bold text-affc-pink">203</span>
        </div>
      </div>

      <div className="absolute group">
        <div className="flex items-center justify-center animate-fade-in">
          <div className="w-3 h-3 bg-affc-blue rounded-full transition-all duration-300 group-hover:transform group-hover:scale-150"></div>
          <div className="absolute w-6 h-6 bg-affc-blue/30 rounded-full -z-10 animate-ping opacity-50"></div>
        </div>
        <div className="absolute whitespace-nowrap text-sm font-medium bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md transition-all duration-300 transform -translate-x-1/2 -translate-y-full -mt-2 opacity-0 scale-95">
        </div>
      </div>
    </div>

  )
}

const FounderSection = () => {  
  return (
    <div className="bg-affc-offwhite p-6 rounded-xl h-full">
      <h4 className="text-lg font-semibold mb-4 text-affc-gray">Latest Founder Updates</h4>

      <div className="space-y-5">
      {founderUpdates.map((founder, index) => (
        <FounderCard key={index} {...founder} />
      ))}
    </div>
    </div>
  )
}


type FounderCardProps = {
  image: string;
  name: string;
  company: string;
  country: string;
  update: string;
  category: string;
  date: string;
};

export const FounderCard = ({
  image,
  name,
  company,
  country,
  update,
  category,
  date,
}: FounderCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-sm font-inter">
    <div className="flex items-center gap-3 mb-3">
      <div className="size-12 relative">
        <Image fill src={image} alt={name} className="rounded-full object-cover" />
      </div>
      <div>
        <h5 className="font-medium text-affc-gray font-playfair-display">{name}</h5>
        <p className="text-xs text-affc-gray/70">{company} | {country}</p>
      </div>
    </div>
    <p className="text-sm text-affc-gray/90 mb-2">{update}</p>
    <div className="flex justify-between items-center text-xs text-affc-gray/60">
      <span>{category}</span>
      <span>{date}</span>
    </div>
  </div>
);


export default NetworkSection