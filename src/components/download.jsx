import React from "react";
import iphone from "../assets/3iphone13.png";
import { FaApple } from "react-icons/fa";

const Download = () => {
  return (
    <div className=" mx-auto w-4/5 bg-black flex justify-center">
      <div className="w-2/5 flex flex-col justify-center ">
        <h1 className="text-4xl text-white ">Ready To Get Started?</h1>
        <p className="text-xl font-light text-white py-4">
          Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
        </p>
        <button className=" w-fit text-xl font-normal  flex gap-3 items-center px-6 py-4 rounded bg-white">
          Download App
          <span className="text-4xl">
            <FaApple />
          </span>
        </button>
      </div>
      <div className="w-1/2">
        <img className="" src={iphone} alt="" />
      </div>
    </div>
  );
};

export default Download;
