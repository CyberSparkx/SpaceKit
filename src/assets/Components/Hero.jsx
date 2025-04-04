import React, { useEffect } from "react";
import Nav from "./NAv";
import gsap from "gsap";


const Hero = () => {

  useEffect(() => {
  
    gsap.to('.wow',{
      rotate:360,
      duration:15,
      repeat:-1
    })

  },[])

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <img
        className="h-full w-full object-cover absolute z-[1]"
        src="/Hero Background.jpg"
        alt="Hero Background"
      />

      {/* Navbar */}
      <Nav />

      {/* Hero Content */}
      <div className="w-full h-[60vh] bottom-0 absolute z-[2] flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16 flex-wrap text-center md:text-left">
        {/* Left Section */}
        <div className=" lg:absolute lg:bottom-20 lg:left-30   w-full md:w-[50%] space-y-6">
          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-gray-500"
          >
            More Products | See More
            <img className="ml-2 w-4 mt-1" src="/Arrow.svg" alt="arrow" />
          </button>

          <h1 id="hero1-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Your Next Adventure Starts With Us
          </h1>
        </div>

        {/* Right Section (Circular Button) */}
        <div className="lg:absolute relative lg:bottom-0 lg:right-0 lg:mr-12 lg:mb-5 w-40 h-40 mt-6 md:mt-0 flex justify-center items-center">
  <img
    className="absolute w-[70%] object-contain"
    src="/CIRCLE.svg"
    alt="Circle"
  />
  <img
    className="wow absolute w-[90%] max-w-[180px] object-contain"
    src="/Circular Text.svg"
    alt="Circular Text"
  />
  <img
    className="w-7 z-10"
    src="/Button Arrow.svg"
    alt="Arrow"
  />
</div>

      </div>
    </div>
  );
};

export default Hero;
