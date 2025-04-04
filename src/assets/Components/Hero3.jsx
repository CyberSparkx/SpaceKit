import React from 'react';
import { ArrowRight } from "lucide-react";

const Hero3 = () => {
  return (
    <div className="w-full">
      {/* First Section */}
      <div className="w-[90%] mb-6 mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 md:gap-8 lg:mb-20">
        {/* Small Image */}
        <div className="bg-zinc-100 rounded-md w-full md:w-[40%] lg:w-[30%] overflow-hidden h-[55vw] md:h-[35vw] lg:h-[25vw]">
          <img
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700 ease-in-out"
            src="Space Kit Images 03.jpg"
            alt="Space Kit"
          />
        </div>

        {/* Large Image + Text */}
        <div className="bg-zinc-100 relative rounded-md w-full md:w-[55%] lg:w-[65%] overflow-hidden h-[55vw] md:h-[35vw] lg:h-[25vw]">
          <div className="absolute z-[2] p-4 md:p-6 lg:p-10 w-[90%]">
            <h1 className="text-lg md:text-2xl lg:text-4xl text-black leading-snug">
              Lightweight, durable, and perfect for any journey with our premium kits
            </h1>
            <div className="flex items-center gap-2 text-black cursor-pointer group mt-3">
              <span className="text-base md:text-lg">See Details</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          <img
            className="w-full h-full object-cover absolute z-[1] hover:scale-110 transition-all duration-700 ease-in-out"
            src="Space Kit Images 02.jpg"
            alt="Space Kit"
          />
        </div>
      </div>

      {/* Second Section (Reversed) */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row-reverse flex-wrap justify-between items-center gap-6 md:gap-8 lg:mb-20">
        {/* Small Image */}
        <div className="bg-zinc-300 rounded-md w-full md:w-[40%] lg:w-[30%] overflow-hidden h-[55vw] md:h-[35vw] lg:h-[25vw]">
          <img
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700 ease-in-out"
            src="Space Kit Images 05.jpg"
            alt="Space Kit"
          />
        </div>

        {/* Large Image + Text */}
        <div className="bg-zinc-100 relative rounded-md w-full md:w-[55%] lg:w-[65%] overflow-hidden h-[55vw] md:h-[35vw] lg:h-[25vw]">
          <div className="absolute z-[2] p-4 md:p-6 lg:p-10 w-[90%]">
            <h1 className="text-lg md:text-2xl lg:text-4xl text-black leading-snug">
              Lightweight, durable, and perfect for any journey with our premium kits
            </h1>
            <div className="flex items-center gap-2 text-black cursor-pointer group mt-3">
              <span className="text-base md:text-lg">See Details</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          <img
            className="w-full h-full object-cover absolute z-[1] hover:scale-110 transition-all duration-700 ease-in-out"
            src="Space Kit Images 04.jpg"
            alt="Space Kit"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
