import React from "react";
import Navbar from "../components/Header/navbar";
import Hero from "../components/hero";
import Features from "../components/feature";
import Advantages from "../components/advantage";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Advantages />
    </div>
  );
};

export default Home;
