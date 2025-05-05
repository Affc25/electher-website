import React from 'react'
import TodoIcon from "@/public/svg/todo_icon.svg"
import ChartIcon from "@/public/svg/chart_icon.svg"
import PeopleIcon from "@/public/svg/people_icon.svg"
import CommentIcon from "@/public/svg/comment_icon.svg"
import Image from 'next/image'
const RoundTableSection = () => {
  return (
    <section className="px-28 bg-[#f5f5f54d] flex flex-col items-center py-20">
      <div className="max-w-3xl flex flex-col items-center mb-12">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">AFFC Roundtable</h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">Policy Conversations That Matter</h4>
        <p className="text-lg font-inter text-center text-[#1b1c23cc]">Solutions-oriented online and offline policy conversations around gender-lens investing and venture building, bringing together practitioners, female founders, investors, and policymakers..</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mb-12 w-full">
        <div className="lg:col-span-1">
          <div className="rounded-lg border bg-card text-card-foreground h-full border-none shadow-md animate-fade-in">
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
              <h3 className="font-semibold tracking-tight text-xl">Why Roundtable?</h3>
            </div>
            <div className="p-6 pt-0 space-y-6">
              <div className="flex gap-4">
                <div className="bg-affc-blue/10 p-3 rounded-full h-fit">
                <CommentIcon className="text-affc-blue" width={24} height={24}/>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Collaborative Dialogue</h4>
                  <p className="text-sm text-foreground/80">Facilitating meaningful conversations between key ecosystem stakeholders.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-affc-blue/10 p-3 rounded-full h-fit">
                <PeopleIcon className="text-affc-blue" width={24} height={24}/>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Diverse Perspectives</h4>
                  <p className="text-sm text-foreground/80">Bringing together multiple viewpoints for comprehensive solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-affc-blue/10 p-3 rounded-full h-fit">
                <TodoIcon className="text-affc-blue" width={24} height={24}/>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Action-Oriented</h4>
                  <p className="text-sm text-foreground/80">Focused on developing concrete policy recommendations and action plans.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-affc-blue/10 p-3 rounded-full h-fit">
                <ChartIcon className="text-affc-blue" width={24} height={24}/>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Evidence-Based</h4>
                  <p className="text-sm text-foreground/80">Grounded in research and data for effective policy advocacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="lg:col-span-2 bg-affc-cream/20 shadow-md rounded-lg font-inter">
        <div className="p-6 pt-0">
          <div className="flex flex-col space-y-1.5 pt-6 pb-3">
            <h3 className="font-semibold tracking-tight text-xl">Featured Roundtable Discussion</h3>
          </div>
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-semibold font-playfair-display">
                Unlocking Capital: Reforming Policy Barriers to Women&apos;s Access to Finance
              </h4>
              <div className="bg-affc-pink/10 text-affc-pink text-xs px-2 py-1 rounded">
                Upcoming
              </div>
            </div>

            <p className="text-foreground/80 mb-6">
              This roundtable will examine the systemic policy barriers preventing African female founders from accessing appropriate financing and develop actionable recommendations for governments, financial institutions, and development partners.
            </p>

            <div className="mb-6 w-full aspect-square  relative overflow-hidden rounded-lg shadow-md">
              <Image
                fill
                src="/images/header_img.png"
                alt="AFFC Roundtable Event Flyer"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="bg-affc-blue/10 p-2 rounded-full">
                  <CommentIcon className="text-affc-blue" width={24} height={24}/>
                </div>
                <div>
                  <div className="font-medium">Date &amp; Time</div>
                  <div>March 30, 2024 • 10:00 AM GMT</div>
                </div>
              </div>
              <a href="/affc-roundtable">
                <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-4 py-2 text-base">
                  Register to Attend
                </button>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-foreground/70 mb-4">
              Access summaries and policy briefs from our previous roundtable discussions.
            </p>
            <a href="/affc-roundtable">
              <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-4 py-2 text-base">
                View Past Roundtables
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RoundTableSection