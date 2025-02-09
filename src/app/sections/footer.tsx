import React from 'react';
import Biopicta from '@/app/images/biopicta.svg';

import LinkedInIcon from '@/app/images/linkedin.svg';
import Instagram from '@/app/images/instagram.svg';
import X from '@/app/images/x.svg';

import Arow from '@/app/images/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      {/* Main Footer Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* First Column */}
        <div className="flex-1">
          <Image src={Biopicta} alt="Biopicta" className="mb-4" />
          <p className="text-sm max-w-sm">
            Our mission is to revolutionize scientific communication through the
            integration of art and science by providing a platform that enables
            scientists to create concise, high-quality, and informative scientific
            illustrations with ease.
          </p>
          <div className="flex items-center gap-4 mt-4">
            {/* Removed Facebook anchor */}
            <a
              href="https://www.linkedin.com/company/biopicta/?original_referer="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedInIcon} alt="LinkedIn" className="cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/biopicta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={X} alt="X" className="cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/bio.picta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} alt="Instagram" className="cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-1">Newsletter</h2>
          <p className="text-sm max-w-xs mb-8">
            Subscribe to our newsletter to get our latest updates & news.
          </p>
          <div className="flex text-white mt-5">
            <input
              className="w-full max-w-xs pt-2 pb-2 pl-4 pr-10 rounded-md"
              type="text"
              placeholder="Your email address"
            />
            <div className="bg-[#2A5650] size-9 flex items-center justify-center rounded-md -translate-x-10 p-1 translate-y-[2px]">
              <Image
                className="items-center m-1 flex justify-center"
                src={Arow}
                alt="Arrow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px my-6 bg-gray-600"></div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-gray-400">
        <span>© 2025 Powered by </span>
        <Link
          href="https://kognifi.ai"
          className="text-white font-bold italic underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kognifi
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
