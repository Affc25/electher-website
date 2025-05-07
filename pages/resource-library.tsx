import { ResourceCard, ResourceFilter } from '@/components/secondary/Resources';
import React, { useMemo, useState } from 'react'
const resources = [
  {
    category: "Business Planning",
    isFeatured: true,
    title: "Business Plan Template for African Female Founders",
    description:
      "A comprehensive business plan template specifically designed for women entrepreneurs in African markets.",
    keywords: ["Business Plan", "Startup", "Fund Raising", "Downloadable Template"],
    cta: {
      text: "Download Template",
      type: "link",
    },
  },
  {
    category: "Legal Resources",
    isFeatured: true,
    title: "Startup Legal Toolkit",
    description:
      "Essential legal documents for African startups, including incorporation, IP protection, and employment contracts.",
    keywords: ["Legal", "Contracts", "IP Protection", "Downloadable Template"],
    cta: {
      text: "Download Template",
      type: "link",
    },
  },
  {
    category: "Business Planning",
    title: "Investor Pitch Deck Guide & Template",
    description:
      "Complete guide to creating compelling pitch decks with a customizable template optimized for women-led ventures.",
    keywords: ["Pitch Deck", "Investors", "Fundraising", "Step-by-Step Guide"],
    cta: {
      text: "Access Guide",
      type: "link",
    },
  },
  {
    category: "Financial Tools",
    title: "Financial Projections Spreadsheet",
    description:
      "Easy-to-use financial modeling spreadsheet with templates for cash flow, P&L, and balance sheets.",
    keywords: ["Financial Model", "Forecasting", "Cash Flow", "Downloadable Template"],
    cta: {
      text: "Download Template",
      type: "link",
    },
  },
  {
    category: "Marketing Resources",
    title: "Social Media Marketing Guide for Female Entrepreneurs",
    description:
      "Comprehensive social media strategy guide with templates for content calendars and analytics tracking.",
    keywords: ["Social Media", "Marketing", "Content Strategy", "Step-by-Step Guide"],
    cta: {
      text: "Access Guide",
      type: "link",
    },
  },
  {
    category: "Financial Tools",
    title: "Financial Literacy Video Course",
    description:
      "Step-by-step video tutorials on managing finances, reading financial statements, and preparing for investment.",
    keywords: ["Financial Literacy", "Accounting", "Investment Readiness", "Video Tutorial"],
    cta: {
      text: "Watch Tutorial",
      type: "link",
    },
  },
  {
    category: "Business Planning",
    title: "Market Research Methodology Tutorial",
    description:
      "Video tutorial on conducting effective market research in African markets with limited data availability.",
    keywords: ["Market Research", "Customer Discovery", "Validation", "Video Tutorial"],
    cta: {
      text: "Watch Tutorial",
      type: "link",
    },
  },
  {
    category: "Legal Resources",
    title: "Trademark Registration Guide for African Countries",
    description:
      "Country-by-country guide to trademark and brand protection across major African markets.",
    keywords: ["Trademark", "Brand Protection", "IP", "Step-by-Step Guide"],
    cta: {
      text: "Access Guide",
      type: "link",
    },
  },
];

const ResourceLibrary = () => {
  const [format, setFormat] = useState("all");
  const [category, setCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const featuredResources = useMemo(()=>resources.filter((resource) => resource.isFeatured), []);
  const filteredResources = useMemo(()=>resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchText.toLowerCase()) || resource.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = category === "all" || resource.category === category;
    const matchesFormat = format === "all" || resource.keywords.some((keyword) => keyword.toLowerCase() === format.toLowerCase());
    return matchesSearch && matchesCategory && matchesFormat;
  }),[searchText, category, format] );

  
  return (
    <div className="mt-6 md:px-28 px-6">
       <section className="px-6 md:px-28  flex flex-col items-center py-20 w-full">
        <div className="max-w-3xl flex flex-col items-center mb-12 text-center">
          <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">
          Resource Library
          </h3>
          <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          Practical Tools for Your Business
          </h4>
          <p className="text-lg font-inter text-[#1b1c23cc]">
          Access our collection of templates, guides, and tutorials designed to help African female founders build and scale their businesses.
          </p>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredResources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              isFeatured={resource.isFeatured}
              description={resource.description}
              keywords={resource.keywords}
              category={resource.category}
              cta={resource.cta}
            />
          ))}
        </div>
      </section>
      <ResourceFilter
        formats={["Templates", "Guides", "Video Tutorials"]}
        categories={["Business Planning", "Legal Resources", "Financial Tools", "Marketing Resources",]}
        searchInput={searchText}
        setFormat={(value) => setFormat(() => value)}
        setSearchInput={(text)=>setSearchText(()=> text)}
        setCategory={(value) => setCategory(() => value)}
      />
      <section>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              isFeatured={resource.isFeatured}
              description={resource.description}
              keywords={resource.keywords}
              category={resource.category}
              cta={resource.cta}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ResourceLibrary