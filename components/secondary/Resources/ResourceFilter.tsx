import React, { FC } from 'react'
import SearchIcon from "@/public/svg/search_icon.svg"
import FilterIcon from "@/public/svg/filter_icon.svg"

type PropsType = {
  formats: string[];
  searchInput: string;
  categories: string[];
  setFormat: (value: string) => void;
  setCategory: (value: string) => void;
  setSearchInput: (value: string) => void;
}

const ResourceFilter:FC<PropsType> = ({
  formats,
  setFormat,
  categories,
  searchInput,
  setCategory,
  setSearchInput
}) => {
  return (
  <div className="bg-affc-offwhite/50 p-6 rounded-lg mb-12 font-inter">
    <div className="flex flex-col md:flex-row gap-4">
      <div  className="relative flex-grow">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60 h-4 w-4"/>
          <input 
            type="text" 
            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 bg-white" placeholder="Search for resources..." 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <select 
              className="h-10 px-3 py-2 rounded-md border border-input bg-white text-sm w-full appearance-none pr-8"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => ( 
                <option key={index} value={category}>{category}</option>
              ))}
              
            </select>
            <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60 h-4 w-4"/>
          </div>
          <div className="relative">
            <select 
              className="h-10 px-3 py-2 rounded-md border border-input bg-white text-sm w-full appearance-none pr-8"
              onChange={(e) => setFormat(e.target.value)}  
            >
              <option value="all">All Formats</option>
              {formats.map((format, index) => ( 
                <option key={index} value={format}>{format}</option>
              ))}
            </select>
            <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-affc-gray/60 h-4 w-4"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceFilter