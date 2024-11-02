import React from "react";
import Image from "next/image";

const footerImages = {
    fb: "/images/facebook.png",
    twitter: "/images/twitter.png",
    instagram: "/images/instagram.png",
    linkedin: "/images/linkedin.png"
};


const Footer = () => {
    return(
        <div className="bg-bodyColor px-[200px] py-[30px]">
        <div className="flex flex-row justify-center gap-5">
            <img src={footerImages.fb} alt="fb" />
            <img src={footerImages.twitter} alt="twitter" />
            <img src={footerImages.instagram} alt="instagram" />
            <img src={footerImages.linkedin} alt="linkedin" />
        </div>
        <div>
            <h1 className="flex flex-row font-bold justify-center pt-4">Copyright © 2020 All rights reserved</h1>
        </div>
        </div>
    )
}

export default Footer;