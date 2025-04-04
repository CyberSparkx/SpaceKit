import React from "react";

const Hero4 = () => {
  return (
    <div className="w-full mt-14">
      {/* Main Container with Responsive Layout */}
      <div className="flex flex-col lg:flex-row items-start gap-6 relative">
        
        {/* Left Section (Sticky Image) */}
        <div className="w-full lg:w-[49vw] bg-amber-300 md:sticky lg:sticky top-10 h-[80vh]">
          <img
            src="/Space Kit Images 06.jpg"
            className="w-full h-full object-cover"
            alt="Space Kit"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[49vw]">
          {/* First Large Image */}
          <div className="w-full mb-20">
            <img
              src="/Space Kit Images 01.jpg"
              className="w-full lg:h-[80vh] h-[60vh] object-cover"
              alt="Space Kit"
            />
          </div>

          {/* Text Section */}
          <div className="w-full min-h-screen flex items-center justify-center px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-gray-500 tracking-wide">
                IDEAL FOR QUIET EVENINGS
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black mt-2">
                Mindful Living <br /> in Every Page
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Whether you're looking to reflect on your past, gain clarity on your
                goals, or simply find a few moments of calm in your busy day, this
                beautifully designed guide will inspire and motivate.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Let Journey Within be the companion that helps you navigate life’s ups
                and downs with grace and mindfulness.
              </p>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-10">
            {/* Top Image */}
            <div className="w-64 h-64">
              <img
                src="/Space Kit Images 07.jpg"
                alt="Notebook with Hand"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div className="w-72 h-96">
              <img
                src="/Space Kit Images 09.jpg"
                alt="Person Holding Backpack"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Last Section with Text and Image */}
          <div className="w-full min-h-screen flex flex-col items-center lg:items-start justify-between p-10 gap-10">
            {/* Text Section */}
            <div className="max-w-2xl text-center lg:text-left">
              <p className="text-xs uppercase text-gray-500 tracking-wide">
                Quality, Simplicity, and Comfort
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
                Simplicity Meets Sophistication
              </h1>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Designed for those who appreciate the finer things in life, this mug 
                combines functionality with sleek, modern design. Its smooth ceramic 
                surface is easy to clean and resistant to stains, while the comfortable 
                handle ensures a perfect grip every time.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you're enjoying a quiet morning at home or a quick break at the 
                office, the Morning Brew Mug adds a touch of sophistication to your 
                daily routine.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-52 lg:ml-[60%] h-52">
              <img 
                src="/Space Kit Images 08.jpg" 
                alt="Elegant Mug" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero4;
