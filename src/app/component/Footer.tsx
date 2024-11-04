import React from "react";
import Image from "next/image";

// Object containing paths to social media icons
const footerImages = {
    fb: "/images/fb.svg",
    twitter: "/images/twitter.svg",
    instagram: "/images/insta.svg",
    linkedin: "/images/linkedin.svg"
};

// Footer component
const Footer = () => {
    return(
        // Main footer container
        <div className="bg-bodyColor px-[200px] py-[30px]">
            {/* Social media icons container */}
            <div className="flex flex-row justify-center gap-5">
                {/* Facebook icon */}
                <img src={footerImages.fb} alt="fb" height="20px" width="20px"/>
                {/* Twitter icon */}
                <img src={footerImages.twitter} alt="twitter" height="20px" width="20px"/>
                {/* Instagram icon */}
                <img src={footerImages.instagram} alt="instagram" height="20px" width="20px"/>
                {/* LinkedIn icon */}
                <img src={footerImages.linkedin} alt="linkedin" height="20px" width="20px"/>
            </div>
            {/* Copyright text container */}
            <div>
                <h1 className="flex flex-row font-bold justify-center pt-4">Copyright © 2020 All rights reserved</h1>
            </div>
        </div>
    )
}

export default Footer;
