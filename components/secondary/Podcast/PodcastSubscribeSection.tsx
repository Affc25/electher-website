// components/PodcastSubscribeSection.tsx

import React from "react";

const PodcastSubscribeSection = () => {
  return (
    <div className="mt-20 bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="max-w-sm">
          <h4 className="text-xl font-semibold mb-4">Subscribe to AFFC Café</h4>
          <p className="text-foreground/80 mb-6 font-inter">
            Never miss an episode! Subscribe to AFFC Café on your favorite podcast platform.
          </p>
          <div className="flex flex-wrap gap-3 font-inter">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm">
              Spotify
            </button>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm">
              Apple Podcasts
            </button>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm">
              Google Podcasts
            </button>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm">
              RSS Feed
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <div className="bg-affc-offwhite/50 p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Suggest a Guest</h5>
            <p className="text-sm text-foreground/80 mb-4">
              Know an inspiring female founder whose story should be shared? Let us know!
            </p>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-4 py-2 text-base">
              Nominate a Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSubscribeSection;