import React from "react";

const Appfont = ({ children, className }) => {
  return (
    <p className={`lg:text-[16x] md:text-[15px]  text-textPrimary font-Gilroy text-[14px] font-bold leading-5 tracking-wide ${className} `}>
      {children}
    </p>
  );
};

export default Appfont;

export const AppHeading = ({ children, className }) => {
  return (
    <p className={`lg:text-[42px] md:text-[38px]   text-black font-bold font-Gilroy text-[32px]  tracking-wide ${className}`}>
      {children}
    </p>
  );
};
export const AppCustomFont = ({ children, className }) => {
  return <p className={`font-Gilroy font-bold  ${className}`}>{children}</p>;
};
