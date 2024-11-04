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
                <Image src={footerImages.fb} alt="fb" className="h-20 w-20"/>
                {/* Twitter icon */}
                <Image src={footerImages.twitter} alt="twitter" className="h-20 w-20"/>
                {/* Instagram icon */}
                <Image src={footerImages.instagram} alt="instagram" className="h-20 w-20"/>
                {/* LinkedIn icon */}
                <Image src={footerImages.linkedin} alt="linkedin" className="h-20 w-20"/>
            </div>
            {/* Copyright text container */}
            <div>
                <h1 className="flex flex-row font-bold justify-center pt-4">Copyright © 2020 All rights reserved</h1>
            </div>
        </div>
    )
}

export default Footer;
