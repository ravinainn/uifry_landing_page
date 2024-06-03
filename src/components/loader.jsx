import React from "react";
import loading from "../assets/loading.svg";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img className=" w-32" src={loading} alt="" />
    </div>
  );
};

export default Loader;
