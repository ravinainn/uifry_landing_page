import React from "react";

const RedBlur = ({ topP, leftP, topN, bottomP, top, right, left, bottom }) => {
  return (
    <div
      className={`w-48 h-44 rounded-full filter blur-2xl bg-red-500 mix-blend-multiply absolute -z-50 ${top} ${right} ${left} ${bottom} bottom-${bottomP} -top-${topN} top-${topP} left-${leftP}`}
    ></div>
  );
};

export default RedBlur;
