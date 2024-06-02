import React from "react";
import iphone from "../../assets/iphoneRing.png";
import { features } from "../../assets/data.json";
import { GiStarShuriken } from "react-icons/gi";
import { TbHexagon3D } from "react-icons/tb";
import { BiCube } from "react-icons/bi";

const Features = () => {
  return (
    <div className="flex justify-center flex-row items-center flex-wrap">
      <div className="w-2/5 relative">
        <img src={iphone} alt="" />
        <div className=" w-48 h-44 rounded-full filter blur-2xl bg-yellow-300 mix-blend-multiply absolute -z-10 top-72 left-40"></div>
        <div className=" w-48 h-44 rounded-full filter blur-2xl bg-red-500 mix-blend-multiply absolute -z-10 top-80 left-32"></div>
      </div>
      <div className="w-2/5 relative">
        <div className=" w-48 h-44 rounded-full filter blur-2xl bg-yellow-300 mix-blend-multiply absolute -z-10 top-30 -right-72"></div>
        <div className=" w-48 h-44 rounded-full filter blur-2xl bg-red-500 mix-blend-multiply absolute -z-10 top-32 -right-60"></div>
        <h4 className="text-xl text-red-500">FEATURES</h4>
        <h1 className="heading pb-8">Uifry Premium</h1>
        {features &&
          features.map((f, ind) => {
            return (
              <div key={ind}>
                <h2 className="flex gap-3 text-2xl text-center items-center py-4">
                  <span className=" text-red-500">
                    {f.icon === "icon1" && <GiStarShuriken />}
                    {f.icon === "icon2" && <TbHexagon3D />}
                    {f.icon === "icon3" && <BiCube />}
                  </span>{" "}
                  {f.title}
                </h2>
                <p className="p">{f.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Features;
