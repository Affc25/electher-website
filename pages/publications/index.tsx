import { InsightCard, ReportCard } from '@/components/secondary/Publications'
import React from 'react'

const reports = [
  {
    type: "Report",
    date: "November 2023",
    title: "The State of Female Entrepreneurship in Africa 2023",
    author: "AFFC Research Team",
    description:
      "A comprehensive analysis of the challenges and opportunities facing female entrepreneurs across the African continent, with data-driven insights and recommendations.",
    imageSrc: "/images/header_img.png",
  },
  {
    type: "Report",
    date: "September 2023",
    title: "Funding Gaps and Growth Pathways for Women-Led Startups",
    author: "Dr. Amina Osei & AFFC Research Team",
    description:
      "This report examines the systemic barriers to funding for female founders and proposes concrete strategies to close the gender funding gap in Africa's startup ecosystem.",
    imageSrc: "/images/header_img.png",
  },
  {
    type: "Report",
    date: "July 2023",
    title: "Tech Innovation and Gender: Breaking Barriers in Africa's Digital Economy",
    author: "AFFC in partnership with TechInnovate Africa",
    description:
      "An in-depth look at how female founders are driving innovation in Africa's tech sector despite persistent gender bias and limited access to resources.",
    imageSrc: "/images/header_img.png",
  },
];

export const insights = [
  {
    type: "Insight",
    date: "December 2023",
    title: "Five Key Trends Shaping Female Entrepreneurship in 2024",
    author: "Fatima Diallo, AFFC Strategy Lead",
    description:
      "A forward-looking analysis of emerging trends that will impact women-led businesses across Africa in the coming year.",
    onRead: () => console.log("Read: Five Key Trends Shaping Female Entrepreneurship in 2024"),
  },
  {
    type: "Insight",
    date: "October 2023",
    title: "From Seed to Series A: A Founder's Journey",
    author: "Nala Okonkwo, Founder & CEO of HealthTech Solutions",
    description:
      "A candid account of one female founder's experience navigating the challenging path from initial funding to significant investment rounds.",
    onRead: () => console.log("Read: From Seed to Series A"),
  },
  {
    type: "Insight",
    date: "August 2023",
    title: "Building Resilient Supply Chains: Lessons from Women-Led Agribusinesses",
    author: "Grace Mwangi, AFFC Agriculture Sector Advisor",
    description:
      "Key insights and strategies from successful female agripreneurs who have built robust supply chain models despite regional challenges.",
    onRead: () => console.log("Read: Building Resilient Supply Chains"),
  },
  {
    type: "Insight",
    date: "June 2023",
    title: "The Role of Mentorship in Scaling Female-Led Ventures",
    author: "Sophia Mensah, AFFC Network Development Lead",
    description:
      "How strategic mentorship relationships can accelerate growth and open doors for women entrepreneurs in Africa's competitive business landscape.",
    onRead: () => console.log("Read: The Role of Mentorship"),
  },
];



const Publications = () => {
  return (
    <div className="mt-6 md:px-28 px-6">
       <section className="px-6 md:px-28  flex flex-col items-center py-20 w-full">
        <div className="max-w-3xl flex flex-col items-center mb-12 text-center">
          <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">
            Publications
          </h3>
          <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          Research & Insights
          </h4>
          <p className="text-lg font-inter text-[#1b1c23cc]">
            Explore our collection of reports, research papers, and insights that provide valuable data and perspectives on female entrepreneurship across Africa.
          </p>
        </div>
      </section>
      <section className="mb-20 flex flex-col">
        <h2 className="text-lg font-bold pb-3 border-b border-b-affc-blue/20 mb-8">Reports</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reports.map((report, index) => (
          <ReportCard
            key={index}
            type={report.type}
            date={report.date}
            imageSrc={report.imageSrc}
            title={report.title}
            author={report.author}
            description={report.description}
            onDownload={() => console.log("Downloading PDF...")}
          />
        ))}
        </div>
        <button 
          className="inline-flex mt-10 w-fit font-inter items-center self-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-4 py-2 text-base">
            Browse All Reports
        </button>
      </section>
      
      <section className="mb-20 flex flex-col">
        <h2 className="text-lg font-bold pb-3 border-b border-b-affc-blue/20 mb-8">Insights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((report, index) => (
          <InsightCard
            key={index}
            {...report}
          />
        ))}
        </div>
        <button 
          className="inline-flex mt-10 w-fit font-inter items-center self-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-4 py-2 text-base">
            Read More Insights
        </button>
      </section>
    </div>
  )
}

export default Publications