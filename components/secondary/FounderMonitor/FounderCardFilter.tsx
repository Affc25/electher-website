import React, { FC } from 'react'
import * as Slider from '@radix-ui/react-slider';
import SearchIcon from "@/public/svg/search_icon.svg"
import FilterIcon from "@/public/svg/filter_icon.svg"

type PropsType = {
  regions: string[];
  searchText: string;
  industries: string[];
  yearFounded: string[];
  fundingAmount: number[],
  setRegion: (value: string) => void;
  setIndustry: (value: string) => void;
  setSearchText: (value: string) => void;
  setYearFounded: (value: string) => void;
  setFundingAmount: (value: number[]) => void;
}
const FounderCardFilter:FC<PropsType> = ({
  regions,
  // searchText,
  industries,
  yearFounded,
  fundingAmount,
  // setRegion,
  // setIndustry,
  // setSearchText,
  setYearFounded,
  setFundingAmount
}) => {
  return (
<div className="bg-white p-6 rounded-lg shadow-md mb-8 font-inter">
  <div className="relative mb-6">
    <SearchIcon
      className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60"
    />
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
      placeholder="Search by name, company, or keyword..."
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
    <div>
      <label className="text-sm font-medium mb-1 block">Industry</label>
      <select 
        className="h-10 px-3 py-2 rounded-md border border-input bg-white text-sm w-full appearance-none pr-8"
        onChange={(e) => setYearFounded(e.target.value)}
      >
        <option value="all">All Regions</option>
        {industries.map((industry, index) => ( 
          <option key={index} value={industry}>{industry}</option>
        ))}
        
      </select>
      <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60 h-4 w-4"/>
    </div>

    <div>
      <label className="text-sm font-medium mb-1 block">Region</label>
      <select 
        className="h-10 px-3 py-2 rounded-md border border-input bg-white text-sm w-full appearance-none pr-8"
        onChange={(e) => setYearFounded(e.target.value)}
      >
        <option value="all">All Regions</option>
        {regions.map((region, index) => ( 
          <option key={index} value={region}>{region}</option>
        ))}
        
      </select>
      <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60 h-4 w-4"/>
    </div>

    <div>
      <label className="text-sm font-medium mb-1 block">Funding Stage</label>
      <select 
          className="h-10 px-3 py-2 rounded-md border border-input bg-white text-sm w-full appearance-none pr-8"
          onChange={(e) => setYearFounded(e.target.value)}
        >
          <option value="all">All Years</option>
          <option value="Pre-Seed">Pre-Seed</option>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
          <option value="Series B">Series B</option>
          <option value="Series C+">Series C+</option>
         
        </select>
        <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60 h-4 w-4"/>
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Founded Year</label>
        <select 
          className="h-10 px-3 py-2 rounded-md border border-input bg-white text-sm w-full appearance-none pr-8"
          onChange={(e) => setYearFounded(e.target.value)}
        >
          <option value="all">All Years</option>
          {yearFounded.map((year, index) => ( 
            <option key={index} value={year}>{year}</option>
          ))}
          
        </select>
        <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60 h-4 w-4"/>
      </div>
      <div>
        <FundingAmountSlider
          value={fundingAmount}
          onChange={(value) => setFundingAmount(value)}
        />
      </div>
    </div>

    {/* Add additional filter blocks here if needed */}
</div>

  )
}

type FundingAmountSliderProps = {
  value: number[];
  onChange: (value: number[]) => void;
};

const FundingAmountSlider: React.FC<FundingAmountSliderProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
    <label className="text-sm font-medium mb-2 block">
      Funding Amount (in millions $)
    </label>

    <div className="px-2">
      <Slider.Root
        className="relative flex w-full touch-none select-none items-center"
        value={value}
        onValueChange={onChange}
        min={0}
        max={10}
        step={1}
      >
        <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <Slider.Range className="absolute h-full bg-affc-blue" />
        </Slider.Track>
        {value.map((_, index) => (
          <Slider.Thumb
            key={index}
            className="block h-5 w-5 rounded-full border-2 border-affc-blue bg-affc-blue bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            aria-label={`Thumb ${index + 1}`}
          />
        ))}
      </Slider.Root>
    </div>

    <div className="flex justify-between text-xs mt-2">
      <span>${value[0]}M</span>
      <span>$10M+</span>
    </div>
  </div>
  );
};


export default FounderCardFilter