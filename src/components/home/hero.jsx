import React from "react";
import iphone from "../../assets/iphone13profront.png";
import blackRing from "../../assets/blackRing.svg";
import { CgPlayButtonO } from "react-icons/cg";
import heroComp from "../../assets/heroComp.svg";
import RedBlur from "../common/redBlur";
import YellowBlur from "../common/yellowBlur";
import Star from "../common/star";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
  });
  return (
    <div className="flex justify-center pt-32 flex-row items-center flex-wrap min-h-screen">
      <div className="w-4/5 sm:w-1/2 p-4 mx-auto relative">
        <Star top={"-top-24"} left={"-left-12"} delay={"delay500"} />
        <Star left={"left-36"} bottom={"top-80"} delay={"delay1500"} />

        <YellowBlur top={"top-10"} left={"left-80"} />
        <RedBlur top={"-top-6"} left={"left-1/2"} />

        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="title pb-4 "
        >
          Make The Best Financial Decisions
        </motion.h1>
        <motion.p
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="pb-4 p"
        >
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </motion.p>
        <div className="flex">
          <button className="button">
            <span>Get Started</span>
          </button>
          <button className=" px-8 py-4 flex items-center gap-3">
            <CgPlayButtonO />
            <span>Watch Video</span>
          </button>
        </div>
        <div>
          <img src={heroComp} alt="" />
        </div>
      </div>

      <div className="hidden sm:block relative w-2/5 h-full ">
        <RedBlur bottom={"bottom-0"} left={"left-14"} />
        <Star right={"right-20"} delay={"delay1200"} />
        <img className=" z-100 w-2/3" src={iphone} alt="iphone13" />
        <img
          className=" absolute -z-10 left-20 top-16  w-2/3"
          src={iphone}
          alt="iphone13"
        />
        <img
          className="absolute -z-20 left-40 top-32 w-2/3"
          src={iphone}
          alt="iphone13"
        />
        <img
          className="absolute -z-30 top-0 left-10 w-4/5"
          src={blackRing}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
