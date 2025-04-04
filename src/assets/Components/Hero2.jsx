import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  useEffect(() => {
    gsap.from("#scrollable2", {
      opacity: 0,
      y: 500,
      duration: 10,
      scrollTrigger: {
        trigger: "section",
        start: "top 60%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });
  return (
    <section className="flex flex-col items-center text-center px-4 py-16 md:py-24">
     <div id="scrollable2">
       {/* Small Upper Text */}
       <div className="lg:w-[20vw] mx-auto  md:w-[30vw] w-[40vw] overflow-hidden  flex items-center">
        {/* Scrolling Wrapper */}
        <div className="flex gap-4 whitespace-nowrap animate-scroll">
          {/* Repeating Text for Smooth Loop */}
          {[...Array(9)].map((_, i) => (
            <p
              key={i}
              className="text-sm md:text-base flex gap-2 text-gray-500 tracking-wide uppercase"
            >
              Designed for your everyday adventure{" "}
              <img
                className="w-5 mr-4 mt-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Eo_circle_deep-orange_blank.svg/768px-Eo_circle_deep-orange_blank.svg.png"
              />
            </p>
          ))}
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold max-w-4xl mt-4">
        Explore our curated collection of high-quality products
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 mx-auto text-base md:text-lg max-w-2xl mt-4">
        Whether you're looking for a stylish new bag, a captivating book, or a
        perfect mug for your morning brew, we've got you covered.
      </p>
     </div>
    </section>
  );
};

export default Hero2;
