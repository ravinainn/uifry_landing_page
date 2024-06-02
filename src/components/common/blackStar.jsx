import React from "react";
import star from "../../assets/StarBlack.svg";

const BlackStar = ({ right, left, top, bottom }) => {
  return (
    <img
      className={`absolute ${right} ${left} ${top} ${bottom} -z-50`}
      src={star}
      alt=""
    />
  );
};

export default BlackStar;
