import React from "react";
import iphone from "../assets/iphone13profront.png";
import { CgPlayButtonO } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="flex justify-center flex-row items-center flex-wrap h-hfull">
      <div className="w-1/2 p-4 mx-auto">
        <h1 className="title pb-4 font-thin">
          Make The Best Financial Decisions
        </h1>
        <p className="pb-4">
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="flex">
          <button className="button">
            <span>Get Started</span>
          </button>
          <button className=" px-8 py-4 flex items-center gap-3">
            <CgPlayButtonO />
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      <div className="relative w-2/5 h-full">
        <img className="absolute z-20 w-2/3" src={iphone} alt="iphone13" />
        <img
          className=" absolute z-10 left-20 top-16  w-2/3"
          src={iphone}
          alt="iphone13"
        />
        <img
          className="absolute z-0 left-40 top-32 w-2/3"
          src={iphone}
          alt="iphone13"
        />
      </div>
    </div>
  );
};

export default Hero;
