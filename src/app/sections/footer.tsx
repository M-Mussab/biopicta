import React from 'react';
import Biopicta from '@/app/images/biopicta.svg';
import Facebook from '@/app/images/facebook.svg';
import Instagram from '@/app/images/instagram.svg';
import X from '@/app/images/x.svg';
import Arow from '@/app/images/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="flex bg-black flex-col md:flex-row md:justify-around justify-normal p-4">
        {/* First Column */}
        <div className="mb-6 md:mb-0">
          <div className="mt-10 mb-2">
            <Image src={Biopicta} alt="Biopicta" />
          </div>
          <div className="max-w-sm text-white text-sm">
            <p>
              Our mission is to revolutionize scientific communication through the
              integration of art and science by providing a platform that enables
              scientists to create concise, high-quality, and informative
              scientific illustrations with ease.
            </p>
          </div>
          <div className="flex gap-6 mt-3">
            <div>
              <Image src={Facebook} alt="Facebook" />
            </div>
            <div className="bg-white h-4 w-[0.5px] mt-1"></div>
            <div>
              <Image src={Instagram} alt="Instagram" />
            </div>
            <div className="bg-white h-4 w-[0.5px] mt-1"></div>
            <div>
              <Image src={X} alt="x" />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="mb-6 md:mb-0">
          <div>
            <h1 className="text-2xl text-white mt-10 mb-2">QUICK LINK</h1>
          </div>
          <div className="flex flex-col text-white gap-2">
            <ul>About</ul>
            <ul>Features</ul>
            <ul>Contact</ul>
            <ul>Blog</ul>
          </div>
        </div>

        {/* Third Column */}
        <div>
          <div>
            <h1 className="text-2xl text-white mt-10 mb-3">NEWS LETTER</h1>
          </div>
          <div className="max-w-xs text-white text-sm">
            <p>
              Subscribe to our newsletter to get our latest updates & news.
            </p>
          </div>
          <div className="flex text-white mt-5">
            <input
              className="w-full max-w-sm pt-2 pb-2 pl-4 pr-10 rounded-md"
              type="text"
              placeholder="Your email address"
            />
            <div className="bg-[#2A5650] size-9 flex items-center justify-center rounded-md -translate-x-9 p-1 translate-y-[2px]">
              <Image
                className="items-center m-1 flex justify-center"
                src={Arow}
                alt="Arow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-blac " ></div>
      <h1 className='text-center mt-5 bg-black '>
        <span className='bg-black text-white/30'>© 2025 Powered by </span>
        <Link className='font-bold text-white underline' href="https://kognifi.com">
          Kognifi
        </Link>
      </h1>
    </>
  );
};

export default Footer;
