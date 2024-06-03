import React from "react";
import star from "../../assets/StarBlack.svg";

const Star = ({ right, left, top, bottom, delay }) => {
  return (
    <img
      className={`absolute animate-pulse ${delay}  ${right} ${left} ${top} ${bottom} -z-50`}
      src={star}
      alt=""
    />
  );
};

export default Star;
