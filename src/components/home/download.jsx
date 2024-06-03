import React from "react";
import iphone from "../../assets/3iphone13.png";
import { FaApple } from "react-icons/fa";
import RedBlur from "../common/redBlur";
import YellowBlur from "../common/yellowBlur";
import Star from "../common/star";
import WhiteStar from "../common/whiteStar";
import WhiteRing from "../../assets/whiteRing.svg";

const Download = () => {
  return (
    <div className=" mx-auto my-20 rounded w-4/5 bg-black flex flex-wrap gap-5 justify-center relative p-10 overflow-hidden">
      <img
        className="absolute -bottom-3/4 -left-52 z-0"
        src={WhiteRing}
        alt=""
      />
      <img className="absolute -top-3/4 -right-52 z-0" src={WhiteRing} alt="" />
      <RedBlur top={"-top-24"} left={"-left-24"} />
      <YellowBlur top={"-top-16"} left={"-left-10"} />
      <Star top={"top-1/2"} left={"-left-20"} delay={"delay500"} />
      <Star top={"top-0"} right={"-right-20"} delay={"delay-1500"} />

      <div className="z-10 sm:w-2/5 flex flex-col justify-center relative">
        <WhiteStar right={"right-0 bottom-20"} delay={"delay-1200"} />
        <h1 className="title text-white ">Ready To Get Started?</h1>
        <p className="p py-4">
          Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
        </p>
        <button className="w-fit text-sm sm:text-xl font-normal  flex gap-3 items-center px-6 py-4 rounded bg-white">
          Download App
          <span className="text-2xl sm:text-4xl">
            <FaApple />
          </span>
        </button>
      </div>
      <div className="z-20 sm:w-1/2 relative">
        <img className="" src={iphone} alt="" />
        <RedBlur bottom={"bottom-20"} right={"right-32"} />
        <YellowBlur bottom={"bottom-16"} right={"right-52"} />
      </div>
    </div>
  );
};

export default Download;
