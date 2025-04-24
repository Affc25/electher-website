import React, { FC, useEffect, useState } from 'react'
import RoundtableCard, { RoundtableCardProps } from './RoundtableCard'
import TabsList from './RoundTableTablist'
import { useRouter } from 'next/router';

const tabs = [
  { label: "All Events", unique_id: "all", isActive: true },
  { label: "Upcoming", unique_id: "upcoming", isActive: false },
  { label: "Past Events", unique_id: "past", isActive: false },
];

type PropsType = {
  data: RoundtableCardProps[]
}

const RoundTableEvents:FC<PropsType> = ({data}) => {
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
    <section>
      <TabsList
         tabs={tabs.map((tab) => ({
          ...tab,
          isActive: tab.unique_id === activeState,
        }))}
        onTabClick={updateTab}
        
      />
      {
        data.map((item, index)=> (<RoundtableCard key={index} {...item}/>))
      }
     
    </section>
  )
}

export default RoundTableEvents