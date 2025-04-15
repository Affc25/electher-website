import React, { FC } from 'react'

const analyticsData: AnalyticsCardPropsType[] = [
  {
    value: "2.7%",
    title: "VC Funding",
    description: "of VC funding in Africa goes to female-only founding teams",
  },
  {
    value: "$1.7B+",
    title: "Funding Gap",
    description: "Annual funding gap for women entrepreneurs in Sub-Saharan Africa",
  },
  {
    value: "26%",
    title: "Business Ownership",
    description: "of businesses in Africa are owned by women",
  },
  {
    value: "$316B",
    title: "Economic Potential",
    description: "Potential GDP boost by closing the gender gap in African entrepreneurship",
  },
];


const AnalyticsSection = () => {
  return (
    <section className="px-28 bg-[#f5f5f54d] flex flex-col items-center py-20">
      <div className="max-w-3xl flex flex-col items-center mb-12">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">Numbers in Perspective</h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">The African Female Founder Landscape</h4>
        <p className="text-lg font-inter text-center text-[#1b1c23cc]">Compelling statistics that underscore the urgency and value of AFFC&apos;s work across the continent.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {
            analyticsData.map(item=>{
              return (
                <AnalyticsCard key={item.title} {...item}/>
              )
            })
          }
      </div>
    </section>
  )
}


type AnalyticsCardPropsType = {
  value: string,
  title: string,
  description: string 
}

const AnalyticsCard:FC<AnalyticsCardPropsType> = ({
  value,
  title,
  description
}) => {
  return (
    <div
      className="rounded-lg p-6 bg-card text-card-foreground font-inter border-none shadow-md hover:shadow-lg transition-all animate-fade-in"
    >
      <h2 className="text-3xl md:text-4xl text-brand font-bold text-center mb-4">{value}</h2>
      <h4 className="text-lg font-semibold text-center text-affc-gray mb-1">{title}</h4>
      <p className="text-sm text-[#1b1d23b2] text-center">{description}</p>
    </div>

    
  )
}

export default AnalyticsSection