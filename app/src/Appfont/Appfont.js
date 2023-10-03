import React from "react";

const Appfont = ({ children, className }) => {
  return (
    <p className={`text-textPrimary font-gilroy text-[16px] leading-5 tracking-wide ${className}`}>
      {children}
    </p>
  );
};

export default Appfont;

export const AppHeading = ({ children, className }) => {
  return (
    <p className={`text-black font-bold font-gilroy text-[52px]  tracking-wide ${className}`}>
      {children}
    </p>
  );
};
export const AppCustomFont = ({ children, className }) => {
  return <p className={` ${className}`}>{children}</p>;
};
