import React from "react";
import iphone from "../../assets/iphoneRing.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import Star from "../common/star";
import { motion } from "framer-motion";

const Advantages = () => {
  const contA = (delay) => ({
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      optacity: 1,
      x: 0,
      transition: { duration: 1.2, delay: delay },
    },
  });
  // const contB = (delay) => ({
  //   initial: {
  //     opacity: 0,
  //     x: 100,
  //   },
  //   visible: {
  //     optacity: 1,
  //     x: 0,
  //     transition: { duration: 1.2, delay: delay },
  //   },
  // });
  return (
    <div className="pb-20">
      <div className="flex justify-center flex-row items-center flex-wrap">
        <div className="w-4/5 sm:w-2/5">
          <motion.h4
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="redHeading"
          >
            ADVANTAGES
          </motion.h4>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="heading pb-8"
          >
            Why Choose Uifry?
          </motion.h1>

          <div>
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="flex gap-3 subHeading text-center items-center py-4"
            >
              <span className="bg-red-500 p-2 rounded-full text-white">
                <IoMdNotificationsOutline />
              </span>
              Clever Notifications
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="p"
            >
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </motion.p>
          </div>
        </div>
        <div className="hidden  sm:block w-2/5 relative">
          <Star right={"right-0"} delay={"delay500"} />
          <img src={iphone} alt="" />
          <div className=" w-48 h-44 rounded-full filter blur-2xl bg-yellow-300 mix-blend-multiply absolute -z-10 top-72 left-40"></div>
          <div className=" w-48 h-44 rounded-full filter blur-2xl bg-red-500 mix-blend-multiply absolute -z-10 top-80 left-32"></div>
        </div>
      </div>
      <div className="flex justify-center flex-row items-center flex-wrap">
        <div className="hidden sm:block w-2/5 relative">
          <Star right={"right-0"} delay={"delay-1500"} />
          <img src={iphone} alt="" />
          <div className=" w-48 h-44 rounded-full filter blur-2xl bg-yellow-300 mix-blend-multiply absolute -z-10 top-72 left-40"></div>
          <div className=" w-48 h-44 rounded-full filter blur-2xl bg-red-500 mix-blend-multiply absolute -z-10 top-80 left-32"></div>
        </div>
        <div className="w-4/5 sm:w-2/5">
          <div>
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="flex gap-3 subHeading text-center items-center py-4"
            >
              <span className="bg-red-500 p-2 rounded-full text-white">
                <IoMdNotificationsOutline />
              </span>
              Fully Customizable
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="p"
            >
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
