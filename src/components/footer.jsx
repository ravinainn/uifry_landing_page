import React from "react";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" w-4/5 mx-auto flex gap-5 ">
      <div className="">
        <Link to="/" className="flex items-center space-x-1">
          <BsFire className="text-4xl text-red-500" />
          <span className="self-center text-4xl font-bold whitespace-nowrap">
            uifry
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <MdEmail className="" />
          <p>Help2Fribix.Com</p>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default Footer;
