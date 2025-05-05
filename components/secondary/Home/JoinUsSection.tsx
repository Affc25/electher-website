import React, { useState } from 'react'
import { Tablist } from '../General'

const tabs = [
  { label: "AFFC Dispatch", unique_id: "affc_dispatch", isActive: true },
  { label: "AFFC Insider", unique_id: "affc_insider", isActive: false },
];

const JoinUsSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].unique_id);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };
  return (
    <section className="py-24 px-6 bg-affc-gray relative">
      <div className="absolute top-0 right-0 w-1/3 aspect-square bg-white/10 rounded-bl-full transform -translate-y-1/4 translate-x-1/4"/>
      <div className="absolute bottom-0 left-0 w-1/2 aspect-square bg-white/5 rounded-tr-full transform translate-y-1/4 -translate-x-1/4"/>
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-xl flex flex-col items-center">
        <div className="text-center mb-8 w-[80%]">
          <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-2">Join Our Network</h3>
          <h4 className="text-3xl md:text-4xl font-semibold mb-2">Stay Connected with AFFC</h4>
          <p className="font-inter text-center text-[#1b1c23cc]">Subscribe to our newsletter to receive the latest updates on funding opportunities, events, and resources designed to support female founders across Africa.</p>
        </div>
        <div className="w-full">
          <Tablist 
            cols={2}
            tabs={tabs.map((tab) => ({
              ...tab,
              isActive: tab.unique_id === activeTab,
            }))}
            onTabClick={handleTabClick}/>
        </div>
        <div className="w-full mt-8">
          {activeTab === "affc_dispatch" && <DispatchSubscribeForm />}
          {activeTab === "affc_insider" && <NewsletterSubscribeForm />}
        </div>
      </div>
     
   
    </section>
  )
}

const DispatchSubscribeForm = () => {
  return (
    <div className="bg-affc-cream/30 p-8 rounded-lg font-inter">
    <h4 className="text-lg font-semibold mb-4 font-playfair-display">AFFC Dispatch Subscription</h4>
    <p className="text-sm text-affc-gray/80 mb-6">
      Stay informed about AFFC initiatives, funding opportunities, and the latest news from the African female founder ecosystem.
    </p>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium leading-none" htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="flex h-10 w-full rounded-md bg-white border-affc-blue/20  border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium leading-none" htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="flex h-10 w-full rounded-md bg-white border-affc-blue/20  border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
      </div>
       <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium leading-none" htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="flex h-10 w-full bg-white border-affc-blue/20 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-4 py-2 text-base w-full mt-2"
      >
        Subscribe to AFFC Dispatch
      </button>
    </form>
  </div>
  
  )
}

const NewsletterSubscribeForm = () => {
  return (
    <div className="bg-affc-blue/10 p-8 rounded-lg font-inter">
    <h4 className="text-lg font-semibold mb-4 font-playfair-display">AFFC Insider Newsletter</h4>
    <p className="text-sm text-affc-gray/80 mb-6">
    Exclusive content for female founders in Africa. Get personalized funding alerts, mentorship opportunities, and connect with other founders.
    </p>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium leading-none" htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="flex h-10 w-full rounded-md bg-white border-affc-blue/20  border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium leading-none" htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="flex h-10 w-full rounded-md bg-white border-affc-blue/20  border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
      </div>
       <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium leading-none" htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="flex h-10 w-full bg-white border-affc-blue/20 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium leading-none" htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            placeholder="Enter your company name"
            className="flex h-10 w-full rounded-md bg-white border-affc-blue/20  border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium leading-none" htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            placeholder="Enter your country"
            className="flex h-10 w-full rounded-md bg-white border-affc-blue/20  border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
      </div>
       <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium leading-none" htmlFor="industry">Industry</label>
        <input
          id="industry"
          name="industry"
          type="text"
          placeholder="Enter your industry"
          className="flex h-10 w-full bg-white border-affc-blue/20 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-4 py-2 text-base w-full mt-2"
      >
        Subscribe to AFFC Insider
      </button>
    </form>
  </div>
  
  )
}

export default JoinUsSection