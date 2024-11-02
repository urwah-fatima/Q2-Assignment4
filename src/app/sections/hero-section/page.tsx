import React from "react";
import Image from "next/image";

const heroContent = {
  title: "Hi, I am John, Creative Technologist",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  image: "/images/herosec-img.png",
};

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between bg-bodyColor p-[200px]">
      <div className="w-[521px] h-[305px]">
        <h1 className="w-[521px] h-[124px] font-heebo text-[40px] font-extrabold leading-[61px] tracking-[2px] text-left text-[#21243D]">
          {heroContent.title}
        </h1>
        <p className="text-justify mt-[24px] mb-[24px]">{heroContent.description}</p>
        
        <button className="font-heebo font-medium text-[18px] text-white bg-{F98585} w-[205px] h-[50px] bg-heroButtonPink rounded-none drop-shadow-lg">
          Download Resume 
        </button>
      </div>
      <div>
        <img
          className=' h-auto max-w-full inset-0 rounded-full'
          src={heroContent.image}
          alt="Picture of the author" 
        />
      </div>
    </div>
  );
};

export default HeroSection;
