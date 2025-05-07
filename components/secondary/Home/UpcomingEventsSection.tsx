import React from 'react'
import CalenderIcon from "@/public/svg/calendar_icon.svg"
import { Button } from '@/components/ui';

export const eventsData = [
  {
    tag: "Networking",
    date: "December 15, 2023",
    title: "AFFC Pavilion: Investor-Founder Matchmaking",
    location: "Virtual",
    description:
      "Exclusive networking event connecting female founders with potential investors and mentors for targeted matchmaking and pitch opportunities.",
    delay: 0.4,
  },
  {
    tag: "Workshop",
    date: "January 20, 2024",
    title: "Scaling Beyond Borders: Expansion Strategies Workshop",
    location: "Nairobi, Kenya",
    description:
      "Deep dive into practical strategies for expanding African businesses into new markets. Learn from seasoned founders, legal experts, and venture capitalists.",
    delay: 0.5,
  },{
    tag: "Panel Discussion",
    date: "February 8, 2024",
    title: "AFFC Café Live: Resilience in Entrepreneurship",
    location: "Cape Town, South Africa",
    description:
      "A live recording of our popular podcast featuring a panel of successful female entrepreneurs",
    delay: 0.6,
  }
];


const UpcomingEventsSection = () => {
  return (
    <section className="px-28 bg-[#f5f5f54d] flex flex-col items-center py-20">
      <div className="max-w-3xl flex flex-col items-center mb-12">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">Upcoming Events</h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">AFFC Event Calendar</h4>
        <p className="text-lg font-inter text-center text-[#1b1c23cc]">Connect, learn, and grow with our curated events designed to support female founders across Africa.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
      <Button className="px-4 py-2 text-base bg-affc-pink border-affc-pink font-inter mt-8">View Full Calendar</Button>
    </section>
  )
}

interface EventCardProps {
  tag: string;
  date: string;
  title: string;
  location: string;
  description: string;
  delay?: number;
}

export function EventCard({
  tag,
  date,
  title,
  location,
  description,
  delay = 0,
}: EventCardProps) {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground font-inter border-none shadow-md hover:shadow-lg transition-all animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col space-y-1.5 p-6 pb-0">
        <div className="flex items-center justify-between mb-2">
          <div className="bg-affc-blue/10 text-affc-blue text-xs px-2 py-1 rounded">
            {tag}
          </div>
          <div className="flex items-center space-x-1 text-xs text-foreground/60">
            <CalenderIcon className="text-affc-blue" width={12} height={12}/>
            <span>{date}</span>
          </div>
        </div>
        <h3 className="tracking-tight text-lg font-semibold font-playfair-display line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs">{location}</p>
      </div>
      <div className="p-6 py-3">
        <p className="text-sm text-foreground/80 line-clamp-3">{description}</p>
      </div>
      <div className="flex items-center p-6 pt-0">
        <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm w-full">
          Learn More
        </button>
      </div>
    </div>
  );
}


export default UpcomingEventsSection