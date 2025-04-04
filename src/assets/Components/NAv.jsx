import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  let lastScrollY = window.scrollY; // Store initial scroll position
const [tag, setTag] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    let currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setTag(1);
    } else {
      setTag(0);
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll); // Clean up
}, []);

  
  
  
 

  return (
    <div className={`w-[90%] h-[10vh]  ${tag == 1 ?"relative":"fixed"}  mt-9 fixed mx-[5%] px-10  z-[10] flex justify-between items-center rounded-3xl backdrop-blur-xl backdrop-grayscale  bg-white/10`}
>
      {/* Logo */}
      <div>
        <img src="/Logo Spacekit.svg" alt="Logo" className="w-28" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex  justify-between items-center gap-10">
        <li className="list-none cursor-pointer">Home</li>
        <li className="list-none cursor-pointer">Product</li>
        <li className="list-none cursor-pointer">FAQ</li>
        <button
            type="button"
            class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          >
            Contact Us
          </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white/10 backdrop-blur-xl backdrop-grayscale flex flex-col items-center gap-6 py-6 rounded-b-3xl md:hidden z-[9]">
          <li className="list-none cursor-pointer">Home</li>
          <li className="list-none cursor-pointer">Product</li>
          <li className="list-none cursor-pointer">FAQ</li>
          <button
            type="button"
            class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
