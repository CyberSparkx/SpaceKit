import React, { useEffect, useRef } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const elements = footerRef.current.querySelectorAll(".footer-item");

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-50 py-12 text-center flex flex-col items-center"
    >
      {/* Logo */}
      <img
        src="/Logo Spacekit.svg"
        alt="Logo"
        className="w-40 mb-6 footer-item"
      />

      {/* Navigation Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-[30vh] text-gray-800">
        <div className="footer-item">
          <h3 className="font-semibold text-black mb-2">Explore</h3>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">Home</p>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">Products</p>
        </div>
        <div className="footer-item">
          <h3 className="font-semibold text-black mb-2">Support</h3>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">FAQ</p>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">Contact</p>
        </div>
        <div className="footer-item">
          <h3 className="font-semibold text-black mb-2">Others</h3>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">Style Guide</p>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">Changelog</p>
        </div>
        <div className="footer-item">
          <h3 className="font-semibold text-black mb-2">Utility</h3>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">Instruction</p>
          <p className="text-gray-500 text-lg cursor-pointer hover:text-black">License</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-8 text-gray-800 text-xl footer-item">
        <FaTwitter className="cursor-pointer hover:text-black transition" />
        <FaFacebookF className="cursor-pointer hover:text-black transition" />
        <FaInstagram className="cursor-pointer hover:text-black transition" />
        <FaGithub className="cursor-pointer hover:text-black transition" />
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-6 text-gray-500 text-lg lg:text-lg footer-item">
        <p className="mb-2">
          <span className="cursor-pointer hover:text-black">License</span> |{" "}
          <span className="cursor-pointer hover:text-black">Style Guide</span> |{" "}
          <span className="cursor-pointer hover:text-black">Customize</span>
        </p>
        <p>
          Copyright © Design & Developed by{" "}
          <span className="text-black font-medium">Naren Roy</span> Powered by{" "}
          <span className="text-black font-medium">Sheyians Coding School</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
