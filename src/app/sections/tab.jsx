import React from 'react';
import First from '@/app/images/first.svg';
import Second from '@/app/images/second.svg';
import Third from '@/app/images/third.svg';
import Image from 'next/image';

const QRCodeTab = () => {
  return (
    <div className="bg-black text-white py-10 px-5">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          QR Code Generator
        </h1>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center mb-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="rounded-full bg-[#2A5650] border-4   border-[#0D121F] text-white w-14 h-14 flex items-center justify-center font-bold mb-4 -translate-x-24 translate-y-10">
            1
          </div>
          <Image src={First} alt="Step 1" />
          <p className="text-sm mt-4">
            Embed links to full research papers, supplementary datasets, and
            additional resources.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="rounded-full bg-[#2A5650] border-4  border-[#0D121F] text-white w-14 h-14 flex items-center justify-center font-bold mb-4 -translate-x-24 translate-y-10">
            2
          </div>
          <Image src={Second} alt="Step 2" />
          <p className="text-sm mt-4">
            Adjust QR code size, color, and placement to match your poster's
            design and layout.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center max-w-xs text-center">
          <div className="rounded-full bg-[#2A5650] border-4   border-[#0D121F] text-white w-14 h-14 flex items-center justify-center font-bold mb-4 -translate-x-24 translate-y-10" >
            3
          </div>
          <Image src={Third} alt="Step 3" />
          <p className="text-sm mt-4 ">
            Link QR codes to academic profiles, collect feedback from visitors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeTab;
