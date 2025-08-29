import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">SnapLink</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2025 SnapLink. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
         
          <a href="https://www.instagram.com/an1vesh?igsh=dHRrNnZ6emE2anRi" className="hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
           <a href="https://github.com/aniveshsamal" className="hover:text-gray-200">
            <FaGithub size={24} />
          </a>
          <a href="https://leetcode.com/u/Anivesh_Samal/" className="hover:text-gray-200">
            <SiLeetcode size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anivesh-samal/" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
       {/* Developer Badge */}
 <div className="absolute bottom-2 right-6 flex items-center gap-1 text-white text-xs font-mono shadow-lg px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-bounce hover:scale-110 transform transition-all duration-500">
    <FaLaptopCode size={16} className="text-yellow-300" />

    <span className="font-semibold text-white tracking-wide flex">
      {"Dev by".split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transformOrigin: "bottom center",
            animation: `tilt 1s ease-in-out ${i * 0.1}s infinite`,
          }}
        >
          {char}
        </span>
      ))}
    </span>

    <a
      href="https://your-portfolio-link.com"
      target="_blank"
      className="underline decoration-dashed decoration-yellow-300 hover:text-yellow-200 font-medium ml-1 flex"
    >
      {"Anivesh".split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transformOrigin: "bottom center",
            animation: `tilt 1s ease-in-out ${0.5 + i * 0.1}s infinite`,
          }}
        >
          {char}
        </span>
      ))}
      &nbsp;
      {"Samal".split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transformOrigin: "bottom center",
            animation: `tilt 1s ease-in-out ${1 + i * 0.1}s infinite`,
          }}
        >
          {char}
        </span>
      ))}
    </a>
  </div>

    </footer>
  );
};

export default Footer;