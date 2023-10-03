import React from "react";
import logo from "../../assets/logo.PNG";
import Image from "next/image";
import Appfont from "../../Appfont/Appfont";
import AppButton from "../button";
import SearchBar from "../searchbar";

const values = ["Products", "Developers", "Packages", "Blog"];

const Navbar = () => {
  return (
    <div className={`flex justify-around items-center py-4 px-6 bg-bgPrimary `}>
      <div>
        <Image src={logo} width={"auto"} height="auto" alt="logo" />
      </div>
      <SearchBar />
      <div className="flex space-x-4">
        {values.map((items, id) => {
          return <Appfont key={id}>{items}</Appfont>;
        })}
      </div>
      <AppButton>Sign Up</AppButton>
    </div>
  );
};

export default Navbar;
