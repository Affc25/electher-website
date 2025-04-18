import { Button } from "@/components/ui";
import React, { FC } from "react"


const publicationsData = [
  {
    imageUrl: "/placeholder.svg", // You can replace this with the actual image
    badgeText: "Report",
    title: "The State of Female Entrepreneurship in Africa 2023",
    date: "November 2023",
    description:
      "A comprehensive analysis of the current landscape, challenges, and opportunities for female entrepreneurs across the African continent.",
    buttonText: "Read More",
  },
  {
    imageUrl: "/placeholder.svg",
    badgeText: "Insight",
    title: "Funding the Future: Investment Trends for Women-Led Startups",
    date: "October 2023",
    description:
      "Exploring the latest investment trends, funding sources, and strategies for women-led businesses seeking to scale their operations.",
    buttonText: "Read More",
  },
  {
    imageUrl: "/placeholder.svg",
    badgeText: "Case Study",
    title: "Breaking Barriers: Success Stories from the AFFC Network",
    date: "September 2023",
    description:
      "Inspiring stories of female founders who have successfully navigated challenges to build thriving businesses across different sectors.",
    buttonText: "Read More",
  },
];

const ReportsSection = () => {
  return (
    <section className="px-6 md:px-28 flex flex-col items-center py-20 w-full">
      <div className="max-w-3xl flex flex-col items-center mb-12 text-center">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">
          Insights & Reports
        </h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          Latest AFFC Publications
        </h4>
        <p className="text-lg font-inter text-[#1b1c23cc]">
          In-depth industry analyses and thought leadership shaping the future of female entrepreneurship in Africa.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full">
        {
          publicationsData.map((card, index) => (
            <PublicationCard
              key={index}
              {...card}
            />
          ))  
        }
      </div>
      <Button className="bg-affc-pink border-affc-pink px-5 text-lg h-13 font-inter font-semibold mt-10">Explore All Publications</Button>
    </section>
  )
}

type PublicationCardProps = {
  imageUrl: string;
  badgeText: string;
  title: string;
  date: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
};

const PublicationCard: FC<PublicationCardProps> = ({
  imageUrl,
  badgeText,
  title,
  date,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground overflow-hidden border-none shadow-md hover:shadow-lg transition-all animate-fade-in">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-affc-blue/20 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute top-4 left-4 bg-affc-pink text-white text-xs px-2 py-1 rounded z-20">
          {badgeText}
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col space-y-1.5 p-6 pb-0">
        <h3 className="tracking-tight text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-xs">{date}</p>
      </div>

      {/* Content */}
      <div className="p-6 py-3">
        <p className="text-sm text-foreground/80 line-clamp-3">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center p-6 pt-0">
        <button
          onClick={onButtonClick}
          className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm w-full"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default ReportsSection