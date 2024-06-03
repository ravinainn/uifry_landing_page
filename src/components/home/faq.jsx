import React from "react";
import { faq } from "../../assets/data.json";
import Star from "../common/star";
import { motion } from "framer-motion";

const Faq = () => {
  const container = {
    hidden: { opactity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };
  return (
    <div className="w-4/5 mx-auto relative ">
      <Star right={"left-1/3"} top={"top-10"} delay={"delay1000"} />
      <motion.h4
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="redHeading"
      >
        FAQ
      </motion.h4>
      <motion.h1
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="heading pb-8 sm:w-2/5"
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="flex justify-between flex-wrap ">
        {faq &&
          faq.map((item, ind) => {
            return [0, 3, 4].includes(ind) ? (
              <div
                key={ind}
                className="sm:w-1/2 bg-red-500 text-white px-4 py-6 rounded-lg mb-8"
              >
                <motion.h2
                  variants={container}
                  whileInView="visible"
                  initial="hidden"
                  className="subHeading font-bold py-2"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  variants={container}
                  whileInView="visible"
                  initial="hidden"
                  className="text-white text-sm font-light sm:font-semibold w-4/5"
                >
                  "{item.description}"
                </motion.p>
              </div>
            ) : (
              <div key={ind} className="sm:w-1/2 px-4 py-6 rounded-lg">
                <motion.h2
                  variants={container}
                  whileInView="visible"
                  initial="hidden"
                  className="subHeading font-bold py-2"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  variants={container}
                  whileInView="visible"
                  initial="hidden"
                  className=" text-sm font-light sm:font-semibold w-4/5"
                >
                  "{item.description}"
                </motion.p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faq;
