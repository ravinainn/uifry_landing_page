import React from "react";
import iphone from "../assets/iphoneRing.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const Advantages = () => {
  return (
    <div>
      <div className="flex justify-center flex-row items-center flex-wrap">
        <div className="w-2/5">
          <h4 className="text-xl text-red-500">ADVANTAGES</h4>
          <h1 className="heading pb-8">Why Choose Uifry?</h1>

          <div>
            <h2 className="flex gap-3 text-2xl text-center items-center py-4">
              <span className="bg-red-500 p-2 rounded-full text-white">
                <IoMdNotificationsOutline />
              </span>
              Clever Notifications
            </h2>
            <p className="p">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
        <div className="w-2/5">
          <img src={iphone} alt="" />
        </div>
      </div>
      <div className="flex justify-center flex-row items-center flex-wrap">
        <div className="w-2/5">
          <img src={iphone} alt="" />
        </div>
        <div className="w-2/5">
          <div>
            <h2 className="flex gap-3 text-2xl text-center items-center py-4">
              <span className="bg-red-500 p-2 rounded-full text-white">
                <IoMdNotificationsOutline />
              </span>
              Fully Customizable
            </h2>
            <p className="p">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
