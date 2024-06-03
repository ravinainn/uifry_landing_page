import React from "react";
import rings from "../../assets/blackRing.svg";
import img5 from "../../assets/testimonial_group/img1.svg";
import img1 from "../../assets/testimonial_group/Group_27.png";
import img2 from "../../assets/testimonial_group/Group_28.png";
import img3 from "../../assets/testimonial_group/Group_29.png";
import img4 from "../../assets/testimonial_group/Group_30.png";
import Star from "../common/star";
import YellowBlur from "../common/yellowBlur";
import RedBlur from "../common/redBlur";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="relative pb-20">
      <Star right={"right-44"} top={"-top-20"} delay={"delay1500"} />
      <motion.h4
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="text-sm tracking-widest sm:text-xl text-center"
      >
        TESTIMONIAL
      </motion.h4>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="heading text-center pb-8"
      >
        What Our Users <br /> Say About Us?
      </motion.h1>
      <div className="flex justify-center flex-row items-center flex-wrap">
        <div className="hidden sm:block w-2/5 relative">
          <div>
            <img src="" alt="" />
          </div>
          <Star bottom={"bottom-20"} delay={"delay500"} />
          <img src={img5} alt="" />
          <img className="absolute -top-12 -left-16 -z-10" src={rings} alt="" />
          <YellowBlur top={"top-1/3"} left={"left-52"} />
          <RedBlur top={"top-1/3"} left={"left-48"} />
        </div>
        <div className="w-4/5 sm:w-2/5 flex flex-col  gap-6">
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl  py-4 w-3/6"
          >
            The Best Financial Accounting App Ever!
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="p w-4/5"
          >
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor
            Neque Lorem Sapien, Suspendisse Aliquam.”
          </motion.p>
          <div className="flex flex-row w-2/5 gap-4">
            <img className="w-10 h-10" src={img2} alt="" />
            <img className="opacity-50 w-8 h-8" src={img1} alt="" />
            <img className="opacity-50 w-8 h-8" src={img3} alt="" />
            <img className="opacity-50 w-8 h-8" src={img4} alt="" />
          </div>
          <motion.h4 className="text-sm sm:text-lg">Nick Jonas</motion.h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
