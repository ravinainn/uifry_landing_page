import React from "react";
import iphone from "../../assets/iphoneRing.png";
import { features } from "../../assets/data.json";
import { GiStarShuriken } from "react-icons/gi";
import { TbHexagon3D } from "react-icons/tb";
import { BiCube } from "react-icons/bi";
import YellowBlur from "../common/yellowBlur";
import RedBlur from "../common/redBlur";
import Star from "../common/star";

const Features = () => {
  return (
    <div className="flex justify-center flex-row items-center flex-wrap pb-20">
      <div className="hidden sm:block w-2/5 relative">
        <Star top={"top-20"} delay={"delay1500"} />
        <img src={iphone} alt="" />
        <YellowBlur top={"top-72"} left={"left-40"} />
        <RedBlur top={"top-80"} left={"left-32"} />
      </div>
      <div className="w-4/5 sm:w-2/5 relative">
        <YellowBlur top={"top-30"} right={"-right-72"} />
        <RedBlur top={"top-32"} right={"-right-60"} />

        <h4 className="redHeading">FEATURES</h4>
        <h1 className="heading pb-8">Uifry Premium</h1>
        {features &&
          features.map((f, ind) => {
            return (
              <div key={ind}>
                <h2 className="flex gap-3 subHeading text-center items-center py-4">
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
