import { FC } from "react";

interface Tab {
  label: string;
  unique_id: string;
  isActive: boolean;
}

interface TabsListProps {
  tabs: Tab[];
  cols?: 2 | 3;
  onTabClick: (value: string) => void;
}

export const Tablist: FC<TabsListProps> = ({ 
  tabs, 
  cols = 3,
  onTabClick 
}) => {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={`h-10 items-center w-full bg-[#f3f5f7] justify-center rounded-md bg-muted p-1 text-muted-foreground grid ${cols === 2 ? "grid-cols-2" : "grid-cols-3"} mb-8`}
      tabIndex={0}
      data-orientation="horizontal"
      style={{ outline: "none" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.unique_id}
          type="button"
          role="tab"
          aria-selected={tab.isActive}
          aria-controls={`tab-content-${tab.unique_id}`}
          id={`tab-trigger-${tab.unique_id}`}
          data-state={tab.isActive ? "active" : "inactive"}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer font-inter ${
            tab.isActive
              ? "bg-white text-foreground shadow-sm"
              : ""
          }`}
          tabIndex={tab.isActive ? 0 : -1}
          data-orientation="horizontal"
          onClick={() => onTabClick(tab.unique_id)}
        >
          {tab.label}
        </button>
      ))}

    </div>
  );
};

export default Tablist