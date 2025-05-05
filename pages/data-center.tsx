import { useRouter } from 'next/router';
import { Tablist } from '@/components/secondary/General';
import React, { useEffect, useMemo, useState } from 'react'
import { InsightCard, ResourceFilter } from '@/components/secondary/Resources';

const tabs = [
  { label: "Browse Data", unique_id: "browse_data", isActive: true },
  { label: "Featured Insights", unique_id: "featured_insights", isActive: false },
];

const insights = [
  {
    category: "Investment Trends",
    date: "March 2024",
    title: "African Female Founders Funding Report 2024",
    description:
      "Comprehensive analysis of funding trends for women-led ventures across Africa, including regional breakdowns and sector analysis.",
    tag: "Research Report",
    buttonText: "Download Report",
  },
  {
    category: "Investment Trends",
    date: "January 2024",
    title: "Gender Gap in Venture Capital: East Africa",
    description:
      "Data-driven analysis of gender disparities in venture funding across East Africa, with recommendations for investors and founders.",
    tag: "Research Report",
    buttonText: "Download Report",
  },
  {
    category: "Policy Insights",
    date: "November 2023",
    title: "Policy Environment Index for Women Entrepreneurs",
    description:
      "Comprehensive analysis of business policies affecting female entrepreneurs across 25 African countries, with regulatory scorecards.",
    tag: "Research Report",
    buttonText: "Download Report",
  },
  {
    category: "Industry Analysis",
    date: "September 2023",
    title: "Fintech Adoption Trends in Africa",
    description:
      "Sector-specific analysis of fintech adoption trends across Africa, with a focus on opportunities for women-led fintech ventures.",
    tag: "Research Report",
    buttonText: "Download Report",
  },  {
    category: "Investment Trends",
    date: "March 2024",
    isFeatured: true,
    title: "African Female Founders Funding Report 2024",
    description:
      "Comprehensive analysis of funding trends for women-led ventures across Africa, including regional breakdowns and sector analysis.",
    tag: "Research Report",
    buttonText: "Download Report",
  },
];


const DataCenter = () => {
  const router = useRouter();
  const { tab } = router.query;
  const [activeState, setActiveState] = useState(tabs[0]?.unique_id);
    useEffect(() => {
      const checkTabs = (tabTitle?: string | string[]) => {
        const currentTab = Array.isArray(tabTitle) ? tabTitle[0] : tabTitle;
  
        const foundTab = tabs.find((item) => item.unique_id === currentTab);
  
        if (foundTab) {
  
          setActiveState(()=>foundTab.unique_id);
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
    <div className="mt-6 md:px-28 px-6">
       <section className="px-6 md:px-28  flex flex-col items-center pt-20 pb-8 w-full">
        <div className="max-w-3xl flex flex-col items-center mb-12 text-center">
          <h3 className="uppercase font-inter font-bold text-affc-blue text-sm mb-4">
          Data Center
          </h3>
          <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          Insights & Analytics for Female Founders
          </h4>
          <p className="text-lg font-inter text-[#1b1c23cc]">
          Access valuable data insights, market research, and analytics tools to inform your business decisions and growth strategies.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-28  flex flex-col items-center w-full pb-20">
        <div className="w-[440px]">
          <Tablist
            cols={2}
            tabs={tabs.map((tab) => ({
              ...tab,
              isActive: tab.unique_id === activeState,
            }))}
            onTabClick={updateTab}
          />
        </div>
      </section>
      <section className="mb-4">
        {activeState === "browse_data" && (<BrowseData />)}
        {activeState === "featured_insights" && (<FeaturedInsights />)}
      </section>
      <section>
      <div className="my-16 text-center">
        <p className="text-affc-gray/70 mb-4">
          Don't see what you're looking for?
        </p>
        <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-4 py-2 text-base">
          Request Data Access
        </button>
      </div>
      </section>
    </div>
  )
}

const BrowseData = () => {
  const [format, setFormat] = useState("all");
  const [category, setCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const filteredResources = useMemo(()=>insights.filter((insight) => {
    const matchesSearch = insight.title.toLowerCase().includes(searchText.toLowerCase()) || insight.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = category === "all" || insight.category === category;
    const matchesFormat = format === "all" || insight.category.includes(searchText.toLowerCase());
    return matchesSearch && matchesCategory && matchesFormat;
  }),[searchText, category, format] );
  return (
    <section>
         <ResourceFilter
        formats={["Templates", "Guides", "Video Tutorials"]}
        categories={["Business Planning", "Legal Resources", "Financial Tools", "Marketing Resources",]}
        searchInput={searchText}
        setFormat={(value) => setFormat(() => value)}
        setSearchInput={(text)=>setSearchText(()=> text)}
        setCategory={(value) => setCategory(() => value)}
      />
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((insight, index) => (
            <InsightCard
              key={index}
              {...insight}
            />
          ))}
        </div>
    </section>
  )
}
const FeaturedInsights = () => {
  const featuredResources = useMemo(()=>insights.filter((insight) => insight.isFeatured), []);
  

  return (
    <section>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredResources.map((insight, index) => (
            <InsightCard
              key={index}
              {...insight}
            />
          ))}
        </div>
        <div className="bg-affc-blue/5 p-6 rounded-lg border border-affc-blue/10 font-inter">
          <h4 className="text-xl font-semibold mb-4 text-affc-blue font-playfair-display">
            Custom Data Requests
          </h4>
          <p className="mb-4 text-foreground/80">
            Need specific data for your business planning or investor pitches? Our team can help create customized reports.
          </p>
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-4 py-2 text-base">
            Request Custom Data
          </button>
        </div>
    </section>
  )
}

export default DataCenter