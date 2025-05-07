import { FounderCard, FounderCardFilter } from '@/components/secondary/FounderMonitor';
import React, { useState } from 'react'

const founders= [
  {
    name: "Amina Ibrahim",
    company: "EcoSolutions",
    location: "Kenya, East Africa",
    foundedYear: 2018,
    description:
      "EcoSolutions provides sustainable waste management technology for urban communities across East Africa.",
    imageSrc: "/images/founders/amina-ibrahim.jpg",
    tags: ["CleanTech"],
    fundingStage: "Series A",
    fundingAmount: 2.5,
    profileLink: "/founders/amina-ibrahim",
  },
  {
    name: "Fatima Diallo",
    company: "HealthConnect",
    location: "Senegal, West Africa",
    foundedYear: 2020,
    description:
      "HealthConnect improves healthcare access in rural communities through telemedicine and mobile health solutions.",
    imageSrc: "/images/founders/fatima-diallo.jpg",
    tags: ["HealthTech"],
    fundingStage: "Seed",
    fundingAmount: 1.2,
    profileLink: "/founders/fatima-diallo",
  },
  {
    name: "Nala Mensah",
    company: "FinPay",
    location: "Ghana, West Africa",
    foundedYear: 2017,
    description:
      "FinPay is revolutionizing digital payments and financial services for the unbanked across West Africa.",
    imageSrc: "/images/founders/nala-mensah.jpg",
    tags: ["FinTech"],
    fundingStage: "Series A",
    fundingAmount: 4,
    profileLink: "/founders/nala-mensah",
  },
  {
    name: "Mariam Ahmed",
    company: "AgriSmart",
    location: "Tanzania, East Africa",
    foundedYear: 2019,
    description:
      "AgriSmart leverages technology to improve agricultural productivity and connect farmers to markets.",
    imageSrc: "/images/founders/mariam-ahmed.jpg",
    tags: ["AgriTech"],
    fundingStage: "Seed",
    fundingAmount: 1.8,
    profileLink: "/founders/mariam-ahmed",
  },
  {
    name: "Thandi Moyo",
    company: "Retail Express",
    location: "South Africa, Southern Africa",
    foundedYear: 2015,
    description:
      "Retail Express is building the digital infrastructure for retail businesses across Africa.",
    imageSrc: "/images/founders/thandi-moyo.jpg",
    tags: ["E-commerce"],
    fundingStage: "Series B",
    fundingAmount: 5.2,
    profileLink: "/founders/thandi-moyo",
  },
];


const FounderMonitor = () => {
  const [, setRegion] = useState("");
  // const [region, setRegion] = useState("");
  // const [industry, setIndustry] = useState("");
  const [, setIndustry] = useState("");
  const [searchText, setSearchText] = useState("");
  // const [yearFounded, setYearFounded] = useState("");
  const [, setYearFounded] = useState("");
  // const [fundingStage, setFundingStage] = useState("");
  const [fundingAmount, setFundingAmount] = useState([0]);
  return (
    <div className="pt-6 md:px-28 px-6 bg-affc-offwhite pb-10">
      <section className="px-6 md:px-28  flex flex-col items-center py-20 w-full">
       <h1 className="text-4xl md:text-5xl font-bold text-center w-[682px] md:w-full">
          <span className="text-[#2c3539]">
            African {" "}
          </span>
          <span className="text-brand">
          Female Founders {""}
          </span>
          <span className="text-[#2c3539]">
           Monitor
          </span>
        </h1>
        <div className="h-[2px] w-28 bg-[rgb(214_135_177)] my-8"/>
        <p className="text-lg font-inter text-center text-[#1b1c23cc]">A comprehensive directory of female founders and their ventures across Africa, providing visibility and insights into the growing ecosystem of women-led businesses.</p>
      </section>
      <section>
        <AnalyticsTabs/>
      </section>
      <section>
        <FounderCardFilter 
          fundingAmount={fundingAmount}
          searchText={searchText}
          setRegion={(item)=> setRegion(()=> item)} 
          setIndustry={(item) => setIndustry(()=>item)}
          setSearchText={(text)=> setSearchText(()=>text)} 
          setYearFounded={(year)=>setYearFounded(()=>year)}        
          setFundingAmount={(value)=>setFundingAmount(()=>value)}
          industries={["FinTech", "HealthTech", "EdTech", "CleanTech", "AgriTech", "E-Commerce"]}
          regions={["All Regions", "West Africa", "East Africa", "North Africa", "Southern Africa", "Central Africa"]}
          yearFounded={["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "Before 2018"]} 
        />
      </section>
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {
            founders.map((founder, index) => (<FounderCard key={index} {...founder}/>))
          }
        </div>
      </section>
      <section>
        <div className="bg-affc-blue/10 p-8 md:p-12 rounded-lg text-center font-inter">
          <h2 className="text-2xl font-semibold mb-4 font-playfair-display">Submit a Founder Profile</h2>
          <p className="mb-6 max-w-2xl mx-auto">Are you a female founder based in Africa, or do you know one? Help us build the most comprehensive directory by submitting a profile.</p>
          <a href="/founder-monitor-landing">
            <button  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-6 py-3 text-lg">
              Submit a Profile
            </button>
          </a>
        </div>
      </section>
     
    </div>
  )
}

const AnalyticsTabs = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 font-inter">
      <div className="rounded-lg bg-white border  text-card-foreground border-none shadow-md">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="text-3xl font-bold text-affc-blue mb-1">500+</div>
          <p className="text-sm text-foreground/70">Female Founders</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white text-card-foreground border-none shadow-md">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="text-3xl font-bold text-affc-pink mb-1">36</div>
          <p className="text-sm text-foreground/70">African Countries</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white text-card-foreground border-none shadow-md">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="text-3xl font-bold text-affc-green mb-1">20+</div>
          <p className="text-sm text-foreground/70">Industries</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white text-card-foreground border-none shadow-md">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="text-3xl font-bold text-affc-blue mb-1">$300M+</div>
          <p className="text-sm text-foreground/70">Total Funding Raised</p>
        </div>
      </div>
    </div>

  )
}
export default FounderMonitor