import { RoundTableEvents } from "@/components/secondary/Events";
import React from "react"
import FileIcon from "@/public/svg/file_icon.svg";
import PeopleIcon from "@/public/svg/people_icon.svg";

const Events = () => {


  return (
    <div className="bg-affc-offwhite md:px-28 px-6">
      <section className=" py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-affc-gray">
            AFFC <span className="text-affc-blue">Roundtable</span>
          </h1>
          
          <div className="h-0.5 w-24 bg-affc-pink mx-auto my-8" />

          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-inter">
            Solutions-oriented policy conversations around gender-lens investing and venture building, 
            bringing together practitioners, female founders, investors, and policymakers.
          </p>
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              What is the AFFC Roundtable?
            </h2>
            <p className="mb-4 text-foreground/80 font-inter">
              The AFFC Roundtable is a forum for substantive discussions on policies and practices that affect female founders in Africa. 
              We bring together diverse stakeholders to identify challenges, share insights, and develop actionable recommendations.
            </p>
            <p className="mb-6 text-foreground/80 font-inter">
              Each roundtable focuses on a specific theme relevant to supporting female entrepreneurship across the continent, 
              with the goal of driving meaningful change through evidence-based advocacy and collaboration.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* Diverse Voices Card */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <PeopleIcon className="text-affc-blue size-5"/>
                  <h3 className="font-medium">Diverse Voices</h3>
                </div>
                <p className="text-sm text-foreground/70 font-inter">
                  Bringing together multiple perspectives for comprehensive solutions
                </p>
              </div>

              {/* Policy Briefs Card */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <FileIcon className="text-affc-pink size-5"/>
                  <h3 className="font-medium">Policy Briefs</h3>
                </div>
                <p className="text-sm text-foreground/70 font-inter">
                  Translating insights into actionable policy recommendations
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/header_img.png" 
              alt="AFFC Roundtable Discussion" 
              className="rounded-lg shadow-lg max-h-80 object-cover" 
            />
          </div>
        </div>
      </section>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Roundtable Events</h2>
        <RoundTableEvents 
          data={[
          {
            title:"Re-Engineering Pathways to Capital: Late-Stage Funding for the Scalability of African Female-led Ventures",
            time:"2 PM WAT",
            startDate:"May 8, 2025",
            location:"Virtual, Zoom",
            imageUrl:"images/header_img.png",
            destinationUrl:":",
            description:`While many African women dominate early-stage entrepreneurship and micro-enterprises, they are consistently excluded from capital-intensive stages where businesses scale, expand production, enter new markets, or formalize operations. This has created a “missing middle” for female founders; a structural void where ambition, innovation, and potential are not matched with the resources needed to grow. 
            
            This flagship roundtable aims to unpack what has failed, what is misunderstood, and what solutions can unlock scale—not as charity, but as smart economics.
            `, 
            label:"Upcoming",
            type:"Virtual",
          }
        ]}
        />
        
      </section>
      {/* <section className="mt-12 pb-16">
        <SuggestRoundTable/>
      </section> */}
    </div>
  )
}




export default Events