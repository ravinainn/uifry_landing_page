import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/home/hero";
import Features from "../components/home/feature";
import Advantages from "../components/home/advantage";
import Testimonial from "../components/home/testimonial";
import Faq from "../components/home/faq";
import Download from "../components/home/download";

const Home = () => {
  return (
    <div className=" overflow-hidden antialiased">
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <Download />
    </div>
  );
};

export default Home;
