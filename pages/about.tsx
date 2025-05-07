import { PartnersGrid, ProfileCard } from '@/components/secondary/About';
import { profile } from 'console';
import React from 'react'
const teamMembers = [
  {
    imageSrc: "/lovable-uploads/amina.png",
    name: "Amina Suleiman",
    title: "Founder & Executive Director",
    description:
      "Amina is a serial entrepreneur with 15+ years of experience in the African tech ecosystem. She founded AFFC to address the gender funding gap she experienced firsthand.",
  },
  {
    imageSrc: "/lovable-uploads/nala.png",
    name: "Nala Okonkwo",
    title: "Chief Operating Officer",
    description:
      "Nala brings extensive experience in operations and strategic partnerships across African markets, having previously led initiatives at major tech accelerators.",
  },
  {
    imageSrc: "/lovable-uploads/chioma.png",
    name: "Chioma Nduka",
    title: "Head of Programs",
    description:
      "Chioma oversees all AFFC programs and initiatives, ensuring they deliver maximum impact for female founders across the continent.",
  },
  {
    imageSrc: "/lovable-uploads/sarah.png",
    name: "Sarah Mwangi",
    title: "Partnerships Director",
    description:
      "Sarah leads our engagement with investors, corporations, and ecosystem partners to create opportunities for female founders in our network.",
  },
];

const logos = [
  "/images/header_img.png",
  "/images/header_img.png",
  "/images/header_img.png",
  "/images/header_img.png",
  "/images/header_img.png"
];

const About = () => {
  return (
    <div className="pt-6 md:px-28 px-6 bg-affc-offwhite pb-10">
      <section className="px-6 md:px-28  flex flex-col items-center py-20 w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-center w-[682px] md:w-full">
          <span className="text-[#2c3539]">
            About {" "}
          </span>
          <span className="text-brand">
          AFFC
          </span>
        
        </h1>
        <div className="h-[2px] w-28 bg-[rgb(214_135_177)] my-8"/>
        <p className="text-lg font-inter text-center text-[#1b1c23cc]">The Africa Female Founders Collective (AFFC) was founded in 2020 with a mission to address the significant gender funding gap in Africa's entrepreneurial ecosystem. We work to empower female founders by providing them with the resources, networks, and opportunities they need to build scalable and investable ventures.</p>
      </section>
      <section>
        <div className="grid md:grid-cols-2 gap-12 mb-20 font-inter">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-affc-blue mb-4 font-playfair-display">Our Mission</h2>
            <p className="text-foreground/80 mb-4">
              To close the gender funding gap in Africa by empowering female founders with the resources, networks, and opportunities they need to build scalable and investable ventures.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-affc-pink mt-1">•</span>
                <span>Supporting early-stage female-led startups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-affc-pink mt-1">•</span>
                <span >Creating pathways to investment and funding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-affc-pink mt-1">•</span>
                <span>Building a supportive community of female entrepreneurs</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-affc-blue mb-4 font-playfair-display">Our Vision</h2>
            <p className="text-foreground/80 mb-4">An Africa where female entrepreneurs have equal access to funding, resources, and opportunities to build world-class companies that drive economic growth and social impact.</p>
            <p className="text-foreground/80">
              By 2030, we aim to support over 10,000 female founders across all 54 African countries, facilitating access to $500 million in funding, and helping create 100,000 jobs through female-led enterprises.
            </p>
          </div>
        </div>
      </section>
      <section>
        <AnalyticsTabs/>    
      </section>
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (<ProfileCard key={index} {...member}/>))}
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Partners</h2>
        <div className="w-full">
          <PartnersGrid logos={logos} />
        </div>
      </section>
      <section className="mb-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 font-inter">
            Join us in our mission to empower Africa&apos;s female entrepreneurs. There are many ways to get involved and support our work.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-inter">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-6 py-3 text-lg">
              Support Our Work
            </button>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-6 py-3 text-lg">
              Become a Partner
            </button>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-pink text-white hover:bg-affc-pink/90 active:scale-[0.98] px-6 py-3 text-lg">
              Join Our Network
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

const AnalyticsTabs = () => {
  return (
    <div className="mb-20 font-inter">
    <h2 className="text-3xl font-semibold text-center mb-12">Our Impact</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div className="bg-affc-blue/10 p-6 rounded-lg">
        <div className="text-4xl font-bold text-affc-blue mb-2">1,500+</div>
        <div className="text-sm text-foreground/80">Female Founders Supported</div>
      </div>
      <div className="bg-affc-pink/10 p-6 rounded-lg">
        <div className="text-4xl font-bold text-affc-pink mb-2">$25M+</div>
        <div className="text-sm text-foreground/80">Funding Facilitated</div>
      </div>
      <div className="bg-affc-blue/10 p-6 rounded-lg">
        <div className="text-4xl font-bold text-affc-blue mb-2">28</div>
        <div className="text-sm text-foreground/80">African Countries</div>
      </div>
      <div className="bg-affc-pink/10 p-6 rounded-lg">
        <div className="text-4xl font-bold text-affc-pink mb-2">12,000+</div>
        <div className="text-sm text-foreground/80">Jobs Created</div>
      </div>
    </div>
  </div>

  )
}

export default About