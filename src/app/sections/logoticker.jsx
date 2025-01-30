import React from 'react';

const Logoticker = () => {
  return (
    <div className="bg-[#225A54] w-full py-12 flex flex-col items-center justify-center">
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
