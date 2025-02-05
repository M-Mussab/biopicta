import React from 'react';
import Time from "@/app/sections/timeticker";

const Logoticker = () => {
  return (
    <div className="bg-[#225A54] w-full pb-10 pt-2 flex flex-col items-center justify-center">
      {/* Separate container for Time with extra padding */}
      <div className="w-full flex justify-center pb-4">
        <Time />
      </div>

      <h1 className="text-white text-lg font-semibold text-center">
        Scientists and Researchers trust PosterPro™
      </h1>
      <h1 className="text-white text-lg font-semibold text-center mt-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-800"></span>
        </span>
        350+ in waitlist
      </h1>
    </div>
  );
};

export default Logoticker;
