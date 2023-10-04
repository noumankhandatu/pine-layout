import React from "react";

const Appfont = ({ children, className }) => {
  return (
    <p className={`text-textPrimary font-Gilroy text-[16px] font-bold leading-5 tracking-wide ${className} `}>
      {children}
    </p>
  );
};

export default Appfont;

export const AppHeading = ({ children, className }) => {
  return (
    <p className={`text-black font-bold font-Gilroy text-[42px]  tracking-wide ${className}`}>
      {children}
    </p>
  );
};
export const AppCustomFont = ({ children, className }) => {
  return <p className={`font-Gilroy font-bold  ${className}`}>{children}</p>;
};
