import React from "react";
import { faq } from "../../assets/data.json";

const Faq = () => {
  return (
    <div className="w-4/5 mx-auto ">
      <h4 className="text-xl text-red-500 ">FAQ</h4>
      <h1 className="heading pb-8 w-2/5">Frequently Asked Questions</h1>
      <div className="flex justify-between flex-wrap ">
        {faq &&
          faq.map((item, ind) => {
            return [0, 3, 4].includes(ind) ? (
              <div className="w-1/2 bg-red-500 text-white px-4 py-6 rounded-lg mb-8">
                <h2 className="text-3xl font-bold py-2">
                  The Best Financial Accounting App Ever!
                </h2>
                <p className="text-white text-sm font-semibold w-4/5">
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                  Ultricies. In Ultrices Malesuada Elit Mauris."
                </p>
              </div>
            ) : (
              <div className="w-1/2 px-4 py-6 rounded-lg">
                <h2 className="text-3xl font-bold py-2">
                  The Best Financial Accounting App Ever!
                </h2>
                <p className=" text-sm font-semibold w-4/5">
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                  Ultricies. In Ultrices Malesuada Elit Mauris."
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faq;
