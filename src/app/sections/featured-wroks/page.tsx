import React from "react";
import Image from "next/image";
import FeaturedWorksBoxes from "./ContentBoxes";

// Object containing paths to featured work images
const featuredWorksImges = {
  img1: "/images/featuredimgs1.png",
  img2: "/images/featuredimgs2.png",
  img3: "/images/featuredimgs3.png",
};

// FeaturedWorks component to display a list of featured works
const FeaturedWorks = () => {
  return (
    <>
      {/* Main container for featured works */}
      <div className="flex flex-col justify-between bg-bodyColor p-[200px]">
        {/* First featured work item */}
        <div className="flex flex-row ml[492.54px] p-5">
          {/* Featured work image */}
          <img src={featuredWorksImges.img1} alt="featured image" />
          {/* Content box for the featured work */}
          <FeaturedWorksBoxes />
        </div>

        {/* Second featured work item */}
        <div className="flex flex-row ml[492.54px] p-5">
          <img src={featuredWorksImges.img2} alt="featured image" />
          <FeaturedWorksBoxes />
        </div>

        {/* Third featured work item */}
        <div className="flex flex-row ml[492.54px] p-5">
          <img src={featuredWorksImges.img3} alt="featured image" />
          <FeaturedWorksBoxes />
        </div>
      </div>
    </>
  );
};

export default FeaturedWorks;
