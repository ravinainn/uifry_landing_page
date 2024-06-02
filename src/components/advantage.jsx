import React from "react";
import iphone from "../assets/iphoneRing.png";
import { features } from "../assets/data.json";

const Advantages = () => {
  return (
    <div className="flex justify-center flex-row items-center flex-wrap">
      <div className="w-2/5">
        <h4 className="text-xl text-red-500">FEATURES</h4>
        <h1 className="heading pb-8">Why Choose Uifry?</h1>
        {features &&
          features.map((f, ind) => {
            return (
              <div key={ind}>
                <h2 className="flex gap-3 text-2xl text-center items-center py-4">
                  <span className=" text-red-500"></span> {f.title}
                </h2>
                <p className="p">{f.description}</p>
              </div>
            );
          })}
      </div>
      <div className="w-2/5">
        <img src={iphone} alt="" />
      </div>
    </div>
  );
};

export default Advantages;
