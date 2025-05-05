import React, { FC, useMemo } from 'react'
import WorldIcon from "@/public/svg/world_icon.svg"
import PeopleIcon from "@/public/svg/people_icon.svg"
import HandShakeIcon from "@/public/svg/handshake_icon.svg"
import CalendarIcon from "@/public/svg/calendar_icon.svg"
import {formatDateRange, formatDate} from '@/helpers/formatDate'

const eventData:EventItemPropsType[] = [
  {
    location: "Kigali, Rwanda",
    endDate: new Date(2024, 2, 15).toString(),
    startDate: new Date(2024, 2, 8).toString(),
    title: "AFFC Pavilion at Africa Tech Summit",
  },{
    location: "Kigali, Rwanda",
    endDate: new Date(2024, 2, 15).toString(),
    startDate: new Date(2024, 2, 8).toString(),
    title: "AFFC Pavilion at Africa Tech Summit",
  },{
    location: "Kigali, Rwanda",
    endDate: new Date(2024, 2, 15).toString(),
    startDate: new Date(2024, 2, 8).toString(),
    title: "AFFC Pavilion at Africa Tech Summit",
  }
]

const PavillonSection = () => {
  return (
    <section className="p-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <PavilionFeatures/>
        <PavillonEvent/>
      </div>
    </section>
  )
}


const features = [
  {
    title: "Strategic Matchmaking",
    description:
      "Targeted connections between investors and female founders based on sector, growth stage, and investment criteria.",
    icon: <HandShakeIcon className="size-6 text-affc-blue" />,
  },
  {
    title: "Exclusive Networking",
    description:
      "Access to high-value networks and decision-makers at global conferences and regional events.",
    icon: <PeopleIcon className="size-6 text-affc-blue" />,
  },
  {
    title: "Global Visibility",
    description:
      "Opportunities for female founders to showcase their ventures on international platforms.",
    icon: <WorldIcon className="size-6 text-affc-blue" />,
  },
];

const PavilionFeatures: FC = () => {
  return (
    <div className="animate-fade-in-left max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">
          AFFC Pavilion
        </h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          Where Influence Meets Opportunity
        </h4>
        <p className="text-lg font-inter text-[#1b1c23cc]">
          Designed for African funds and fund managers to connect with global investors
          and showcase their vision, the AFFC Pavilion is a dedicated space to drive
          meaningful engagement and foster impactful collaborations.
        </p>
      </div>
      <div className="grid gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="p-3 w-fit h-fit rounded-full bg-affc-blue/20">
              {feature.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
              <p className="mt-2 text-muted-foreground font-inter text-[#1B1D23CC]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type EventItemPropsType = {
  title: string,
  endDate: string,
  location: string,
  startDate: string,
}

const EventItem:FC<EventItemPropsType & {lastItem: boolean}> = ({
  title,
  endDate,
  lastItem,
  location,
  startDate
}) =>{
  const startDateObj = useMemo(()=>{
    return formatDate(startDate)
  },[startDate])

  const dateRange = useMemo(()=>{
    return formatDateRange(startDate, endDate)
  },[startDate, endDate])
  return (
    <div className={`flex gap-4 pb-4 ${lastItem ? "" : "border-b"} border-affc-gray/10`}>
      <div className="bg-affc-pink/10 p-3 rounded-lg text-affc-pink text-center min-w-[60px]">
        <div className="text-sm font-bold">{startDateObj?.month}</div>
        <div className="text-xl font-bold">{startDateObj?.day}</div>
      </div>
      <div>
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-foreground/70 mb-2">{location}</p>
        <div className="flex items-center gap-2 text-xs">
    
          <CalendarIcon className="text-affc-pink"/>          
          <span>{dateRange}</span>
        </div>
      </div>
    </div>
  )
}

const PavillonEvent = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:py-10 relative flex flex-col items-center z-10">
      <h4 className="text-xl font-semibold mb-6 text-center">Upcoming Pavilion Events</h4>
      <div className="space-y-6 w-full">
        {/* Event 1 */}
        {
          eventData.map((event, index, arr) => (
            <EventItem
              {...event}
              key={index}
              lastItem={index === arr.length - 1}
            />
          ))
        }

  
       
      </div>
      <button
          className="inline-flex mt-8 items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue self-center text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm w-fit"
        >
          View All Pavilion Events
        </button>
    </div>
  );
};



export default PavillonSection