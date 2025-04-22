import { RoundtableCard, RoundTableTablist } from "@/components/secondary/Events";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"

const tabs = [
  { label: "All Events", unique_id: "all", isActive: true },
  { label: "Upcoming", unique_id: "upcoming", isActive: false },
  { label: "Past Events", unique_id: "past", isActive: false },
];

const Events = () => {
  const router = useRouter();
  const { tab } = router.query;

  const [activeState, setActiveState] = useState(tabs[0]?.unique_id);

  useEffect(() => {
    const checkTabs = (tabTitle?: string | string[]) => {
      const currentTab = Array.isArray(tabTitle) ? tabTitle[0] : tabTitle;

      const foundTab = tabs.find((item) => item.unique_id === currentTab);

      if (foundTab) {
        setActiveState(foundTab.unique_id);
      } else {
        // Default back to first tab
        setActiveState(tabs[0]?.unique_id);
        router.push(
          {
            query: {
              ...router.query,
              tab: tabs[0]?.unique_id,
            },
          },
          undefined,
          { shallow: true }
        );
      }
    };

    if (router.isReady) {
      checkTabs(tab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, tab]);

  const updateTab = (newTabId: string) => {
    setActiveState(newTabId);
    router.push(
      {
        query: {
          ...router.query,
          tab: newTabId,
        },
      },
      undefined,
      { shallow: true }
    );
  };

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
            <p className="mb-4 text-foreground/80">
              The AFFC Roundtable is a forum for substantive discussions on policies and practices that affect female founders in Africa. 
              We bring together diverse stakeholders to identify challenges, share insights, and develop actionable recommendations.
            </p>
            <p className="mb-6 text-foreground/80">
              Each roundtable focuses on a specific theme relevant to supporting female entrepreneurship across the continent, 
              with the goal of driving meaningful change through evidence-based advocacy and collaboration.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* Diverse Voices Card */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-users text-affc-blue"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <h3 className="font-medium">Diverse Voices</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Bringing together multiple perspectives for comprehensive solutions
                </p>
              </div>

              {/* Policy Briefs Card */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-file-text text-affc-pink"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <h3 className="font-medium">Policy Briefs</h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Translating insights into actionable policy recommendations
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="AFFC Roundtable Discussion" 
              className="rounded-lg shadow-lg max-h-80 object-cover" 
            />
          </div>
        </div>
      </section>
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Roundtable Events</h2>
        <RoundTableTablist
        tabs={tabs.map((tab) => ({
          ...tab,
          isActive: tab.unique_id === activeState,
        }))}
        onTabClick={updateTab}
      />
      <div>
      <RoundtableCard
            title="Re-Engineering Pathways to Capital: Late-Stage Funding for the Scalability of African Female-led Ventures"
            time="2 PM WAT"
            date="May 8, 2025"
            location="Virtual, Zoom"
            onButtonClick={() => { } }
            imageUrl=""
            description={`While many African women dominate early-stage entrepreneurship and micro-enterprises, they are consistently excluded from capital-intensive stages where businesses scale, expand production, enter new markets, or formalize operations. This has created a “missing middle” for female founders; a structural void where ambition, innovation, and potential are not matched with the resources needed to grow. 
            
            This flagship roundtable aims to unpack what has failed, what is misunderstood, and what solutions can unlock scale—not as charity, but as smart economics.
        `} 
        label={"Upcoming"} 
        type={"Hybrid"}    
        />
      </div>
      </section>
    </div>
  )
}




export default Events