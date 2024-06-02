import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/feature";
import Advantages from "../components/advantage";
import Testimonial from "../components/testimonial";
import Faq from "../components/faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
