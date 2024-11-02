import React from "react";
import Image from "next/image";
import FeaturedWorksBoxes from "./ContentBoxes";

const featuredWorksImges = {
  img1: "/images/featured-works-img1.png",
  img2: "/images/featured-works-img2.png",
  img3: "/images/featured-works-img3.png",
};

const FeaturedWorks = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-bodyColor p-[200px] py-[300px]">
        <div className="flex flex-row ml[492.54px] p-5">
          <img src={featuredWorksImges.img1} alt="featured image" />
          <FeaturedWorksBoxes />
        </div>
      </div>
    </>
  );
};

export default FeaturedWorks;
