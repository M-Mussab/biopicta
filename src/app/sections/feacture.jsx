import React from "react";
export const members = [
   {
      quote:
       "Create unique scientific posters without the hassle of manual adjustments",
     package: " try it for FREE!",
     title: "Say Goodbye to Adjusting and Aligning in PowerPoint",
    images:""
  },   {
    quote:
     "Create unique scientific posters without the hassle of manual adjustments",
   package: " try it for FREE!",
   title: "Say Goodbye to Adjusting and Aligning in PowerPoint",
  images:""
},   {
  quote:
   "Create unique scientific posters without the hassle of manual adjustments",
 package: " try it for FREE!",
 title: "Say Goodbye to Adjusting and Aligning in PowerPoint",
images:""
}]
const Feature = () => {
  return (
    <section className=" flex flex-col items-center text-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-3xl sm:text-2xl font-bold text-gray-900 mb-2">
        Create Research Posters In Minutes.
      </h1>
      <p className=" mb-6">
        <span className="text-4xl text-[#011915] sm:text-3xl font-bold"> Powered By </span>
       <span className="text-4xl text-green-900 sm:text-3xl font-extrabold">Mind-Blowing Design Templates.</span>
      </p>
      <p className="text-gray-600 text-base sm:text-lg">
        Speed Up Your Research Presentations With <span className="font-semibold italic">PosterPro™</span>.
      </p>
    </section>
  );
};

export default Feature;
