import React from "react";
import iphone from "../../assets/iphone13profront.png";
import blackRing from "../../assets/blackRing.svg";
import { CgPlayButtonO } from "react-icons/cg";
// import RedBlur from "../common/redBlur";
// import YellowBlur from "../common/yellowBlur";

const Hero = () => {
  return (
    <div className="flex justify-center flex-row items-center flex-wrap h-hfull">
      <div className="w-1/2 p-4 mx-auto relative">
        {/* <RedBlur />
        <YellowBlur /> */}
        {/* Blurr */}
        <div className=" w-48 h-44 rounded-full filter blur-2xl bg-yellow-300 mix-blend-multiply absolute -z-10 top-10 left-80"></div>
        <div className=" w-48 h-44 rounded-full filter blur-2xl bg-red-500 mix-blend-multiply absolute -z-10 -top-6 left-1/2"></div>
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
        <img className="absolute z-30 w-2/3" src={iphone} alt="iphone13" />
        <img
          className=" absolute z-20 left-20 top-16  w-2/3"
          src={iphone}
          alt="iphone13"
        />
        <img
          className="absolute z-10 left-40 top-32 w-2/3"
          src={iphone}
          alt="iphone13"
        />
        <img className="absolute z-0  left-10 w-4/5" src={blackRing} alt="" />

        <div className=" w-48 h-44 rounded-full filter blur-2xl bg-red-500 mix-blend-multiply absolute -z-10 bottom-10 left-1/3"></div>
      </div>
    </div>
  );
};

export default Hero;
