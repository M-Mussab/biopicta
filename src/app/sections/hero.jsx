import React from 'react';
import Image from 'next/image';
import Header from '@/app/images/Header image.svg';

const Hero = () => {
  return (
    <div className="bg-[#DFE6E5] max-sm:pt-12 flex flex-col lg:flex-row items-center justify-between ">
      <div className="max-w-lg text-center lg:text-left lg:pl-24 lg:pt-8  ">
        <h1 className="text-5xl font-bold mb-2  text-black">
          Design Your Research Posters With <span className='text-5xl font-semibold bg-gradient-to-r from-[#2A5650] to-[#5CBCAF] bg-clip-text text-transparent'>PosterPro</span>
          <sup className="text-sm  bg-gradient-to-r from-[#2A5650] to-[#5CBCAF] bg-clip-text text-transparent">TM</sup>
        </h1>
        {/* <h2 className="">
          <span>PosterPro</span>
          <sup className="text-sm  bg-gradient-to-r from-[#2A5650] to-[#5CBCAF] bg-clip-text text-transparent">TM</sup>
        </h2> */}

        <p className="text-gray-700 mt-4">
          Create professional Scientific Posters with pre-designed templates.
          Save time and get research posters with a few clicks.
        </p>
        <button className="mt-6 capitalize bg-[#B7512C] text-white px-5 rounded-full py-2 w-44 hover:bg-orange-800">
          Try for free
        </button>
      </div>
      <div className="mt-8 lg:mt-0">
        <Image
          className="w-[625px] lg:pl-8 object-contain"
          src={Header}
          alt="Header illustration for PosterPro"
        />
      </div>
    </div>
  );
};

export default Hero;
