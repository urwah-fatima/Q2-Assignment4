import React from "react";
import Image from "next/image";

const postContent = {
  title: "Making a design system from scratch",
  text1: "12 Feb 2020 ",
  text2: "Design, Pattern",
  details:
    "Amet minim mollit non deserunt ullamco est sit aliqua " +
    "dolor do amet sint. Velit officia consequat duis enim" +
    "velit mollit.Exercitation veniam consequat sunt " +
    "nostrud amet. ",
};

const recentPost = () => {
  return (
    <>
      <div className="bg-recentPostColor px-[200px] py-[30px]">
        <div className="flex flex-row justify-between py-[50px]">
          <div className="text-lg font-heebo">Recent Post</div>
          <div className="text-heroButtonPink text-lg font-heebo">View all</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="bg-white p-[70px]">
            <h1 className="font-extrabold text-xl font-heebo">{postContent.title}</h1>
              <h5 className="pt-5 text-gray-700 font-heebo">{postContent.text1} {"  "}{"|"}{"  "}{postContent.text2}</h5>
              <h5 className="text-left pt-5 text-gray-700 font-heebo">{postContent.details}</h5>
          </div>
          <div className="bg-white p-[70px] ml-[20px]">
            <h1 className="font-extrabold text-xl font-heebo">{postContent.title}</h1>
            <h5 className="pt-5 text-gray-700 font-heebo">{postContent.text1}{"  "}{"|"}{"  "}{postContent.text2}</h5>
            <h5 className="text-left pt-5 text-gray-700 font-heebo">{postContent.details}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default recentPost;
