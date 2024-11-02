import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./sections/hero-section/page";
import RecentPost from "./sections/recent-posts/page";
import FeaturedWorks from "./sections/featured-wroks/page";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <div><Navbar /></div>
    <div><HeroSection /></div>
    <div><RecentPost /></div>
    <div><FeaturedWorks /></div>
    <div><Footer /></div>
    </>
  );
}
