import React, { ReactNode } from 'react'
import DataIcon from "@/public/svg/data_center_icon.svg";
import BookmarkIcon from "@/public/svg/bookmark_icon.svg"
import ResourceIcon from "@/public/svg/resource_library_icon.svg"


const fundingCardData = [
  {
    title: "Funding Tracker",
    icon: <BookmarkIcon className="w-8 h-8 text-affc-blue"/>,
    description: "Stay updated on latest deal flow",
    items: [
      "Grants and competitions",
      "Venture capital rounds",
      "Angel investor networks",
      "Accelerator programs"
    ],
    buttonText: "Explore Funding",
    buttonLink: "/resources" // assuming link for funding
  },
  {
    title: "Data Center",
    icon: <DataIcon className="w-8 h-8 text-affc-blue"/>,
    description: "Access valuable data insights and research",
    items: [
      "Market research reports",
      "Industry analyses",
      "Investment trends",
      "Policy insights"
    ],
    buttonText: "Access Data",
    buttonLink: "/data" // assuming link for data
  },
  {
    title: "Resource Library",
    icon: <ResourceIcon className="w-8 h-8 text-affc-blue"/>,
    description: "Practical tools and templates for your business",
    items: [
      "Business plan templates",
      "Pitch deck guides",
      "Financial modeling tools",
      "Legal document templates"
    ],
    buttonText: "Browse Resources",
    buttonLink: "/library" // assuming link for library
  }
]

const ResourcesSection = () => {
  return (
    <section className="px-6 md:px-28 flex flex-col items-center py-20 w-full">
      <div className="max-w-3xl flex flex-col items-center mb-12 text-center">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">
          Resources
        </h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          Tools for Female Founders
        </h4>
        <p className="text-lg font-inter text-[#1b1c23cc]">
          Comprehensive resources designed to support female entrepreneurs at every stage of their journey.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full">
        {
          fundingCardData.map((card, index) => (
            <FundingCard
              key={index}
              icon={card.icon}
              title={card.title}
              items={card.items}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              description={card.description}
            />
          ))  
        }
      </div>

    </section>
  )
}


type FundingCardProps = {
  title: string;
  icon: ReactNode,
  description: string;
  items: string[];
  buttonText: string;
  buttonLink: string;
};

const FundingCard: React.FC<FundingCardProps> = ({ 
  icon,
  title, 
  items,
  buttonLink,
  buttonText,
  description,
}) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground border-none shadow-md hover:shadow-lg transition-all animate-fade-in">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 bg-affc-blue/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h3 className="font-semibold tracking-tight text-xl text-center">{title}</h3>
        <p className="text-sm text-muted-foreground text-center">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <ul className="space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-affc-pink rounded-full mr-2"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center p-6 pt-0">
        <a className="w-full" href={buttonLink}>
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm w-full">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  )
}

export default ResourcesSection