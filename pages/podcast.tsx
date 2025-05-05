import React from 'react'
import { FeaturedPodcast, PodcastCard, PodcastSubscribeSection } from '@/components/secondary/Podcast'

const podcastEpisodes = [
  {
    title: "Building FinTech Solutions for Underserved Markets",
    subtitle: "With Dara Akinwande, Founder of PayMate",
    description:
      "Dara shares her journey of building a financial inclusion platform that provides accessible banking services to rural communities across West Africa.",
    duration: "38 min",
    date: "November 10, 2023",
    source: "AFFC Café"
  },
  {
    title: "Sustainable Agriculture and Food Security",
    subtitle: "With Amara Kimani, CEO of GreenHarvest",
    description:
      "Amara discusses how her agritech company is revolutionizing sustainable farming practices and addressing food security challenges in East Africa.",
    duration: "42 min",
    date: "October 25, 2023",
    source: "AFFC Café"
  },
  {
    title: "Scaling an EdTech Platform Across Borders",
    subtitle: "With Zainab Okoye, Founder of LearnAfrica",
    description:
      "Zainab reveals the strategies that helped her expand her education technology platform from Nigeria to five other African countries.",
    duration: "45 min",
    date: "October 5, 2023",
    source: "AFFC Café"
  },
  {
    title: "Venture Capital in Africa: A Female Founder's Perspective",
    subtitle: "With Dr. Ola Orekunrin, Founder of Flying Doctors Nigeria",
    description:
      "Dr. Orekunrin shares her experience navigating the venture capital landscape in Africa and offers advice for female founders seeking investment.",
    duration: "49 min",
    date: "September 22, 2023",
    source: "AFFC Café"
  },
  {
    title: "Breaking Barriers in Tech: Women in STEM",
    subtitle: "With Fatou Ndiaye, CTO of TechBridge",
    description:
      "Fatou discusses the challenges and opportunities for women in STEM fields and how her organization is creating pathways for more female participation in technology.",
    duration: "41 min",
    date: "September 8, 2023",
    source: "AFFC Café"
  },
  {
    title: "Building Sustainable Fashion Brands",
    subtitle: "With Aisha Mohammed, Founder of EcoStitch",
    description:
      "Aisha shares how she built an ethical and sustainable fashion brand that celebrates African craftsmanship while meeting global market demands.",
    duration: "36 min",
    date: "August 25, 2023",
    source: "AFFC Café"
  }
];


const Podcast = () => {
  return (
    <div className="pt-6 md:px-28 px-6 bg-affc-cream/30">
      <section className="px-6 md:px-28  flex flex-col items-center py-20 w-full">
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
    </section>
    <section className="mb-20">
      <h2 className="text-lg font-bold pb-3 mb-8">Feature Episode</h2>
      <FeaturedPodcast
         imageUrl="/lovable-uploads/251291bd-c5c7-4df8-b72d-aece5d5d34cd.png"
         title="Reimagining Africa's Economic Future Through Women-Led Ventures"
         subtitle="With Dr. Ngozi Okonjo-Iweala, Director-General of WTO"
         description="In this special episode, we host Dr. Ngozi Okonjo-Iweala who shares insights on how female-led businesses are reshaping Africa's economic landscape and what policy changes can accelerate this transformation."
         podcastName="AFFC Café"
         duration="52 min"
         date="January 15, 2024"
      />
    </section>
    <section>
      <h2 className="text-lg font-bold pb-3 mb-8">Recent Episodes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcastEpisodes.map((episode, index) => (
          <PodcastCard key={index} {...episode}/>
        ))}
      </div>
    </section>
    <section className="pb-8">
      <PodcastSubscribeSection/>
    </section>
   </div>
  )
}

export default Podcast