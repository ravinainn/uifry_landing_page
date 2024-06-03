import React from "react";

const YellowBlur = ({ topP, leftP, topN, top, left, right, bottom }) => {
  return (
    <div
      className={`w-48 h-44 animate-bounce rounded-full filter blur-2xl bg-yellow-300 mix-blend-multiply absolute -z-50 ${top} ${right} ${left} ${bottom} -top-${topN} top-${topP} left-${leftP}`}
    ></div>
  );
};

export default YellowBlur;
