// Import necessary modules
import React from "react";
import Image from "next/image";

// Define the content for the hero section
const heroContent = {
  title: "Hi, I am John, Creative Technologist",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  image: "/images/herosec-img.png",
};

// Define the HeroSection component
const HeroSection = () => {
  return (
    // Main container for the hero section
    <div className="flex flex-row justify-between bg-bodyColor p-[200px]">
      {/* Left side content container */}
      <div className="w-[521px] h-[305px]">
        {/* Hero title */}
        <h1 className="w-[521px] h-[124px] font-heebo text-[40px] font-extrabold leading-[61px] tracking-[2px] text-left text-[#21243D]">
          {heroContent.title}
        </h1>
        {/* Hero description */}
        <p className="text-justify mt-[24px] mb-[24px]">{heroContent.description}</p>
        
        {/* Download Resume button */}
        <button className="font-heebo font-medium text-[18px] text-white bg-{F98585} w-[205px] h-[50px] bg-heroButtonPink rounded-none drop-shadow-lg">
          Download Resume 
        </button>
      </div>
      {/* Right side image container */}
      <div>
        {/* Hero image */}
        <img
          className=' h-auto max-w-full inset-0 rounded-full'
          src={heroContent.image}
          alt="Picture of the author" 
        />
      </div>
    </div>
  );
};

// Export the HeroSection component
export default HeroSection;
