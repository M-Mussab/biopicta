import React from 'react';
import Image from 'next/image';
import Header from '@/app/images/Header image.svg';

const Hero = () => {
  return (
    <div className="bg-[#DFE6E5] flex flex-col lg:flex-row items-center justify-between ">
      <div className="max-w-lg text-center lg:text-left lg:pl-8 lg:pt-8  ">
        <h1 className="text-4xl font-bold mb-2 text-black">
          Design Your Research Posters With
        </h1>
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#2A5650] to-[#5CBCAF] bg-clip-text text-transparent">
          <span>PosterPro</span>
          <sup className="text-sm">TM</sup>
        </h2>

        <p className="text-gray-700 mt-4">
          Create professional Scientific Posters with pre-designed templates.
          Save time and get research posters with a few clicks.
        </p>
        <button className="mt-6 bg-[#B7512C] text-white px-5 rounded-full py-2 w-44 hover:bg-orange-800">
          Get Started
        </button>
      </div>
      <div className="mt-8 lg:mt-0">
        <Image
          className="w-[625px] h-[525px] object-contain"
          src={Header}
          alt="Header illustration for PosterPro"
        />
      </div>
    </div>
  );
};

export default Hero;
