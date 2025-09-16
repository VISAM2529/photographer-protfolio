import AboutUs from "@/components/AboutUs";
import Colloboration from "@/components/Colloboration";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import WhatWeOffer from "@/components/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <HeroSection/>
  <AboutUs/>
  <Portfolio/>
  <WhatWeOffer/>
  <Colloboration/>
  <Testimonials/>
  
  </>
  );
}
