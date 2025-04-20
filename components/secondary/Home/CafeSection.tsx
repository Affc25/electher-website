import React from "react"
import MicroPhoneIcon from "@/public/svg/microphone_icon.svg"

const podcasts = [
  {
    title: "Building FinTech Solutions for Underserved Markets",
    description:
      "Dara shares her journey of building a financial inclusion platform that provides accessible banking services to rural communities across West Africa.",
    guest: "Dara Akinwande, Founder of PayMate",
    date: "November 10, 2023",
    duration: "38 min",
  },
  {
    title: "Sustainable Agriculture and Food Security",
    description:
      "Amara discusses how her agritech company is revolutionizing sustainable farming practices and addressing food security challenges in East Africa.",
    guest: "Amara Kimani, CEO of GreenHarvest",
    date: "October 25, 2023",
    duration: "42 min",
  },
  {
    title: "Scaling an EdTech Platform Across Borders",
    description:
      "Samuel talks about his experience scaling an educational platform across multiple African countries while navigating regulatory hurdles.",
    guest: "Samuel Obasi, Founder of LearnSphere",
    date: "October 5, 2023",
    duration: "45 min",
  },
];

const CafeSection = () => {
  return (
    <section className="px-6 md:px-28 bg-[#f2e8cb4d] flex flex-col items-center py-20 w-full">
      <div className="max-w-3xl flex flex-col items-center mb-12 text-center">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">
          AFFC Café
        </h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          The African Female Founders Podcast
        </h4>
        <p className="text-lg font-inter text-[#1b1c23cc]">
          A curated storytelling space spotlighting African female founders. Each episode dives deep into the entrepreneurial journeys, challenges, milestones, and ecosystem dynamics shaping women&apos;s venture building across the continent.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcasts.map((podcast, index) => (
          <PodcastCard
            key={index}
            title={podcast.title}
            description={podcast.description}
            guest={podcast.guest}
            date={podcast.date}
            duration={podcast.duration}
          />
        ))}
      </div>
    </section>
  )
}

interface PodcastCardProps {
  title: string;
  description: string;
  guest: string;
  date: string;
  duration: string;
}

const PodcastCard = ({
  title,
  description,
  guest,
  date,
  duration,
}: PodcastCardProps) =>{
  return (
    <div className="rounded-lg border bg-card text-card-foreground bg-white border-none shadow-md hover:shadow-lg transition-all animate-fade-in">
      <div className="flex flex-col space-y-1.5 p-6 pb-0 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-affc-pink">
            <MicroPhoneIcon/>
            <span className="text-xs font-medium">AFFC Café</span>
          </div>
          <div className="text-xs text-foreground/60">
            {date} • {duration}
          </div>
        </div>
        <h3 className="tracking-tight text-lg font-semibold line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs">With {guest}</p>
      </div>
      <div className="p-6 py-3">
        <p className="text-sm text-foreground/80 line-clamp-3">{description}</p>
      </div>
      <div className="flex items-center p-6 pt-0">
        <button className="rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-3 py-1.5 text-sm w-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play mr-2"
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
          Listen Now
        </button>
      </div>
    </div>
  )
}

export default CafeSection