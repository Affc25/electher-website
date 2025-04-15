import { Button } from '@/components/ui';
import React, { FC, ReactNode } from 'react'
import WebIcon from "@/public/svg/world_icon.svg"
import PeopleIcon from "@/public/svg/people_icon.svg"
import ScalingIcon from "@/public/svg/scaling_icon.svg"

const missionData: MissionItem[] = [
  {
    icon: <PeopleIcon className="text-brand"/>,
    title: "Community & Networking",
    description: "Join a community of like-minded female entrepreneurs, investors, and industry experts across the African continent.",
  },
  {
    icon: <PeopleIcon className="text-brand"/>,
    title: "Powerful Network",
    description: "Join a community of like-minded female entrepreneurs, investors, and industry experts across the African continent.",
  },
  {
    icon: <ScalingIcon className="text-brand"/>,
    title: "Scaling Support",
    description: "Access resources, tools, and knowledge to scale your business, enter new markets, and increase your impact.",
  },
  {
    icon: <WebIcon className="text-brand"/>,
    title: "Pan-African Reach",
    description: "Our initiatives span across multiple countries, supporting female founders from diverse regions and backgrounds throughout Africa.",
  },
];


const MissionSection = () => {
  return (
    <section className="px-28 bg-white flex flex-col items-center py-20">
      <div className="max-w-3xl flex flex-col items-center mb-12">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">Our Mission</h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">Empowering Africa&apos;s Female Entrepreneurs</h4>
        <p className="text-lg font-inter text-center mb-8 text-[#1b1c23cc]">AFFC is dedicated to closing the gender funding gap in Africa by providing female founders with the resources, networks, and opportunities they need to build scalable and investable ventures.</p>
        <Button variant="outline" className="px-5 text-lg h-13 font-inter font-semibold">Learn More About Us</Button>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {
            missionData.map(item=>{
              return (
                <MissionCard key={item.title} {...item}/>
              )
            })
          }
      </div>
    </section>
  )
}


type MissionItem = {
  title: string,
  icon: ReactNode,
  description: string 
}

const MissionCard:FC<MissionItem> = ({
  icon,
  title,
  description
}) => {
  return (
    <div
      className="rounded-lg flex flex-col items-center p-8 bg-card text-card-foreground  border-none shadow-md hover:shadow-lg transition-all animate-fade-in"
    >
      <div className=" bg-brand/10 rounded-full p-6 font-bold text-center mb-4">{icon}</div>
      <h4 className="text-lg font-semibold text-center text-affc-gray mb-4">{title}</h4>
      <p className="text-sm text-[#1b1d23b2] text-center font-inter">{description}</p>
    </div>

    
  )
}

export default MissionSection