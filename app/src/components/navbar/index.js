import React from "react";
import logo from "../../assets/logo.PNG";
import Image from "next/image";
import Appfont from "../../Appfont/Appfont";
import AppButton from "../button";
import SearchBar from "../searchbar";

const values = ["Products", "Developers", "Packages", "Blog"];

const Navbar = () => {
  return (
    <div>
      {/* Web view (Large screens and above) */}
      <div className={`lg:flex justify-between items-center py-4 px-6 bg-bgPrimary hidden`}>
        <div>
          <Image src={logo} width={"auto"} height="auto" alt="logo" />
        </div>
        <SearchBar />
        <div className="flex space-x-4">
          {values.map((items, id) => {
            return <Appfont key={id}>{items}</Appfont>;
          })}
        </div>
        <AppButton className={"py-[8px] px-[16px]"}>Sign Up</AppButton>
      </div>

      {/* Mobile view (Mobile-sized screens and below) */}
      <div className={`lg:hidden flex justify-between items-center py-4 px-6 bg-bgPrimary`}>
        <div>
          <Image src={logo} width={"auto"} height="auto" alt="logo" />
        </div>
        <div className=" md:block hidden">
          <SearchBar />
        </div>
        <div className="flex items-center">
          <AppButton className={"py-[8px] px-[16px] mr-2"}>Sign Up</AppButton>
          <Burger />
        </div>
        {/* Add your mobile navigation (burger menu) component here */}
      </div>
    </div>
  );
};

export default Navbar;

const Burger = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    </>
  );
};
