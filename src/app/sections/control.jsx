import React from 'react';

const testimonials = [
  "Rephrase text to improve clarity, Seamlessly integrate with text containers in the canvas",
  "Perform grammar and spell checks, Summarise your research in multiple languages",
  "Input text through voice commands."
];

const Control = () => {
  return (
    <>
      <section className="bg-[#2A5650]">
        <div className="flex">
          <h1 className="text-green-600 text-2xl font-semibold items-center pt-10 pl-5">
            AI-powered Whizz<sup className="text-green-600 font-bold">TM</sup>
          </h1>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold items-center pb-8 pl-5">
            Summaries your research findings
          </h1>
        </div>
        <div className="pl-5 pb-8">
          {testimonials.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <h1 className="text-white text-md">{item}</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Control;

