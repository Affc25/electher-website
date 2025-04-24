import React from "react";

const SuggestRoundtable = () => {
  return (
    <div className="bg-affc-blue/10 p-8 md:p-12 rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Suggest a Roundtable Topic
      </h2>
      <p className="mb-6 max-w-2xl mx-auto font-inter">
        Have an idea for an important policy issue affecting female founders in Africa? 
        We welcome suggestions for future roundtable discussions.
      </p>
      <button
        className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-6 py-3 text-lg"
      >
        Submit a Topic
      </button>
    </div>
  );
};

export default SuggestRoundtable;
