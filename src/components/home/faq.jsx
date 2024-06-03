import React from "react";
import { faq } from "../../assets/data.json";
import Star from "../common/star";

const Faq = () => {
  return (
    <div className="w-4/5 mx-auto relative">
      <Star right={"left-1/3"} top={"top-10"} delay={"delay1000"} />
      <h4 className="redHeading">FAQ</h4>
      <h1 className="heading pb-8 sm:w-2/5">Frequently Asked Questions</h1>
      <div className="flex justify-between flex-wrap ">
        {faq &&
          faq.map((item, ind) => {
            return [0, 3, 4].includes(ind) ? (
              <div
                key={ind}
                className="sm:w-1/2 bg-red-500 text-white px-4 py-6 rounded-lg mb-8"
              >
                <h2 className="subHeading font-bold py-2">{item.title}</h2>
                <p className="text-white text-sm font-light sm:font-semibold w-4/5">
                  "{item.description}"
                </p>
              </div>
            ) : (
              <div key={ind} className="sm:w-1/2 px-4 py-6 rounded-lg">
                <h2 className="subHeading font-bold py-2">{item.title}</h2>
                <p className=" text-sm font-light sm:font-semibold w-4/5">
                  "{item.description}"
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faq;
