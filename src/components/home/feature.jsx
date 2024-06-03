import React from "react";
import iphone from "../../assets/iphoneRing.png";
import { features } from "../../assets/data.json";
import { GiStarShuriken } from "react-icons/gi";
import { TbHexagon3D } from "react-icons/tb";
import { BiCube } from "react-icons/bi";
import YellowBlur from "../common/yellowBlur";
import RedBlur from "../common/redBlur";
import Star from "../common/star";
import { motion } from "framer-motion";

const Features = () => {
  const container = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.25 } },
  };
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

        <motion.h4
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="redHeading"
        >
          FEATURES
        </motion.h4>
        <motion.h1
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="heading pb-8"
        >
          Uifry Premium
        </motion.h1>
        {features &&
          features.map((f, ind) => {
            return (
              <div key={ind}>
                <motion.h2
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  className="flex gap-3 subHeading text-center items-center py-4"
                >
                  <span className=" text-red-500">
                    {f.icon === "icon1" && <GiStarShuriken />}
                    {f.icon === "icon2" && <TbHexagon3D />}
                    {f.icon === "icon3" && <BiCube />}
                  </span>{" "}
                  {f.title}
                </motion.h2>
                <motion.p
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  className="p"
                >
                  {f.description}
                </motion.p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Features;
